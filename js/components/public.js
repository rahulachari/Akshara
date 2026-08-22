/**
 * Akshara Plotted Developments - Public View Components (Showcase Mode)
 */

window.publicComponents = {
  currentCityFilter: 'All',

  renderHeader() {
    return `
      <header class="header header-pill-style card-nav-container" id="mobileCardNav">
        <div class="container header-inner card-nav-top">
          <a href="#" class="brand-logo logo-container" onclick="if(window.app && window.app.currentRoute !== 'home') { window.location.hash = ''; } else { publicComponents.scrollToTop(event); }">
            <div class="brand-logo-mark" style="background: #ffffff; padding: 4px; display: flex; align-items: center; justify-content: center; width: 38px; height: 38px; border-radius: 50%; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">
              <img src="assets/Akshara_logo.png" alt="Akshara Logo" style="width: 24px; height: 24px; object-fit: contain;" />
            </div>
            <div style="display: flex; align-items: center;">
              <div style="line-height: 1; font-weight: 800; letter-spacing: -0.04em;">AKSHARA</div>
            </div>
          </a>

          <nav class="nav-pill-container desktop-only">
            <ul class="nav-links-pill">
              <li><a href="#projects" class="nav-pill-item" onclick="publicComponents.setFilter('All')">OUR PROJECTS</a></li>
              <li><a href="#why-us" class="nav-pill-item">WHY AKSHARA</a></li>
              <li><a href="#process" class="nav-pill-item">PROCESS</a></li>
              <li>
                <a href="#contact" class="nav-pill-item contact-pill-btn">
                  <span class="contact-pill-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </span>
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div class="header-actions" style="display: flex; align-items: center; justify-content: center;">
            <button class="hamburger-menu mobile-menu-toggle" id="mobileNavToggle" aria-label="Menu" onclick="publicComponents.toggleMobileNav()">
              <div class="hamburger-line" style="margin-bottom: 4px;"></div>
              <div class="hamburger-line" style="margin-bottom: 4px;"></div>
              <div class="hamburger-line"></div>
            </button>
          </div>

        </div>

        <!-- Card Nav Content (Mobile Only) -->
        <div class="card-nav-content" id="cardNavContent">
          <a class="nav-card-link" href="#about" onclick="publicComponents.toggleMobileNav()">About Us</a>
          <a class="nav-card-link" href="#projects" onclick="publicComponents.toggleMobileNav()">Our Projects</a>
          <a class="nav-card-link" href="#why-us" onclick="publicComponents.toggleMobileNav()">Why Akshara</a>
          <a class="nav-card-link" href="#process" onclick="publicComponents.toggleMobileNav()">Our Process</a>
          
          <a href="#contact" class="mobile-cta-btn" onclick="publicComponents.toggleMobileNav()">Contact Us</a>
        </div>
      </header>
    `;
  },

  renderContactPage() {
    return `
      <section class="contact-page-wrapper">
        <div class="container">
          <div class="contact-page-grid">
            <div class="contact-page-left">
              <div class="contact-subtitle">Akshara Plotted Layouts, Vellore</div>
              <h1 class="contact-page-title">Activate<br/>your<br/>property.</h1>
              <p class="contact-page-desc">
                We guide buyers in their investment journey to design their future perspectives. 100% verified titles and premium infrastructure.
              </p>
            </div>
            
            <div class="contact-page-right">
              <div class="contact-form-card dark-form">
                <form id="publicEnquiryForm" onsubmit="publicComponents.handleFormSubmit(event)">
                  <div class="form-group">
                    <input type="text" id="leadName" class="form-control border-bottom-only" placeholder="Your Name" required />
                  </div>

                  <div class="form-group">
                    <input type="tel" id="leadPhone" class="form-control border-bottom-only" placeholder="Phone Number" required />
                  </div>
                  
                  <div class="form-group">
                    <input type="email" id="leadEmail" class="form-control border-bottom-only" placeholder="Email Address" />
                  </div>

                  <div class="form-group">
                    <textarea id="leadMessage" class="form-control border-bottom-only" placeholder="Your message..." rows="3"></textarea>
                  </div>

                  <!-- Submit Area with Audio and Swipe -->
                  <div style="display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-top: 40px;">
                    <!-- Smooth Swipe Button -->
                    <div class="swipe-button-container" id="swipeBtnContainer" style="margin-top: 0; flex: 1;">
                      <div class="swipe-button-track">
                        <div class="swipe-button-thumb" id="swipeBtnThumb">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </div>
                        <span class="swipe-button-text">Swipe to submit</span>
                      </div>
                    </div>

                    <!-- Minimal Audio Player -->
                    <div class="audio-control" style="cursor: pointer; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; background: rgba(255,255,255,0.05); border-radius: 50%; border: 1px solid rgba(255,255,255,0.1); flex-shrink: 0; transition: background 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.15)'" onmouseout="this.style.background='rgba(255,255,255,0.05)'" onclick="publicComponents.toggleMusic()" title="Toggle Music">
                      <audio id="bgMusic" loop preload="auto">
                        <source src="/assets/barely_there.mp3" type="audio/mpeg">
                      </audio>
                      <svg id="iconUnmuted" style="display:none;" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                      <svg id="iconMuted" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
                    </div>
                  </div>

                  <button type="submit" id="hiddenSubmitBtn" style="display: none;"></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  initSwipeButton() {
    const thumb = document.getElementById('swipeBtnThumb');
    const container = document.getElementById('swipeBtnContainer');
    const track = document.querySelector('.swipe-button-track');
    
    if (!thumb || !container || !track) return;
    
    let isDragging = false;
    let startX = 0;
    let currentTranslate = 0;
    
    const trackRect = track.getBoundingClientRect();
    const thumbRect = thumb.getBoundingClientRect();
    // Allow thumb to slide to the very end of the track minus some padding
    const padding = 8;
    const maxDrag = trackRect.width - thumbRect.width - (padding * 2); 
    
    const onMove = (e) => {
      if (!isDragging) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      let currentX = clientX - startX;
      
      if (currentX < 0) currentX = 0;
      if (currentX > maxDrag) currentX = maxDrag;
      
      thumb.style.transform = `translateX(${currentX}px)`;
      
      if (currentX >= maxDrag * 0.95) {
        // Trigger submit
        isDragging = false;
        thumb.style.transform = `translateX(${maxDrag}px)`;
        document.getElementById('hiddenSubmitBtn').click();
        document.querySelector('.swipe-button-text').innerText = 'Submitted ✓';
        
        // Reset after a delay
        setTimeout(() => {
          thumb.style.transform = 'translateX(0px)';
          document.querySelector('.swipe-button-text').innerText = 'Swipe to submit';
        }, 3000);
      }
    };
    
    const onUp = () => {
      if (!isDragging) return;
      isDragging = false;
      thumb.style.transition = 'transform 0.3s ease';
      thumb.style.transform = 'translateX(0px)';
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
      document.removeEventListener('touchmove', onMove);
      document.removeEventListener('touchend', onUp);
    };
    
    const onDown = (e) => {
      isDragging = true;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      // Extract current transform value
      const transform = thumb.style.transform;
      let currentX = 0;
      if (transform && transform.includes('translateX')) {
        currentX = parseFloat(transform.replace('translateX(', '').replace('px)', '')) || 0;
      }
      startX = clientX - currentX;
      thumb.style.transition = 'none';
      
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
      document.addEventListener('touchmove', onMove);
      document.addEventListener('touchend', onUp);
    };
    
    thumb.addEventListener('mousedown', onDown);
    thumb.addEventListener('touchstart', onDown);
  },

  renderHero() {
    return `
      <section class="hero-section" id="hero">
        <div class="hero-sticky">
          <div class="hero-background">
            <img src="assets/hero_visual.png" alt="Akshara Background" id="heroZoomImage" />
          </div>

          <div class="hero-content cinematic-content">
            <h1 class="impact akshara-hero-title">AKSHARA</h1>
            <p class="hero-subtitle">Plotted Developments</p>
            <div class="hero-ctas" style="justify-content: center; margin-top: 40px; margin-bottom: 0;">
              <a href="#projects" class="btn btn-primary btn-lg btn-cinematic">
                View Project Showcase
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  initHeroScroll() {
    const heroImage = document.getElementById('heroZoomImage');
    const heroContent = document.querySelector('.cinematic-content');
    
    if (!heroImage) return;

    if (this._onHeroScroll) {
      window.removeEventListener('scroll', this._onHeroScroll);
    }

    this._onHeroScroll = () => {
      const section = document.getElementById('hero');
      if (!section) return;
      
      const rect = section.getBoundingClientRect();
      const start = rect.top;
      const maxScroll = rect.height - window.innerHeight;
      
      let progress = 0;
      if (start <= 0 && maxScroll > 0) {
        progress = Math.min(Math.abs(start) / maxScroll, 1);
      } else if (start > 0) {
        progress = 0;
      } else {
        progress = 1;
      }

      // Smooth transformations
      const scale = 1 + progress;
      const blur = progress * 10;
      const opacity = 1 - progress;

      heroImage.style.transform = `scale(${scale})`;
      heroImage.style.filter = `blur(${blur}px)`;
      
      if (heroContent) {
        heroContent.style.opacity = opacity;
        heroContent.style.transform = `translateY(${progress * 50}px)`;
      }
    };

    window.addEventListener('scroll', this._onHeroScroll);
    this._onHeroScroll();
  },

  initProcessScroll() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    
    gsap.registerPlugin(ScrollTrigger);

    const steps = gsap.utils.toArray('.scroll-step');
    if (steps.length === 0) return;

    // Timeline progress line
    gsap.to('#processTimelineProgress', {
      height: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: '.process-steps-right',
        start: 'top center',
        end: 'bottom center',
        scrub: true
      }
    });

    // Step cards reveal
    steps.forEach((step, i) => {
      ScrollTrigger.create({
        trigger: step,
        start: 'top center+=100',
        end: 'bottom center-=100',
        toggleClass: 'is-active',
        once: false
      });
    });
  },

  renderAbout() {
    return `
      <section class="section section-secondary" id="about">
        <div class="container about-grid">
          <div>
            <span class="section-tag">About Akshara</span>
            <h2 class="section-title">Setting the Landmark Standard for Residential Plotted Layouts</h2>
            <p class="section-subtitle" style="margin-bottom: 24px;">
              Founded with an unyielding commitment to legal clarity and civil engineering excellence, Akshara is a premier plotted land developer operating across South India.
            </p>
            <p style="color: var(--text-secondary); margin-bottom: 24px;">
              We acquire strategic land pockets, secure all statutory approvals (DTCP, CMDA, RERA, TUDA), construct heavy-duty asphalt roads with subterranean water and electrical lines, and deliver ready-to-build residential plots.
            </p>

            <div class="about-features">
              <div class="about-feature-box">
                <div class="about-feature-title">Legal Clarity</div>
                <div class="about-feature-desc">100% clear parent title deeds, encumbrance certificates, and verified approval certifications.</div>
              </div>
              <div class="about-feature-box">
                <div class="about-feature-title">Infrastructure Quality</div>
                <div class="about-feature-desc">40ft & 50ft wide blacktop roads, underground storm water drains, solar street lights, and park greenery.</div>
              </div>
            </div>
          </div>

          <div style="position: relative;">
            <img src="assets/about_showcase.png" alt="Akshara Infrastructure Showcase" style="border-radius: var(--radius-md); box-shadow: var(--shadow-pop); border: 1px solid var(--border-light); width: 100%; height: 100%; object-fit: cover;" />
          </div>
        </div>
      </section>
    `;
  },

  renderProjects() {
    const projects = window.store.getProjects(this.currentCityFilter);
    const cities = ['All', 'Vellore', 'Chittoor', 'Tirupati', 'Chennai'];

    return `
      <section class="section" id="projects">
        <div class="container">
          <div class="section-header" style="display: flex; align-items: flex-end; justify-content: space-between; flex-wrap: wrap; gap: 20px;">
            <div>
              <span class="section-tag">Project Portfolio</span>
              <h2 class="section-title">Our Plotted Layout Developments</h2>
              <p class="section-subtitle">Filter our DTCP, CMDA & RERA approved layout developments by city.</p>
            </div>
          </div>

          <!-- City Filters -->
          <div class="city-filter-tabs">
            ${cities.map(city => `
              <button class="filter-tab ${this.currentCityFilter === city ? 'active' : ''}" onclick="publicComponents.setFilter('${city}')">
                ${city} ${city !== 'All' ? `(${window.store.getProjects(city).length})` : `(${window.store.getProjects('All').length})`}
              </button>
            `).join('')}
          </div>

          <!-- Projects Grid -->
          <div class="projects-grid">
            ${projects.map(proj => `
              <div class="project-card">
                <div class="project-thumb">
                  <img src="${proj.image}" alt="${proj.name}" />
                  <span class="project-status-badge ${proj.status === 'Ready' ? 'status-ready' : proj.status === 'Upcoming' ? 'status-upcoming' : 'status-sold'}">
                    ${proj.status === 'Ready' ? 'Completed Layout' : proj.status === 'Upcoming' ? 'Upcoming Layout' : 'Sold Out'}
                  </span>
                  <span class="project-city-tag">📍 ${proj.city}</span>
                </div>
                <div class="project-body">
                  <h3 class="project-name">${proj.name}</h3>
                  <div class="project-location">📍 ${proj.location}</div>

                  <div class="project-specs">
                    <div>
                      <div class="spec-item-label">Plot Dimensions</div>
                      <div class="spec-item-value">${proj.plotSizes}</div>
                    </div>
                    <div>
                      <div class="spec-item-label">Approval Authority</div>
                      <div class="spec-item-value">${proj.city === 'Chennai' ? 'CMDA Approved' : proj.city === 'Tirupati' ? 'TUDA Approved' : 'DTCP Approved'}</div>
                    </div>
                  </div>

                  <ul class="project-highlights">
                    ${proj.highlights.slice(0, 3).map(h => `<li class="project-highlight-item">${h}</li>`).join('')}
                  </ul>

                  <div class="project-footer">
                    ${(proj.city === 'Vellore' || proj.city === 'Chittoor') ? `
                      <a href="#blueprint:${encodeURIComponent(proj.name)}" class="btn btn-primary btn-full" style="margin-bottom: 8px; display: inline-block; text-align: center;">
                        View Interactive Blueprint
                      </a>
                    ` : ''}
                    <button class="btn btn-secondary btn-full" onclick="publicComponents.openProjectDetail('${proj.id}')">
                      Enquire Now
                    </button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  },

  setFilter(city) {
    this.currentCityFilter = city;
    const container = document.getElementById('projects-container');
    if (container) {
      container.innerHTML = this.renderProjects();
    }
  },

  renderWhyChoose() {
    const features = [
      { icon: '📜', title: '100% DTCP / CMDA Approved', desc: 'Every layout comes with statutory legal clearances from DTCP, CMDA, RERA, or TUDA.' },
      { icon: '🛣️', title: '40ft & 50ft Asphalt Roads', desc: 'Heavy-duty wide blacktop roads engineered for durability and smooth connectivity.' },
      { icon: '⚡', title: 'Subterranean Utility Grid', desc: 'Underground electrical cabling, street lighting lines, and fiber-optic Internet infrastructure.' },
      { icon: '📍', title: 'Strategic Growth Corridors', desc: 'Carefully chosen land locations adjacent to national highways, industrial hubs, and transit lines.' },
      { icon: '🌳', title: 'Avenue Plantation & Parks', desc: 'Dedicated green parks, children play zones, tree-lined avenues, and walking tracks.' },
      { icon: '🔐', title: 'Gated Security Enclave', desc: 'Perimeter compound walls, entrance portals, and 24/7 security checkpoint facilities.' }
    ];

    return `
      <section class="section section-secondary" id="why-us">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">Why Akshara</span>
            <h2 class="section-title">Benchmark Quality in Plotted Layouts</h2>
            <p class="section-subtitle">We develop fully equipped, legally pristine residential communities built to last.</p>
          </div>

          <div class="why-grid">
            ${features.map(f => `
              <div class="why-card">
                <div class="why-icon">${f.icon}</div>
                <h3 class="why-title">${f.title}</h3>
                <p class="why-desc">${f.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  },

  renderProcess() {
    const steps = [
      { step: '01', title: 'Site Inspection & Selection', desc: 'Inspect our completed layouts in Vellore, Tirupati, Chittoor, or Chennai and review masterplan plot demarcations with our site manager.' },
      { step: '02', title: 'Legal Title Verification', desc: 'Examine complete copies of DTCP/RERA approvals, 30-year parent title deeds, and Encumbrance Certificates (EC).' },
      { step: '03', title: 'Plot Allocation', desc: 'Select your preferred plot size and corner orientation in the master layout blueprint.' },
      { step: '04', title: 'Registration & Boundary Handover', desc: 'Complete sale deed registration with physical plot stone boundary marking and title handover.' }
    ];

    return `
      <section class="section" id="process" style="background: var(--bg-primary); position: relative;">
        <div class="container process-sticky-container">
          <div class="process-sticky-left">
            <div class="section-header" style="text-align: left; max-width: 100%;">
              <span class="section-tag">Our Process</span>
              <h2 class="section-title">Transparent 4-Step Layout Journey</h2>
              <p class="section-subtitle" style="margin-left: 0;">From initial site visit to receiving your registered plot title deed.</p>
            </div>
          </div>
          
          <div class="process-steps-right">
            <div class="process-timeline-line">
              <div class="process-timeline-progress" id="processTimelineProgress"></div>
            </div>
            ${steps.map((s, idx) => `
              <div class="process-card scroll-step" data-step="${idx}">
                <div class="process-step-indicator"></div>
                <div class="process-card-content">
                  <div class="process-step-number">${s.step}</div>
                  <h3 class="process-title">${s.title}</h3>
                  <p class="process-desc">${s.desc}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  },

  renderBoard() {
    const board = window.store.getBoardMembers();
    return `
      <section class="section section-secondary" id="leadership">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">Leadership Team</span>
            <h2 class="section-title">Board of Directors</h2>
            <p class="section-subtitle">Driven by engineering excellence, legal integrity, and strategic vision.</p>
          </div>

          <div class="board-grid">
            ${board.map(b => `
              <div class="board-card">
                <div class="board-photo">
                  <img src="${b.photo}" alt="${b.name}" />
                </div>
                <div class="board-info">
                  <h3 class="board-name">${b.name}</h3>
                  <div class="board-designation">${b.designation}</div>
                  <p class="board-bio">${b.bio}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  },



  renderTestimonials() {
    const testimonials = [
      {
        quote: "Akshara’s Katpadi layout infrastructure is outstanding. Clean title documents, wide roads, and smooth registration process.",
        name: "R. Muralidharan",
        location: "Plot Owner, Katpadi Vellore"
      },
      {
        quote: "The quality of asphalt roads and subterranean utility work in their Tirupati layout is unmatched. They deliver what they promise in their CAD layout plans.",
        name: "S. Kavitha & Family",
        location: "Plot Owners, Renigunta Tirupati"
      },
      {
        quote: "Transparency was our priority. Akshara shared all RERA certifications and encumbrance reports upfront. Exceptional plotted developer!",
        name: "K. Mohan Das",
        location: "Plot Owner, Sriperumbudur Chennai"
      },
      {
        quote: "The layout's eco-friendly planning and dedicated green spaces make it the perfect place to build our dream home.",
        name: "P. Karthik",
        location: "Plot Owner, Katpadi Vellore"
      },
      {
        quote: "Clear titles and a very smooth registration process. Akshara’s team handled everything professionally.",
        name: "A. Lakshmi",
        location: "Plot Owner, Renigunta Tirupati"
      },
      {
        quote: "Excellent location and premium amenities. The return on investment here has been beyond our expectations.",
        name: "V. Harish",
        location: "Plot Owner, Sriperumbudur Chennai"
      }
    ];

    const row1 = testimonials;
    const row2 = [...testimonials].reverse();

    const generateTrack = (items) => {
      const duplicated = [...items, ...items];
      return duplicated.map(t => `
        <div class="testimonial-card">
          <p class="card-text">"${t.quote}"</p>
          <div class="card-footer">
            <p class="author-name">${t.name}</p>
            <p class="author-title">${t.location}</p>
          </div>
        </div>
      `).join('');
    };

    return `
      <section class="section testimonials-section" id="testimonials">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">Client Feedback</span>
            <h2 class="section-title">What Plot Owners Say</h2>
            <p class="section-subtitle">Real experiences from clients who bought plots in Akshara developments.</p>
          </div>
        </div>

        <div class="marquee-container">
          <div class="marquee-row marquee-row-left">
            <div class="marquee-track">
              ${generateTrack(row1)}
            </div>
          </div>
          <div class="marquee-row marquee-row-right">
            <div class="marquee-track">
              ${generateTrack(row2)}
            </div>
          </div>
        </div>
      </section>
    `;
  },

  renderContact() {
    const settings = window.store.getSettings();
    const projects = window.store.getProjects('All');

    return `
      <section class="section section-secondary" id="contact">
        <div class="container">
          <div class="contact-grid">
            <div>
              <span class="section-tag">Get In Touch</span>
              <h2 class="section-title">Schedule a Site Visit or Request Layout Details</h2>
              <p class="section-subtitle" style="margin-bottom: 32px;">
                Contact our layout officers for complete CAD masterplan maps and guided site visit visits.
              </p>

              <div class="contact-info-boxes">
                <div class="contact-info-item">
                  <div class="contact-info-icon">📞</div>
                  <div>
                    <div class="contact-info-label">Direct Phone / Enquiries</div>
                    <div class="contact-info-val">${settings.phone1} / ${settings.phone2}</div>
                  </div>
                </div>

                <div class="contact-info-item">
                  <div class="contact-info-icon">✉️</div>
                  <div>
                    <div class="contact-info-label">Email Support</div>
                    <div class="contact-info-val">${settings.email}</div>
                  </div>
                </div>

                <div class="contact-info-item">
                  <div class="contact-info-icon">🏢</div>
                  <div>
                    <div class="contact-info-label">Corporate Office</div>
                    <div class="contact-info-val">${settings.address}</div>
                  </div>
                </div>
              </div>

              <!-- Map Embed -->
              <div class="map-placeholder">
                <iframe src="${settings.mapEmbedUrl}" title="Akshara Office Location"></iframe>
              </div>
            </div>

            <!-- Contact Form -->
            <div class="contact-form-card">
              <h3 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 24px;">Enquire / Schedule Site Visit</h3>
              <form id="publicEnquiryForm" onsubmit="publicComponents.handleFormSubmit(event)">
                <div class="form-group">
                  <label class="form-label">Full Name *</label>
                  <input type="text" id="leadName" class="form-control" placeholder="e.g. Anand Kumar" required />
                </div>

                <div class="form-group" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr)); gap: 16px;">
                  <div>
                    <label class="form-label">Phone Number *</label>
                    <input type="tel" id="leadPhone" class="form-control" placeholder="+91 98765 43210" required />
                  </div>
                  <div>
                    <label class="form-label">Email Address</label>
                    <input type="email" id="leadEmail" class="form-control" placeholder="anand@example.com" />
                  </div>
                </div>

                <div class="form-group" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr)); gap: 16px;">
                  <div>
                    <label class="form-label">City Preference</label>
                    <select id="leadCityPref" class="form-control">
                      <option value="Vellore">Vellore</option>
                      <option value="Tirupati">Tirupati</option>
                      <option value="Chittoor">Chittoor</option>
                      <option value="Chennai">Chennai</option>
                    </select>
                  </div>
                  <div>
                    <label class="form-label">Preferred Project</label>
                    <select id="leadProjectPref" class="form-control">
                      ${projects.map(p => `<option value="${p.name}">${p.name} (${p.city})</option>`).join('')}
                    </select>
                  </div>
                </div>

                <div class="form-group">
                  <label class="form-label">Plot Size Interest / Message</label>
                  <textarea id="leadMessage" class="form-control" placeholder="Tell us your preferred plot size (e.g. 1200 sq.ft, 2400 sq.ft) or visit timing..."></textarea>
                </div>

                <button type="submit" class="btn btn-primary btn-full btn-lg">
                  Submit Enquiry & Get Layout Plan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  renderFooter(options = {}) {
    const settings = window.store.getSettings();
    const bgColor = options.isDark ? '#111' : 'var(--bg-primary)';
    return `
      <footer class="footer-redesigned" style="background-color: ${bgColor};">
        <div class="container">
          <div class="footer-dark-box">
            <div class="footer-left-col">
              <div class="footer-logo" style="margin-bottom: 20px;">
                <div style="background: #ffffff; padding: 10px 22px; border-radius: var(--radius-sm); display: inline-flex; align-items: center; box-shadow: 0 4px 16px rgba(0,0,0,0.2);">
                  <img src="assets/Akshara_logo.png" alt="Akshara One" style="height: 44px; width: auto; object-fit: contain; display: block;" />
                </div>
              </div>
              <h2 class="footer-tagline">Premium Plotted Developments<br/>Built for the Future</h2>
            </div>

            <div class="footer-right-col">
              <div class="footer-links-col">
                <a href="#projects" class="footer-link">Projects</a>
                <a href="#about" class="footer-link">About</a>
                <a href="#why-us" class="footer-link">Why Akshara</a>
              </div>
              
              <div class="footer-links-col">
                <a href="#projects" class="footer-link" onclick="publicComponents.setFilter('Vellore')">Vellore</a>
                <a href="#projects" class="footer-link" onclick="publicComponents.setFilter('Tirupati')">Tirupati</a>
                <a href="#contact" class="footer-link">Contact</a>
              </div>

              <div class="footer-links-col icon-links-col">
                <button class="footer-icon-btn" onclick="app.openAdminModal()" title="Admin Login">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                </button>
                <a href="#" class="footer-icon-btn" title="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://wa.me/917013485016" target="_blank" class="footer-icon-btn" title="WhatsApp">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                </a>
              </div>
            </div>
          </div>
          <div class="footer-legal">
            © ${new Date().getFullYear()} Akshara Plotted Developments. All Rights Reserved.
          </div>
        </div>

        <button class="back-to-top-btn" id="backToTopBtn" onclick="window.scrollTo({top: 0, behavior: 'smooth'})" aria-label="Back to top">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
        </button>
      </footer>

      ${options.hideGiantText ? '' : `
      <div class="footer-giant-text-wrapper">
        <h1 class="footer-giant-text">Akshara.</h1>
      </div>
      `}
    `;
  },

  // Modal Handlers
  openProjectDetail(projectId) {
    const proj = window.store.getProjectById(projectId);
    if (!proj) return;

    window.store.trackProjectView(projectId);

    const modalBody = document.getElementById('globalModalBody');
    modalBody.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <div style="position: relative; height: 360px; border-radius: var(--radius-sm); overflow: hidden;">
          <img src="${proj.image}" alt="${proj.name}" style="width:100%; height:100%; object-fit:cover;" />
          <div style="position:absolute; bottom:20px; left:20px; background:rgba(0,0,0,0.8); backdrop-filter:blur(8px); color:#fff; padding:8px 16px; border-radius:var(--radius-sm); font-weight:800;">
            ${proj.city} • ${proj.status}
          </div>
        </div>

        <div>
          <h2 style="font-size: 2rem; font-weight: 800; margin-bottom: 8px;">${proj.name}</h2>
          <div style="color: var(--text-muted); font-size: 1rem; font-weight: 600; margin-bottom: 20px;">
            📍 ${proj.location}
          </div>
          <p style="font-size: 1.05rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 24px;">
            ${proj.description}
          </p>

          <!-- Key Details Grid -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 140px), 1fr)); gap: 16px; padding: 20px; background: var(--bg-secondary); border-radius: var(--radius-sm); margin-bottom: 32px;">
            <div>
              <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase;">Plot Size Range</div>
              <div style="font-size: 1.1rem; font-weight: 800;">${proj.plotSizes}</div>
            </div>
            <div>
              <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase;">Approval Reference</div>
              <div style="font-size: 0.85rem; font-weight: 800;">${proj.dtcpApproval}</div>
            </div>
            <div>
              <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase;">RERA Registration</div>
              <div style="font-size: 0.85rem; font-weight: 800;">${proj.reraNo}</div>
            </div>
          </div>

          <!-- Masterplan Graphic -->
          <div style="margin-bottom: 32px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 10px;">
              <h3 style="font-size: 1.3rem; font-weight: 800; margin: 0;">Master Layout Blueprint</h3>
              ${proj.layoutPlan && proj.layoutPlan.endsWith('.pdf') ? `
                <a href="${proj.layoutPlan}" target="_blank" class="btn btn-secondary" style="padding: 6px 14px; font-size: 0.85rem; display: inline-flex; align-items: center; gap: 6px;">
                  <span>Open Full PDF</span> ↗
                </a>
              ` : `
                <a href="${proj.layoutPlan}" target="_blank" class="btn btn-secondary" style="padding: 6px 14px; font-size: 0.85rem; display: inline-flex; align-items: center; gap: 6px;">
                  <span>View HD Blueprint</span> 🔍
                </a>
              `}
            </div>
            ${proj.layoutPlan && proj.layoutPlan.endsWith('.pdf') ? `
              <div style="position: relative; width: 100%; height: 480px; border-radius: var(--radius-sm); overflow: hidden; border: 1px solid var(--border-light); background: #f8f9fa;">
                <iframe src="${proj.layoutPlan}" style="width: 100%; height: 100%; border: none;" title="Masterplan blueprint PDF"></iframe>
              </div>
            ` : `
              <div style="width: 100%; border-radius: var(--radius-sm); overflow: hidden; border: 1px solid var(--border-light); background: #ffffff; text-align: center;">
                <img src="${proj.layoutPlan}" alt="Masterplan layout blueprint" style="width: 100%; max-height: 500px; object-fit: contain; display: block;" />
              </div>
            `}
          </div>

          <!-- Amenities -->
          <div style="margin-bottom: 32px;">
            <h3 style="font-size: 1.3rem; font-weight: 800; margin-bottom: 16px;">Layout Amenities & Infrastructure</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 150px), 1fr)); gap: 12px;">
              ${proj.amenities.map(a => `
                <div style="padding: 12px; background: var(--bg-primary); border: 1px solid var(--border-light); border-radius: var(--radius-sm); font-weight: 700; font-size: 0.9rem;">
                  ✓ ${a}
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Direct Project Enquiry Form -->
          <div style="padding: 32px; background: var(--bg-secondary); border-radius: var(--radius-md); border: 1px solid var(--border-light);">
            <h3 style="font-size: 1.3rem; font-weight: 800; margin-bottom: 16px;">Enquire for ${proj.name} Layout Details</h3>
            <form onsubmit="publicComponents.handleModalFormSubmit(event, '${proj.name}', '${proj.city}')">
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr)); gap: 16px; margin-bottom: 16px;">
                <input type="text" id="modalLeadName" class="form-control" placeholder="Your Name *" required />
                <input type="tel" id="modalLeadPhone" class="form-control" placeholder="Phone Number *" required />
              </div>
              <div style="margin-bottom: 16px;">
                <input type="email" id="modalLeadEmail" class="form-control" placeholder="Email Address" />
              </div>
              <button type="submit" class="btn btn-secondary btn-full">Request Site Visit & Layout Plan</button>
            </form>
          </div>
        </div>
      </div>
    `;

    document.getElementById('globalModalOverlay').classList.add('active');
  },

  handleFormSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('leadName')?.value || '';
    const phone = document.getElementById('leadPhone')?.value || '';
    const email = document.getElementById('leadEmail')?.value || '';
    const cityPref = document.getElementById('leadCityPref')?.value || 'Not Specified';
    const projectPref = document.getElementById('leadProjectPref')?.value || 'Not Specified';
    const message = document.getElementById('leadMessage')?.value || '';

    window.store.addLead({ name, phone, email, cityPref, projectPref, message });
    
    const waText = `Hi Akshara Team, I am interested in your plotted layouts.\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`;
    const waUrl = `https://wa.me/917013485016?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, '_blank');

    app.showToast('✓ Redirecting to WhatsApp...');
    document.getElementById('publicEnquiryForm').reset();
  },
  toggleMusic() {
    const audio = document.getElementById('bgMusic');
    const iconUnmuted = document.getElementById('iconUnmuted');
    const iconMuted = document.getElementById('iconMuted');
    if (!audio) return;
    
    if (audio.paused) {
      audio.play().then(() => {
        if (iconUnmuted) iconUnmuted.style.display = 'block';
        if (iconMuted) iconMuted.style.display = 'none';
      }).catch(e => console.log('Audio play prevented:', e));
    } else {
      audio.pause();
      if (iconUnmuted) iconUnmuted.style.display = 'none';
      if (iconMuted) iconMuted.style.display = 'block';
    }
  },

  handleModalFormSubmit(e, projectName, city) {
    e.preventDefault();
    const name = document.getElementById('modalLeadName').value;
    const phone = document.getElementById('modalLeadPhone').value;
    const email = document.getElementById('modalLeadEmail').value;

    window.store.addLead({
      name,
      phone,
      email,
      cityPref: city,
      projectPref: projectName,
      message: `Enquired directly from project showcase page for ${projectName}.`
    });

    app.closeGlobalModal();
    app.showToast(`✓ Request submitted for ${projectName}. Layout officer assigned!`);
  },

  isCardNavOpen: false,
  cardNavTl: null,

  toggleMobileNav() {
    const isMobile = window.innerWidth <= 992;
    if (!isMobile) return;

    const nav = document.getElementById('mobileCardNav');
    const content = document.getElementById('cardNavContent');
    const hamburger = document.getElementById('mobileNavToggle');
    const links = document.querySelectorAll('.nav-card-link, .mobile-cta-btn');
    
    if (!this.isCardNavOpen) {
      this.isCardNavOpen = true;
      hamburger.classList.add('open');
      nav.classList.add('open');
      
      content.style.visibility = 'visible';
      content.style.position = 'static';
      content.style.pointerEvents = 'auto';
      const contentHeight = content.scrollHeight;
      content.style.position = 'absolute';
      
      const targetHeight = 60 + contentHeight + 24; // 24px bottom padding
      
      if (typeof gsap !== 'undefined') {
        gsap.set(links, { y: 20, opacity: 0 });
        
        this.cardNavTl = gsap.timeline();
        this.cardNavTl.to(nav, {
          height: targetHeight,
          duration: 0.6,
          ease: "expo.inOut" // Liquid glass effect
        });
        
        this.cardNavTl.to(links, {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
          stagger: 0.05
        }, "-=0.3"); // Overlap with container drop
      }
      
    } else {
      this.isCardNavOpen = false;
      hamburger.classList.remove('open');
      
      if (this.cardNavTl && typeof gsap !== 'undefined') {
        this.cardNavTl.reverse().then(() => {
          nav.classList.remove('open');
          content.style.visibility = 'hidden';
          content.style.pointerEvents = 'none';
          gsap.set(nav, { height: 60 });
        });
      }
    }
  },

  scrollToTop(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

// Interactive Blueprint Page (Light / Main-Page Match Theme)
  renderBlueprintPage(projectName) {
    if (!projectName) projectName = 'Akshara Urban Enclave';
    const proj = window.store.getProjects('All').find(p => p.name === projectName) || { name: projectName, city: 'Chittoor', location: 'Bangalore Road, Chittoor' };
    
    const isVellore = proj.city && proj.city.toLowerCase() === 'vellore';
    
    // Vellore Layout (Option A) SVG
    const velloreSvg = `
      <!-- OPTION-A (Vellore Layout) Sub-Pixel Exact CAD Polygons -->
      <!-- Commercial Space: 14,111 SQFT -->
      <polygon points="164,231 398,214 398,356 189,356" class="blueprint-plot commercial-unit" data-phase="commercial" onclick="publicComponents.showPlotDetails('vellore-commercial', event)">
        <title>Commercial Space - 14,111 Sq.ft</title>
      </polygon>
      <text x="281" y="292" class="blueprint-plot-num" text-anchor="middle" font-size="11" font-weight="800">COMMERCIAL</text>
      
      <!-- Plot 5: 6,784 SQFT -->
      <polygon points="398,214 497,207 497,356 398,356" class="blueprint-plot" data-phase="residential" onclick="publicComponents.showPlotDetails('vellore-plot-5', event)">
        <title>Plot 5 - 6,784 Sq.ft</title>
      </polygon>
      <text x="447" y="290" class="blueprint-plot-num" text-anchor="middle" font-size="11" font-weight="700">PLOT-5</text>
      
      <!-- Plot 3: 4,924 SQFT -->
      <polygon points="531,204 659,193 659,280 531,280" class="blueprint-plot" data-phase="residential" onclick="publicComponents.showPlotDetails('vellore-plot-3', event)">
        <title>Plot 3 - 4,924 Sq.ft</title>
      </polygon>
      <text x="595" y="244" class="blueprint-plot-num" text-anchor="middle" font-size="11" font-weight="700">PLOT-3</text>
      
      <!-- Plot 4: 4,543 SQFT -->
      <polygon points="531,280 659,280 659,356 531,356" class="blueprint-plot" data-phase="residential" onclick="publicComponents.showPlotDetails('vellore-plot-4', event)">
        <title>Plot 4 - 4,543 Sq.ft</title>
      </polygon>
      <text x="595" y="324" class="blueprint-plot-num" text-anchor="middle" font-size="11" font-weight="700">PLOT-4</text>
      
      <!-- Plot 1: 5,700 SQFT -->
      <polygon points="659,193 786,184 786,280 659,280" class="blueprint-plot" data-phase="residential" onclick="publicComponents.showPlotDetails('vellore-plot-1', event)">
        <title>Plot 1 - 5,700 Sq.ft (Corner)</title>
      </polygon>
      <text x="722" y="240" class="blueprint-plot-num" text-anchor="middle" font-size="11" font-weight="700">PLOT-1</text>
      
      <!-- Plot 2: 4,454 SQFT -->
      <polygon points="659,280 786,280 786,356 659,356" class="blueprint-plot" data-phase="residential" onclick="publicComponents.showPlotDetails('vellore-plot-2', event)">
        <title>Plot 2 - 4,454 Sq.ft</title>
      </polygon>
      <text x="722" y="324" class="blueprint-plot-num" text-anchor="middle" font-size="11" font-weight="700">PLOT-2</text>
    `;

    // Chittoor Layout SVG (Exact CAD Mapped Numbers 1-83)
    const chittoorSvgContent = `
        <!-- Plot #71 (1150 SQFT) -->
        <rect x="2360" y="876" width="380" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-71', event)">
          <title>Plot #71 - 1,150 Sq.ft (Irregular (1150 sq.ft))</title>
        </rect>
        <text x="2550" y="1040" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">71</text>
        <!-- Plot #72 (1200 SQFT) -->
        <rect x="2360" y="1176" width="380" height="292" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-72', event)">
          <title>Plot #72 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="2550" y="1338" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">72</text>
        <!-- Plot #73 (1200 SQFT) -->
        <rect x="2360" y="1472" width="380" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-73', event)">
          <title>Plot #73 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="2550" y="1636" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">73</text>
        <!-- Plot #74 (1200 SQFT) -->
        <rect x="2360" y="1772" width="380" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-74', event)">
          <title>Plot #74 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="2550" y="1936" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">74</text>
        <!-- Plot #75 (1150 SQFT) -->
        <rect x="2360" y="2072" width="380" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-75', event)">
          <title>Plot #75 - 1,150 Sq.ft (Irregular (1150 sq.ft))</title>
        </rect>
        <text x="2550" y="2236" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">75</text>
        <!-- Plot #76 (1200 SQFT) -->
        <rect x="2360" y="2668" width="380" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-76', event)">
          <title>Plot #76 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="2550" y="2832" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">76</text>
        <!-- Plot #77 (1200 SQFT) -->
        <rect x="2360" y="2968" width="380" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-77', event)">
          <title>Plot #77 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="2550" y="3132" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">77</text>
        <!-- Plot #78 (1200 SQFT) -->
        <rect x="2360" y="3268" width="380" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-78', event)">
          <title>Plot #78 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="2550" y="3432" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">78</text>
        <!-- Plot #79 (1200 SQFT) -->
        <rect x="2360" y="3568" width="380" height="292" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-79', event)">
          <title>Plot #79 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="2550" y="3730" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">79</text>
        <!-- Plot #80 (1200 SQFT) -->
        <rect x="2360" y="3864" width="380" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-80', event)">
          <title>Plot #80 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="2550" y="4028" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">80</text>
        <!-- Plot #81 (1200 SQFT) -->
        <rect x="2360" y="4164" width="380" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-81', event)">
          <title>Plot #81 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="2550" y="4328" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">81</text>
        <!-- Plot #82 (1200 SQFT) -->
        <rect x="2360" y="4464" width="380" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-82', event)">
          <title>Plot #82 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="2550" y="4628" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">82</text>
        <!-- Plot #83 (1265 SQFT) -->
        <rect x="2360" y="4760" width="380" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-83', event)">
          <title>Plot #83 - 1,265 Sq.ft (Irregular (1265 sq.ft))</title>
        </rect>
        <text x="2550" y="4924" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">83</text>
        <!-- Plot #68 (1244 SQFT) -->
        <rect x="2916" y="876" width="392" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-68', event)">
          <title>Plot #68 - 1,244 Sq.ft (Irregular (1244 sq.ft))</title>
        </rect>
        <text x="3112" y="1040" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">68</text>
        <!-- Plot #67 (1200 SQFT) -->
        <rect x="2916" y="1176" width="392" height="292" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-67', event)">
          <title>Plot #67 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="3112" y="1338" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">67</text>
        <!-- Plot #66 (1200 SQFT) -->
        <rect x="2916" y="1472" width="392" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-66', event)">
          <title>Plot #66 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="3112" y="1636" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">66</text>
        <!-- Plot #65 (1200 SQFT) -->
        <rect x="2916" y="1772" width="392" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-65', event)">
          <title>Plot #65 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="3112" y="1936" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">65</text>
        <!-- Plot #64 (1200 SQFT) -->
        <rect x="2916" y="2072" width="392" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-64', event)">
          <title>Plot #64 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="3112" y="2236" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">64</text>
        <!-- Plot #63 (1200 SQFT) -->
        <rect x="2916" y="2668" width="392" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-63', event)">
          <title>Plot #63 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="3112" y="2832" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">63</text>
        <!-- Plot #62 (1200 SQFT) -->
        <rect x="2916" y="2968" width="392" height="296" rx="10" ry="10" 
          class="blueprint-plot sold" 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-62', event)">
          <title>Plot #62 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="3112" y="3132" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">62</text>
        <!-- Plot #61 (1200 SQFT) -->
        <rect x="2916" y="3268" width="392" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-61', event)">
          <title>Plot #61 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="3112" y="3432" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">61</text>
        <!-- Plot #60 (1200 SQFT) -->
        <rect x="2916" y="3568" width="392" height="292" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-60', event)">
          <title>Plot #60 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="3112" y="3730" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">60</text>
        <!-- Plot #59 (1200 SQFT) -->
        <rect x="2916" y="3864" width="392" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-59', event)">
          <title>Plot #59 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="3112" y="4028" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">59</text>
        <!-- Plot #58 (1200 SQFT) -->
        <rect x="2916" y="4164" width="392" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-58', event)">
          <title>Plot #58 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="3112" y="4328" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">58</text>
        <!-- Plot #57 (1200 SQFT) -->
        <rect x="2916" y="4464" width="392" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-57', event)">
          <title>Plot #57 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="3112" y="4628" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">57</text>
        <!-- Plot #45 (1010 SQFT) -->
        <rect x="3312" y="876" width="396" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-45', event)">
          <title>Plot #45 - 1,010 Sq.ft (Irregular (1010 sq.ft))</title>
        </rect>
        <text x="3510" y="1040" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">45</text>
        <!-- Plot #46 (1200 SQFT) -->
        <rect x="3312" y="1176" width="396" height="292" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-46', event)">
          <title>Plot #46 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="3510" y="1338" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">46</text>
        <!-- Plot #47 (1200 SQFT) -->
        <rect x="3312" y="1472" width="396" height="296" rx="10" ry="10" 
          class="blueprint-plot sold" 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-47', event)">
          <title>Plot #47 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="3510" y="1636" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">47</text>
        <!-- Plot #48 (1200 SQFT) -->
        <rect x="3312" y="1772" width="396" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-48', event)">
          <title>Plot #48 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="3510" y="1936" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">48</text>
        <!-- Plot #49 (1200 SQFT) -->
        <rect x="3312" y="2072" width="396" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-49', event)">
          <title>Plot #49 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="3510" y="2236" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">49</text>
        <!-- Plot #50 (1200 SQFT) -->
        <rect x="3312" y="2668" width="396" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-50', event)">
          <title>Plot #50 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="3510" y="2832" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">50</text>
        <!-- Plot #51 (1200 SQFT) -->
        <rect x="3312" y="2968" width="396" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-51', event)">
          <title>Plot #51 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="3510" y="3132" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">51</text>
        <!-- Plot #52 (1200 SQFT) -->
        <rect x="3312" y="3268" width="396" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-52', event)">
          <title>Plot #52 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="3510" y="3432" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">52</text>
        <!-- Plot #53 (1200 SQFT) -->
        <rect x="3312" y="3568" width="396" height="292" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-53', event)">
          <title>Plot #53 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="3510" y="3730" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">53</text>
        <!-- Plot #54 (1200 SQFT) -->
        <rect x="3312" y="3864" width="396" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-54', event)">
          <title>Plot #54 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="3510" y="4028" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">54</text>
        <!-- Plot #55 (1200 SQFT) -->
        <rect x="3312" y="4164" width="396" height="296" rx="10" ry="10" 
          class="blueprint-plot sold" 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-55', event)">
          <title>Plot #55 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="3510" y="4328" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">55</text>
        <!-- Plot #56 (1265 SQFT) -->
        <rect x="3312" y="4464" width="396" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-56', event)">
          <title>Plot #56 - 1,265 Sq.ft (Irregular (1265 sq.ft))</title>
        </rect>
        <text x="3510" y="4628" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">56</text>
        <!-- Plot #42 (1200 SQFT) -->
        <rect x="3960" y="876" width="396" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-42', event)">
          <title>Plot #42 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="4158" y="1040" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">42</text>
        <!-- Plot #41 (1200 SQFT) -->
        <rect x="3960" y="1176" width="396" height="292" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-41', event)">
          <title>Plot #41 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="4158" y="1338" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">41</text>
        <!-- Plot #40 (1200 SQFT) -->
        <rect x="3960" y="1472" width="396" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-40', event)">
          <title>Plot #40 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="4158" y="1636" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">40</text>
        <!-- Plot #39 (1200 SQFT) -->
        <rect x="3960" y="1772" width="396" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-39', event)">
          <title>Plot #39 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="4158" y="1936" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">39</text>
        <!-- Plot #38 (1200 SQFT) -->
        <rect x="3960" y="2072" width="396" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-38', event)">
          <title>Plot #38 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="4158" y="2236" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">38</text>
        <!-- Plot #37 (1200 SQFT) -->
        <rect x="3960" y="2668" width="396" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-37', event)">
          <title>Plot #37 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="4158" y="2832" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">37</text>
        <!-- Plot #36 (1200 SQFT) -->
        <rect x="3960" y="2968" width="396" height="296" rx="10" ry="10" 
          class="blueprint-plot sold" 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-36', event)">
          <title>Plot #36 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="4158" y="3132" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">36</text>
        <!-- Plot #35 (1200 SQFT) -->
        <rect x="3960" y="3268" width="396" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-35', event)">
          <title>Plot #35 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="4158" y="3432" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">35</text>
        <!-- Plot #34 (1200 SQFT) -->
        <rect x="3960" y="3568" width="396" height="292" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-34', event)">
          <title>Plot #34 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="4158" y="3730" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">34</text>
        <!-- Plot #33 (1200 SQFT) -->
        <rect x="3960" y="3864" width="396" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-33', event)">
          <title>Plot #33 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="4158" y="4028" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">33</text>
        <!-- Plot #32 (1200 SQFT) -->
        <rect x="3960" y="4164" width="396" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-32', event)">
          <title>Plot #32 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="4158" y="4328" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">32</text>
        <!-- Plot #31 (1200 SQFT) -->
        <rect x="3960" y="4464" width="396" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-31', event)">
          <title>Plot #31 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="4158" y="4628" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">31</text>
        <!-- Plot #30 (1089 SQFT) -->
        <rect x="3960" y="4760" width="396" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-30', event)">
          <title>Plot #30 - 1,089 Sq.ft (Irregular (1089 sq.ft))</title>
        </rect>
        <text x="4158" y="4924" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">30</text>
        <!-- Plot #29 (1089 SQFT) -->
        <rect x="3960" y="5056" width="396" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-29', event)">
          <title>Plot #29 - 1,089 Sq.ft (Irregular (1089 sq.ft))</title>
        </rect>
        <text x="4158" y="5220" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">29</text>
        <!-- Plot #16 (1200 SQFT) -->
        <rect x="4360" y="876" width="396" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-16', event)">
          <title>Plot #16 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="4558" y="1040" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">16</text>
        <!-- Plot #17 (1200 SQFT) -->
        <rect x="4360" y="1176" width="396" height="292" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-17', event)">
          <title>Plot #17 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="4558" y="1338" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">17</text>
        <!-- Plot #18 (1200 SQFT) -->
        <rect x="4360" y="1472" width="396" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-18', event)">
          <title>Plot #18 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="4558" y="1636" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">18</text>
        <!-- Plot #19 (1200 SQFT) -->
        <rect x="4360" y="1772" width="396" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-19', event)">
          <title>Plot #19 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="4558" y="1936" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">19</text>
        <!-- Plot #20 (1200 SQFT) -->
        <rect x="4360" y="2072" width="396" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-20', event)">
          <title>Plot #20 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="4558" y="2236" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">20</text>
        <!-- Plot #21 (1200 SQFT) -->
        <rect x="4360" y="2668" width="396" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-21', event)">
          <title>Plot #21 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="4558" y="2832" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">21</text>
        <!-- Plot #22 (1200 SQFT) -->
        <rect x="4360" y="2968" width="396" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-22', event)">
          <title>Plot #22 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="4558" y="3132" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">22</text>
        <!-- Plot #23 (1200 SQFT) -->
        <rect x="4360" y="3268" width="396" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-23', event)">
          <title>Plot #23 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="4558" y="3432" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">23</text>
        <!-- Plot #24 (1200 SQFT) -->
        <rect x="4360" y="3568" width="396" height="292" rx="10" ry="10" 
          class="blueprint-plot sold" 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-24', event)">
          <title>Plot #24 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="4558" y="3730" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">24</text>
        <!-- Plot #25 (1200 SQFT) -->
        <rect x="4360" y="3864" width="396" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-25', event)">
          <title>Plot #25 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="4558" y="4028" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">25</text>
        <!-- Plot #26 (1200 SQFT) -->
        <rect x="4360" y="4164" width="396" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-26', event)">
          <title>Plot #26 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="4558" y="4328" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">26</text>
        <!-- Plot #27 (1200 SQFT) -->
        <rect x="4360" y="4464" width="396" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-27', event)">
          <title>Plot #27 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="4558" y="4628" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">27</text>
        <!-- Plot #28 (1200 SQFT) -->
        <rect x="4360" y="4760" width="396" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-28', event)">
          <title>Plot #28 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="4558" y="4924" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">28</text>
        <!-- Plot #14 (1200 SQFT) -->
        <rect x="5000" y="2668" width="380" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-14', event)">
          <title>Plot #14 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="5190" y="2832" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">14</text>
        <!-- Plot #13 (1200 SQFT) -->
        <rect x="5000" y="2968" width="380" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-13', event)">
          <title>Plot #13 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="5190" y="3132" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">13</text>
        <!-- Plot #12 (1200 SQFT) -->
        <rect x="5000" y="3268" width="380" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-12', event)">
          <title>Plot #12 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="5190" y="3432" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">12</text>
        <!-- Plot #11 (1200 SQFT) -->
        <rect x="5000" y="3568" width="380" height="292" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-11', event)">
          <title>Plot #11 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="5190" y="3730" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">11</text>
        <!-- Plot #10 (1200 SQFT) -->
        <rect x="5000" y="3864" width="380" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-10', event)">
          <title>Plot #10 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="5190" y="4028" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">10</text>
        <!-- Plot #9 (1200 SQFT) -->
        <rect x="5000" y="4164" width="380" height="296" rx="10" ry="10" 
          class="blueprint-plot sold" 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-9', event)">
          <title>Plot #9 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="5190" y="4328" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">9</text>
        <!-- Plot #8 (1200 SQFT) -->
        <rect x="5000" y="4464" width="380" height="296" rx="10" ry="10" 
          class="blueprint-plot sold" 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-8', event)">
          <title>Plot #8 - 1,200 Sq.ft (30'0" x 40'0")</title>
        </rect>
        <text x="5190" y="4628" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">8</text>
        <!-- Plot #7 (1380 SQFT) -->
        <rect x="5000" y="4760" width="380" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-7', event)">
          <title>Plot #7 - 1,380 Sq.ft (Irregular (1380 sq.ft))</title>
        </rect>
        <text x="5190" y="4924" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">7</text>
        <!-- Plot #3 (1322 SQFT) -->
        <rect x="5000" y="5056" width="380" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-3', event)">
          <title>Plot #3 - 1,322 Sq.ft (Irregular (1322 sq.ft))</title>
        </rect>
        <text x="5190" y="5220" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">3</text>
        <!-- Plot #2 (1089 SQFT) -->
        <rect x="5000" y="5352" width="380" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-2', event)">
          <title>Plot #2 - 1,089 Sq.ft (Irregular (1089 sq.ft))</title>
        </rect>
        <text x="5190" y="5516" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">2</text>
        <!-- Plot #1 (810 SQFT) -->
        <rect x="5000" y="5648" width="380" height="296" rx="10" ry="10" 
          class="blueprint-plot " 
          data-phase="residential" 
          onclick="publicComponents.showPlotDetails('chittoor-plot-1', event)">
          <title>Plot #1 - 810 Sq.ft (Irregular (810 sq.ft))</title>
        </rect>
        <text x="5190" y="5812" class="blueprint-plot-num" text-anchor="middle" font-size="44" font-weight="800">1</text>
    `;

    const svgContent = isVellore ? velloreSvg : chittoorSvgContent;
    const bgImage = isVellore ? 'assets/blueprint_master plan_vellore.png' : 'assets/blueprint_master plan_chittoor.png';
    const viewBox = isVellore ? '0 0 865 843' : '0 0 8760 6124';
        const optionBadge = isVellore ? 'OPTION-A MASTERPLAN' : 'DTCP APPROVED MASTERPLAN';
    const totalUnitsCount = isVellore ? '6 Signature Units' : '75+ CAD Plotted Units';

    return `
      <div class="interactive-blueprint-page light-theme">
        <!-- Blueprint Header Bar -->
        <div class="blueprint-header light-header">
          <div class="blueprint-header-left">
            <a href="#" class="btn-blueprint-back" onclick="if(window.location.hash) window.location.hash = '#projects';">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              <span>Back to Projects</span>
            </a>
            
            <div class="blueprint-brand-mark">
              <img src="assets/Akshara_logo.png" alt="Akshara Logo" />
            </div>

            <div class="blueprint-title-meta">
              <div class="blueprint-title-row">
                <h2 class="blueprint-project-name">${proj.name}</h2>
                <span class="blueprint-badge-pill">${optionBadge}</span>
                <span class="blueprint-units-pill">${totalUnitsCount}</span>
              </div>
              <div class="blueprint-loc-subtitle">
                <span>📍 ${proj.city}, ${proj.location}</span>
                <span class="desktop-only-inline">• Touch or click any plot to inspect dimensions, SQFT & facing</span>
              </div>
            </div>
          </div>
          
          <div class="blueprint-header-right">
            <a href="${encodeURI(bgImage)}" target="_blank" class="btn-blueprint-action btn-outline" title="Open Full CAD Blueprint">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              <span>HD Layout</span>
            </a>
            <a href="#" class="btn-blueprint-action btn-close" onclick="window.location.hash = '#projects';">
              <span>Close</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </a>
          </div>
        </div>
      
        <div class="blueprint-main-container">
          <!-- Floating Category Filter Tabs -->
          <div class="blueprint-tabs-container">
            <div class="luminexa-tabs-wrapper light-tabs">
              <button class="luminexa-tab-btn active" onclick="publicComponents.filterMapPhase('all', this)">
                <span class="tab-dot dot-all"></span> All Units
              </button>
              <button class="luminexa-tab-btn" onclick="publicComponents.filterMapPhase('residential', this)">
                <span class="tab-dot dot-residential"></span> Residential Plots
              </button>
              <button class="luminexa-tab-btn" onclick="publicComponents.filterMapPhase('commercial', this)">
                <span class="tab-dot dot-commercial"></span> Commercial Space
              </button>
              <button class="luminexa-tab-btn" onclick="publicComponents.filterMapPhase('park', this)">
                <span class="tab-dot dot-park"></span> Park & Greens
              </button>
            </div>
          </div>

          <!-- Touch / Gesture Guide Hint (Mobile & iPad) -->
          <div class="blueprint-mobile-hint">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M2 12h20"/></svg>
            <span>Scroll & drag to explore layout • Tap any plot to view details</span>
          </div>

          <!-- Main Blueprint Canvas Container -->
          <div class="blueprint-canvas-scroll" id="blueprintScrollContainer">
            <div class="blueprint-canvas-wrapper light-wrapper">
              <img src="${encodeURI(bgImage)}" alt="${proj.name} CAD Blueprint" class="blueprint-base-img" />
              <svg viewBox="${viewBox}" class="blueprint-svg-overlay">
                ${svgContent}
              </svg>
            </div>
          </div>
          
          <!-- Floating Live Plot Detail Card (Desktop & Slide-Up Sheet for Mobile/iPad) -->
          <div id="plotDetailPopup" class="plot-detail-popup light-popup">
            <div class="popup-drag-handle mobile-only"></div>
            <button class="popup-close-btn" onclick="document.getElementById('plotDetailPopup').classList.remove('visible')" aria-label="Close">✕</button>
            
            <div class="popup-header">
              <div>
                <span class="popup-badge" id="popupPhaseTag">Residential Plotted Unit</span>
                <h3 id="popupPlotId" class="popup-plot-title">Plot #1</h3>
              </div>
              <span id="popupPlotStatus" class="popup-status status-available">Available</span>
            </div>
            
            <div class="popup-divider"></div>
            
            <div class="popup-specs-grid">
              <div class="popup-stat-box">
                <span class="stat-label">Total Plot Area</span>
                <span class="stat-value highlight-gold" id="popupPlotArea">1,200 sq.ft</span>
              </div>
              <div class="popup-stat-box">
                <span class="stat-label">Facing / Orientation</span>
                <span class="stat-value" id="popupPlotFacing">East Facing</span>
              </div>
              <div class="popup-stat-box full-width">
                <span class="stat-label">Boundary Dimensions</span>
                <span class="stat-value" id="popupPlotDims">30'0" x 40'0"</span>
              </div>
            </div>

            <button class="btn btn-primary btn-full btn-reserve-action" onclick="publicComponents.openDirectPlotEnquiry('${proj.name}')">
              <span>Enquire & Reserve Unit</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        </div>
    `;
  },

  currentSelectedPlot: null,

  showPlotDetails(plotId, event) {
    const data = window.store.getPlotData(plotId);
    if (!data) return;

    this.currentSelectedPlot = data;

    // Highlight polygon
    document.querySelectorAll('.blueprint-plot').forEach(p => p.classList.remove('active'));
    if (event && event.currentTarget) {
      event.currentTarget.classList.add('active');
    } else if (event && event.target) {
      event.target.classList.add('active');
    }

    // Update Popup Content
    const titleEl = document.getElementById('popupPlotId');
    if (titleEl) titleEl.innerText = data.name ? data.name : ('Plot #' + data.id);
    
    const areaEl = document.getElementById('popupPlotArea');
    if (areaEl) areaEl.innerText = data.areaSqFt ? data.areaSqFt.toLocaleString() + ' sq.ft' : '1,200 sq.ft';
    
    const facingEl = document.getElementById('popupPlotFacing');
    if (facingEl) facingEl.innerText = data.facing || 'East Facing';
    
    const dimsEl = document.getElementById('popupPlotDims');
    if (dimsEl) dimsEl.innerText = data.boundaryDims || (data.dimensions || '30\'0" x 40\'0"');
    
    const statusEl = document.getElementById('popupPlotStatus');
    if (statusEl) {
      statusEl.innerText = data.status || 'Available';
      statusEl.className = 'popup-status ' + (data.status === 'Sold' ? 'status-sold' : 'status-available');
    }

    const phaseTag = document.getElementById('popupPhaseTag');
    if (phaseTag) {
      phaseTag.innerText = data.phase === 'commercial' ? 'Commercial Zone' : data.phase === 'park' ? 'Park & Greenery' : data.phase === 'phase2' ? 'Rear Zone Plot' : 'Residential Plotted Unit';
    }

    // Animate Popup
    const popup = document.getElementById('plotDetailPopup');
    if (popup) {
      popup.classList.add('visible');
    }
  },

  filterMapPhase(phase, btnEl) {
    document.querySelectorAll('.luminexa-tab-btn').forEach(btn => btn.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');
    
    document.querySelectorAll('.blueprint-plot').forEach(polygon => {
      polygon.classList.remove('active');
      if (phase === 'all') {
        polygon.classList.remove('hidden-phase');
      } else {
        if (polygon.dataset.phase === phase) {
          polygon.classList.remove('hidden-phase');
        } else {
          polygon.classList.add('hidden-phase');
        }
      }
    });
  },

  openDirectPlotEnquiry(projectName) {
    const plot = this.currentSelectedPlot;
    const plotInfo = plot ? `${plot.name || ('Plot #' + plot.id)} (${plot.areaSqFt} sq.ft, ${plot.facing})` : 'Master Layout Plot';
    
    const modalBody = document.getElementById('globalModalBody');
    if (!modalBody) return;

    modalBody.innerHTML = `
      <div style="padding: 10px;">
        <h2 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 8px;">Direct Plot Reservation Enquiry</h2>
        <div style="background: var(--bg-secondary); padding: 12px 16px; border-radius: var(--radius-sm); margin-bottom: 24px; border: 1px solid var(--border-light);">
          <div style="font-size: 0.8rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase;">Selected Layout Unit</div>
          <div style="font-size: 1.1rem; font-weight: 800; color: #f59e0b;">${projectName || 'Akshara Layout'} • ${plotInfo}</div>
        </div>

        <form onsubmit="publicComponents.handlePlotLeadSubmit(event, '${projectName}', '${plotInfo}')">
          <div class="form-group">
            <label class="form-label">Full Name *</label>
            <input type="text" id="plotLeadName" class="form-control" placeholder="Your Name" required />
          </div>
          <div class="form-group">
            <label class="form-label">Phone Number (WhatsApp) *</label>
            <input type="tel" id="plotLeadPhone" class="form-control" placeholder="+91 98765 43210" required />
          </div>
          <div class="form-group">
            <label class="form-label">Email Address</label>
            <input type="email" id="plotLeadEmail" class="form-control" placeholder="yourname@gmail.com" />
          </div>
          <div class="form-group">
            <label class="form-label">Additional Message / Visit Date</label>
            <textarea id="plotLeadMessage" class="form-control" placeholder="Interested in reserving this specific plot. Please share CAD coordinates." rows="2"></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-full btn-lg" style="margin-top: 16px;">
            Submit Reservation Request
          </button>
        </form>
      </div>
    `;

    document.getElementById('globalModalOverlay').classList.add('active');
  },

  handlePlotLeadSubmit(e, projectName, plotInfo) {
    e.preventDefault();
    const name = document.getElementById('plotLeadName')?.value || '';
    const phone = document.getElementById('plotLeadPhone')?.value || '';
    const email = document.getElementById('plotLeadEmail')?.value || '';
    const message = document.getElementById('plotLeadMessage')?.value || '';

    window.store.addLead({
      name,
      phone,
      email,
      projectPref: projectName,
      plotSizePref: plotInfo,
      message: `Enquired for ${plotInfo}. Note: ${message}`
    });

    app.closeGlobalModal();
    app.showToast(`✓ Request received for ${plotInfo}! Layout officer will call you.`);

    const waText = `Hi Akshara Team, I am interested in reserving:\nProject: ${projectName}\nUnit: ${plotInfo}\nName: ${name}\nPhone: ${phone}`;
    const waUrl = `https://wa.me/917013485016?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, '_blank');
  },

  // Animated Enquiry Flow
  openAnimatedEnquiry() {
    const wrapper = document.createElement('div');
    wrapper.className = 'animated-enquiry-wrapper';
    wrapper.innerHTML = `
      <div class="animated-enquiry-header">
        <div class="brand-logo-mark" style="background:#fff; color:#000;">A</div>
        <button class="animated-enquiry-close" onclick="publicComponents.closeAnimatedEnquiry()">✕</button>
      </div>
      <div class="animated-enquiry-content">
        <div class="enquiry-step active" id="eqStep1">
          <div class="enquiry-step-title">What's your name?</div>
          <input type="text" id="eqName" class="enquiry-input-large" placeholder="Type here..." autofocus />
          <button class="enquiry-next-btn" onclick="publicComponents.nextEnquiryStep(1)">Continue</button>
        </div>
        
        <div class="enquiry-step" id="eqStep2">
          <div class="enquiry-step-title">Nice to meet you, <span id="eqNameDisplay"></span>. What's your phone number?</div>
          <input type="tel" id="eqPhone" class="enquiry-input-large" placeholder="+91..." />
          <button class="enquiry-next-btn" onclick="publicComponents.nextEnquiryStep(2)">Continue</button>
        </div>
        
        <div class="enquiry-step" id="eqStep3">
          <div class="enquiry-step-title">Which location are you interested in?</div>
          <select id="eqLocation" class="enquiry-input-large" style="appearance: none; -webkit-appearance: none; cursor: pointer;">
             <option value="" disabled selected>Select...</option>
             <option value="Vellore">Vellore</option>
             <option value="Chittoor">Chittoor</option>
             <option value="Tirupati">Tirupati</option>
             <option value="Chennai">Chennai</option>
          </select>
          <button class="enquiry-next-btn" onclick="publicComponents.submitAnimatedEnquiry()">Submit</button>
        </div>
        
        <div class="enquiry-step" id="eqStep4">
          <div class="enquiry-step-title" style="color: #ff9800;">Thank You!</div>
          <p style="font-size: 1.5rem; color: #ccc;">We will get back to you shortly.</p>
          <button class="enquiry-next-btn" onclick="publicComponents.closeAnimatedEnquiry()">Close</button>
        </div>
      </div>
    `;
    
    document.body.appendChild(wrapper);
    if (typeof gsap !== 'undefined') {
      gsap.to(wrapper, { opacity: 1, duration: 0.4 });
      gsap.from('#eqStep1', { y: 30, opacity: 0, duration: 0.5, delay: 0.2 });
    } else {
      wrapper.style.opacity = 1;
    }
  },

  nextEnquiryStep(currentStep) {
    if (currentStep === 1) {
      const name = document.getElementById('eqName').value;
      if (!name) return;
      document.getElementById('eqNameDisplay').innerText = name;
    }
    if (currentStep === 2) {
      if (!document.getElementById('eqPhone').value) return;
    }

    const currentEl = document.getElementById('eqStep' + currentStep);
    const nextEl = document.getElementById('eqStep' + (currentStep + 1));
    
    if (typeof gsap !== 'undefined') {
      gsap.to(currentEl, { y: -30, opacity: 0, duration: 0.3, onComplete: () => {
        currentEl.classList.remove('active');
        nextEl.classList.add('active');
        gsap.fromTo(nextEl, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 });
      }});
    } else {
      currentEl.classList.remove('active');
      nextEl.classList.add('active');
    }
  },

  submitAnimatedEnquiry() {
    const name = document.getElementById('eqName').value;
    const phone = document.getElementById('eqPhone').value;
    const loc = document.getElementById('eqLocation').value;
    
    window.store.addLead({ name, phone, email: '', cityPref: loc, projectPref: 'Interactive Map Enquiry', message: '' });
    
    this.nextEnquiryStep(3);
  },

  closeAnimatedEnquiry() {
    const wrapper = document.getElementById('animatedEnquiry');
    if (wrapper) {
      if (typeof gsap !== 'undefined') {
        gsap.to(wrapper, { opacity: 0, duration: 0.3, onComplete: () => wrapper.remove() });
      } else {
        wrapper.remove();
      }
    }
  }
};
