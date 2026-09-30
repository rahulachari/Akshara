/**
 * Akshara Plotted Developments - Application Orchestrator
 */

class App {
  constructor() {
    this.isAdminViewOpen = false;
    let route = 'home';
    let param = null;
    const hash = window.location.hash;
    if (hash === '#contact') route = 'contact';
    else if (hash.startsWith('#blueprint:')) {
      route = 'blueprint';
      param = decodeURIComponent(hash.split(':')[1]);
    }
    
    this.currentRoute = route;
    this.routeParam = param;
  }

  init() {
    // Subscribe to Store state changes
    window.store.subscribe(() => {
      this.renderApp();
    });

    this.renderApp();
    this.setupEventListeners();
  }

  renderApp() {
    const publicApp = document.getElementById('publicApp');
    const adminApp = document.getElementById('adminApp');

    if (this.isAdminViewOpen) {
      publicApp.style.display = 'none';
      adminApp.style.display = 'block';
      adminApp.innerHTML = window.adminComponents.renderAdminWrapper();
    } else {
      adminApp.style.display = 'none';
      publicApp.style.display = 'block';

      if (this.currentRoute === 'contact') {
        publicApp.innerHTML = `
          ${window.publicComponents.renderHeader()}
          <main>
            ${window.publicComponents.renderContactPage()}
          </main>
          ${window.publicComponents.renderFooter({ isDark: true, hideGiantText: true })}
        `;
        const audio = document.getElementById('bgMusic');
        const iconUnmuted = document.getElementById('iconUnmuted');
        const iconMuted = document.getElementById('iconMuted');
        if (audio && iconUnmuted && iconMuted) {
          audio.play().then(() => {
            iconUnmuted.style.display = 'block';
            iconMuted.style.display = 'none';
          }).catch(e => {
            console.log('Autoplay blocked by browser. User must click to play.');
            iconUnmuted.style.display = 'none';
            iconMuted.style.display = 'block';
            
            const forcePlay = () => {
              if (audio.paused) {
                audio.play().then(() => {
                  iconUnmuted.style.display = 'block';
                  iconMuted.style.display = 'none';
                }).catch(err => console.log('Forced play prevented:', err));
              }
              document.removeEventListener('click', forcePlay);
              document.removeEventListener('scroll', forcePlay);
              document.removeEventListener('touchstart', forcePlay);
            };
            document.addEventListener('click', forcePlay, { once: true });
            document.addEventListener('scroll', forcePlay, { once: true });
            document.addEventListener('touchstart', forcePlay, { once: true });
          });
        }

        setTimeout(() => {
          if (window.publicComponents.initSwipeButton) {
            window.publicComponents.initSwipeButton();
          }
        }, 0);
      } else if (this.currentRoute === 'blueprint') {
        const proj = window.store.getProjects().find(p => p.name === this.routeParam);
        if (!proj) {
          document.body.style.backgroundColor = '#F8F9FA';
          publicApp.innerHTML = `
            <main style="min-height: 100vh; background: #F8F9FA;">
              ${window.publicComponents.render404Page()}
            </main>
          `;
        } else {
          document.body.style.backgroundColor = '#F8F9FA';
          publicApp.innerHTML = `
            <main style="min-height: 100vh; background: #F8F9FA;">
              ${window.publicComponents.renderBlueprintPage(this.routeParam)}
            </main>
          `;
        }
      } else if (this.currentRoute === '404') {
        document.body.style.backgroundColor = '#000000';
        publicApp.innerHTML = `
          <main style="min-height: 100vh; background: #000000;">
            ${window.publicComponents.render404Page()}
          </main>
        `;
      } else {
        document.body.style.backgroundColor = 'var(--bg-primary)';
        publicApp.innerHTML = `
          ${window.publicComponents.renderHeader()}
          <main>
            ${window.publicComponents.renderHero()}
            ${window.publicComponents.renderAbout()}
            <div id="projects-container">
              ${window.publicComponents.renderProjects()}
            </div>
            ${window.publicComponents.renderWhyChoose()}
            ${window.publicComponents.renderProcess()}
            ${window.publicComponents.renderBoard()}
            ${window.publicComponents.renderTestimonials()}
          </main>
          ${window.publicComponents.renderFooter()}
        `;
        // Initialize animations
        setTimeout(() => {
          if (window.publicComponents.initHeroScroll) {
            window.publicComponents.initHeroScroll();
          }
          if (window.publicComponents.initProcessScroll) {
            window.publicComponents.initProcessScroll();
          }
          if (window.publicComponents.initProjectsGooeyNav) {
            window.publicComponents.initProjectsGooeyNav();
          }
        }, 0);
      }
    }
  }

  setupEventListeners() {
    // Handle route changes
    window.addEventListener('hashchange', () => {
      let newRoute = 'home';
      let param = null;
      const hash = window.location.hash;
      if (hash === '#contact') newRoute = 'contact';
      else if (hash === '#404') newRoute = '404';
      else if (hash.startsWith('#blueprint:')) {
        newRoute = 'blueprint';
        param = decodeURIComponent(hash.split(':')[1]);
      } else if (hash && !['#home', '#projects', '#about', '#why-us', '#process', '#leadership', '#testimonials'].includes(hash)) {
        newRoute = '404';
      }

      if (this.currentRoute !== newRoute || this.routeParam !== param) {
        this.currentRoute = newRoute;
        this.routeParam = param;
        this.renderApp();
        if (window.trackEvent) {
          window.trackEvent('route_view', { route: newRoute, param: param || '' });
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => {
          window.dispatchEvent(new Event('scroll'));
        }, 50);
      }
    });

    // Escape key closes modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeGlobalModal();
      }
    });

    // Handle scroll for back-to-top button & dynamic contrast header (Zero-lag RAF sync)
    let navTicking = false;
    let lastScrolled = null;
    let lastTheme = null;

    const handleScroll = () => {
      if (!navTicking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY || window.pageYOffset || 0;
          
          const btn = document.getElementById('backToTopBtn');
          if (btn) {
            if (scrollY > 300) {
              btn.classList.add('visible');
            } else {
              btn.classList.remove('visible');
            }
          }

          const header = document.querySelector('.header-pill-style');
          if (header) {
            const isScrolled = scrollY > 20 || (window.app && window.app.currentRoute !== 'home');
            if (isScrolled !== lastScrolled) {
              lastScrolled = isScrolled;
              header.classList.toggle('scrolled', isScrolled);
            }

            // Zero-Lag Background Theme Detection:
            // Check if floating header is currently over a dark background
            let isDark = false;
            const route = window.app ? window.app.currentRoute : 'home';

            if (route === 'contact' || route === '404') {
              isDark = true;
            } else if (!isScrolled) {
              // Over Hero section (dark overlay/video)
              isDark = true;
            } else {
              const triggerY = 34; // exact vertical center of the floating pill header

              // 1. Direct bounding box check on all dark sections for maximum speed (O(1))
              const darkSections = document.querySelectorAll(
                '#leadership, .board-leadership-cad-section, .footer-dark-box, .contact-page-wrapper, .page-404-container, [data-theme="dark"], .dark-section, .hero-section'
              );

              for (let i = 0; i < darkSections.length; i++) {
                const el = darkSections[i];
                if (el.classList.contains('hero-section') && (window.scrollY || window.pageYOffset || 0) >= (window.innerHeight - 60)) {
                  continue;
                }
                const rect = el.getBoundingClientRect();
                if (rect.top <= 58 && rect.bottom >= 10) {
                  isDark = true;
                  break;
                }
              }

              // 2. Fallback element inspection check for any custom dark cards or backgrounds
              if (!isDark && typeof document.elementsFromPoint === 'function') {
                const elements = document.elementsFromPoint(window.innerWidth / 2, triggerY);
                for (let i = 0; i < elements.length; i++) {
                  const el = elements[i];
                  if (el.closest('.header') || el.closest('#initialPageLoader') || el.closest('.modal-overlay')) {
                    continue;
                  }
                  const bg = window.getComputedStyle(el).backgroundColor;
                  if (bg && bg !== 'transparent' && bg !== 'rgba(0, 0, 0, 0)') {
                    const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
                    if (match) {
                      const r = parseInt(match[1]);
                      const g = parseInt(match[2]);
                      const b = parseInt(match[3]);
                      const lum = (r * 299 + g * 587 + b * 114) / 1000;
                      if (lum < 110) {
                        isDark = true;
                      }
                    }
                    break;
                  }
                }
              }
            }

            const currentTheme = isDark ? 'dark' : 'light';
            if (currentTheme !== lastTheme) {
              lastTheme = currentTheme;
              if (isDark) {
                header.classList.add('theme-on-dark');
                header.classList.remove('theme-on-light');
              } else {
                header.classList.add('theme-on-light');
                header.classList.remove('theme-on-dark');
              }
            }
          }

          navTicking = false;
        });
        navTicking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  openAdminModal() {
    this.isAdminViewOpen = true;
    this.renderApp();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  closeAdminModal() {
    this.isAdminViewOpen = false;
    this.renderApp();
  }

  closeGlobalModal() {
    const modal = document.getElementById('globalModalOverlay');
    if (modal) {
      modal.classList.remove('active');
    }
  }

  showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }
}

window.app = new App();

document.addEventListener('DOMContentLoaded', () => {
  window.app.init();
});
