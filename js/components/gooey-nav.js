/**
 * GooeyNav - High-End Liquid Segmented Navigation Component
 * Physics: Spring (stiffness: 200, damping: 28, mass: 1) with dynamic SVG neck pinch curves
 */

(function (window) {
  const SIZES = {
    xs: {
      padding: '6px 10px',
      fontSize: '11px',
      radius: 8,
      separation: 14,
      iconSize: 12
    },
    sm: {
      padding: '8px 14px',
      fontSize: '12px',
      radius: 10,
      separation: 16,
      iconSize: 13
    },
    md: {
      padding: '10px 20px',
      fontSize: '14px',
      radius: 12,
      separation: 20,
      iconSize: 15
    },
    lg: {
      padding: '12px 24px',
      fontSize: '16px',
      radius: 14,
      separation: 24,
      iconSize: 16
    }
  };

  const NECK_BREAK = 0.22;
  const NECK_H = 100;
  const STIFFNESS = 200;
  const DAMPING = 28;
  const MASS = 1;

  function neckPath(gap, span) {
    if (!Number.isFinite(gap) || !Number.isFinite(span) || gap <= 0 || span <= 0) {
      return '';
    }
    const waist = NECK_H * (1 - gap / (span * NECK_BREAK));
    if (waist <= 0) return '';
    const start = span - gap;
    const mid = start + gap / 2;
    return `M${start} 0 Q${mid} ${NECK_H - waist} ${span} 0 L${span} ${NECK_H} Q${mid} ${waist} ${start} ${NECK_H} Z`;
  }

  class GooeyNav {
    constructor(options = {}) {
      this.container = typeof options.container === 'string'
        ? document.querySelector(options.container)
        : options.container;

      this.items = options.items || [];
      this.value = options.value !== undefined ? options.value : (options.defaultValue || 0);
      this.onChange = options.onChange || (() => {});
      this.size = options.size || 'md';
      this.activeColor = options.activeColor || '#0A0A0A';
      this.activeLabelColor = options.activeLabelColor || '#FFFFFF';
      this.barColor = options.barColor || '#F4F4F9';
      this.unselectedTextColor = options.unselectedTextColor || '#71717A';
      this.className = options.className || '';

      const sizeConfig = SIZES[this.size] || SIZES.md;
      this.span = options.separation !== undefined ? options.separation : sizeConfig.separation;
      this.corner = options.radius !== undefined ? options.radius : sizeConfig.radius;
      this.sizeConfig = sizeConfig;

      this.id = 'gooey-' + Math.random().toString(36).substring(2, 9);
      this.reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      this.animating = false;
      this.lastTime = performance.now();
      this.segmentData = [];

      if (this.container) {
        this.mount();
      }
    }

    isOpen(seam) {
      return (
        seam === 0 ||
        seam === this.items.length ||
        seam - 1 === this.value ||
        seam === this.value
      );
    }

    fill(i) {
      return i === this.value ? this.activeColor : this.barColor;
    }

    getRadii(i) {
      const openLeft = this.isOpen(i);
      const openRight = this.isOpen(i + 1);
      const tl = openLeft ? this.corner : 0;
      const bl = openLeft ? this.corner : 0;
      const tr = openRight ? this.corner : 0;
      const br = openRight ? this.corner : 0;
      return `${tl}px ${tr}px ${br}px ${bl}px`;
    }

    mount(targetContainer) {
      if (targetContainer) {
        this.container = typeof targetContainer === 'string'
          ? document.querySelector(targetContainer)
          : targetContainer;
      }
      if (!this.container) return;

      this.render();
      this.initSegments();
      this.setupResponsive();
    }

    render() {
      const nav = document.createElement('nav');
      nav.setAttribute('data-slot', 'gooey-nav');
      nav.className = `gooey-nav ${this.className}`.trim();
      nav.id = this.id;

      const ul = document.createElement('ul');
      ul.className = 'gooey-nav-list';
      nav.appendChild(ul);

      this.navElement = nav;
      this.listElement = ul;
      this.container.innerHTML = '';
      this.container.appendChild(nav);
    }

    initSegments() {
      this.segmentData = [];
      this.listElement.innerHTML = '';

      this.items.forEach((item, i) => {
        const navItem = typeof item === 'string' ? { label: item } : item;
        const isActive = i === this.value;
        const initialGap = i === 0 ? 0 : (this.isOpen(i) ? this.span : -1);

        const li = document.createElement('li');
        li.setAttribute('data-slot', 'gooey-nav-segment');
        li.className = `gooey-nav-segment ${isActive ? 'is-active' : ''}`;
        li.dataset.index = i;
        li.style.marginLeft = `${initialGap}px`;
        li.style.borderRadius = this.getRadii(i);
        li.style.backgroundColor = isActive ? this.activeColor : this.barColor;

        let pathElem = null;
        let gradElem = null;
        let stopLeft = null;
        let stopRight = null;

        if (i > 0) {
          const gradId = `gooey-neck-grad-${this.id}-${i}`;
          const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          svg.setAttribute('aria-hidden', 'true');
          svg.setAttribute('width', this.span);
          svg.setAttribute('viewBox', `0 0 ${this.span} ${NECK_H}`);
          svg.setAttribute('preserveAspectRatio', 'none');
          svg.setAttribute('class', 'gooey-neck-svg');

          const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
          const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
          gradient.setAttribute('id', gradId);
          gradient.setAttribute('x1', '0');
          gradient.setAttribute('y1', '0');
          gradient.setAttribute('x2', '1');
          gradient.setAttribute('y2', '0');

          stopLeft = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
          stopLeft.setAttribute('offset', '0');
          stopLeft.setAttribute('stop-color', this.fill(i - 1));

          stopRight = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
          stopRight.setAttribute('offset', '1');
          stopRight.setAttribute('stop-color', this.fill(i));

          gradient.appendChild(stopLeft);
          gradient.appendChild(stopRight);
          defs.appendChild(gradient);
          svg.appendChild(defs);

          pathElem = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          pathElem.setAttribute('d', neckPath(initialGap, this.span));
          pathElem.setAttribute('fill', `url(#${gradId})`);
          svg.appendChild(pathElem);

          li.appendChild(svg);
          gradElem = gradient;
        }

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.setAttribute('data-slot', 'gooey-nav-item');
        btn.setAttribute('data-active', isActive ? 'true' : 'false');
        btn.setAttribute('aria-current', isActive ? 'page' : 'false');
        btn.className = `gooey-nav-btn ${isActive ? 'is-active' : ''}`;
        btn.style.color = isActive ? this.activeLabelColor : this.unselectedTextColor;
        btn.style.padding = this.sizeConfig.padding;
        btn.style.fontSize = this.sizeConfig.fontSize;

        let iconMarkup = '';
        if (navItem.icon) {
          iconMarkup = `<span class="gooey-nav-icon">${navItem.icon}</span>`;
        }
        let countMarkup = '';
        if (navItem.count !== undefined) {
          countMarkup = `<span class="gooey-nav-count">${navItem.count}</span>`;
        }

        btn.innerHTML = `${iconMarkup}<span class="gooey-nav-label">${navItem.label}</span>${countMarkup}`;

        btn.addEventListener('click', () => {
          this.select(i);
        });

        li.appendChild(btn);
        this.listElement.appendChild(li);

        this.segmentData.push({
          element: li,
          btnElement: btn,
          pathElement: pathElem,
          stopLeft,
          stopRight,
          gap: initialGap,
          velocity: 0
        });
      });
    }

    select(index) {
      if (index === this.value && !this.animating) return;
      const prevIndex = this.value;
      this.value = index;

      this.onChange(index, this.items[index]);

      // Update segment styles & gradients
      this.segmentData.forEach((seg, i) => {
        const isActive = i === this.value;
        seg.btnElement.setAttribute('data-active', isActive ? 'true' : 'false');
        seg.btnElement.setAttribute('aria-current', isActive ? 'page' : 'false');

        if (isActive) {
          seg.element.classList.add('is-active');
          seg.btnElement.classList.add('is-active');
          seg.element.style.backgroundColor = this.activeColor;
          seg.btnElement.style.color = this.activeLabelColor;
        } else {
          seg.element.classList.remove('is-active');
          seg.btnElement.classList.remove('is-active');
          seg.element.style.backgroundColor = this.barColor;
          seg.btnElement.style.color = this.unselectedTextColor;
        }

        seg.element.style.borderRadius = this.getRadii(i);

        if (seg.stopLeft && seg.stopRight) {
          seg.stopLeft.setAttribute('stop-color', this.fill(i - 1));
          seg.stopRight.setAttribute('stop-color', this.fill(i));
        }
      });

      if (this.reduced) {
        this.segmentData.forEach((seg, i) => {
          const target = i === 0 ? 0 : (this.isOpen(i) ? this.span : -1);
          seg.gap = target;
          seg.velocity = 0;
          seg.element.style.marginLeft = `${target}px`;
          if (seg.pathElement) {
            seg.pathElement.setAttribute('d', '');
          }
        });
        return;
      }

      this.startPhysicsLoop();
    }

    startPhysicsLoop() {
      this.lastTime = performance.now();
      if (!this.animating) {
        this.animating = true;
        this.rafId = requestAnimationFrame(() => this.tick());
      }
    }

    tick() {
      const now = performance.now();
      let dt = (now - this.lastTime) / 1000;
      this.lastTime = now;
      if (dt > 0.05) dt = 0.05;

      let allSettled = true;
      const subSteps = 4;
      const subDt = dt / subSteps;

      for (let i = 1; i < this.items.length; i++) {
        const seg = this.segmentData[i];
        const target = this.isOpen(i) ? this.span : -1;

        for (let s = 0; s < subSteps; s++) {
          const displacement = seg.gap - target;
          const springForce = -STIFFNESS * displacement;
          const dampingForce = -DAMPING * seg.velocity;
          const acceleration = (springForce + dampingForce) / MASS;
          seg.velocity += acceleration * subDt;
          seg.gap += seg.velocity * subDt;
        }

        if (Math.abs(seg.gap - target) < 0.03 && Math.abs(seg.velocity) < 0.03) {
          seg.gap = target;
          seg.velocity = 0;
        } else {
          allSettled = false;
        }

        seg.element.style.marginLeft = `${seg.gap}px`;

        if (seg.pathElement) {
          const d = neckPath(seg.gap, this.span);
          seg.pathElement.setAttribute('d', d);
        }
      }

      if (!allSettled) {
        this.rafId = requestAnimationFrame(() => this.tick());
      } else {
        this.animating = false;
      }
    }

    setupResponsive() {
      const updateSizeForViewport = () => {
        const isMobile = window.innerWidth <= 640;
        const targetSize = isMobile ? 'sm' : (this.size || 'md');
        const config = SIZES[targetSize] || SIZES.md;

        if (config.separation !== this.span || config.radius !== this.corner) {
          this.span = config.separation;
          this.corner = config.radius;
          this.sizeConfig = config;

          this.segmentData.forEach((seg, i) => {
            seg.btnElement.style.padding = config.padding;
            seg.btnElement.style.fontSize = config.fontSize;
            seg.element.style.borderRadius = this.getRadii(i);
            const target = i === 0 ? 0 : (this.isOpen(i) ? this.span : -1);
            seg.gap = target;
            seg.element.style.marginLeft = `${target}px`;
            if (seg.pathElement) {
              const svg = seg.element.querySelector('.gooey-neck-svg');
              if (svg) {
                svg.setAttribute('width', this.span);
                svg.setAttribute('viewBox', `0 0 ${this.span} ${NECK_H}`);
              }
              seg.pathElement.setAttribute('d', neckPath(seg.gap, this.span));
            }
          });
        }
      };

      window.addEventListener('resize', updateSizeForViewport);
    }
  }

  window.GooeyNav = GooeyNav;
})(window);
