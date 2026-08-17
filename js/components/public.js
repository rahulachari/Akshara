/**
 * Akshara Plotted Developments - Public View Components (Showcase Mode)
 */

window.publicComponents = {
  currentCityFilter: 'All',

  renderHeader() {
    return `
      <header class="header header-pill-style card-nav-container" id="mobileCardNav">
        <div class="container header-inner card-nav-top">
          
          <a href="#" class="brand-logo logo-container" onclick="publicComponents.scrollToTop(event)">
            <div class="brand-logo-mark">A</div>
            <div>
              <div style="line-height: 1;">AKSHARA</div>
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

          <div class="header-actions">
            <button class="hamburger-menu mobile-menu-toggle" id="mobileNavToggle" aria-label="Menu" onclick="publicComponents.toggleMobileNav()">
              <div class="hamburger-line"></div>
              <div class="hamburger-line"></div>
            </button>
          </div>

        </div>

        <!-- Card Nav Content (Mobile Only) -->
        <div class="card-nav-content" id="cardNavContent">
          <div class="nav-card">
            <div class="nav-card-label">About</div>
            <div class="nav-card-links">
              <a class="nav-card-link" href="#about" onclick="publicComponents.toggleMobileNav()">↗ About Us</a>
              <a class="nav-card-link" href="#why-us" onclick="publicComponents.toggleMobileNav()">↗ Why Akshara</a>
              <a class="nav-card-link" href="#process" onclick="publicComponents.toggleMobileNav()">↗ Our Process</a>
            </div>
          </div>
          <div class="nav-card">
            <div class="nav-card-label">Projects</div>
            <div class="nav-card-links">
              <a class="nav-card-link" href="#projects" onclick="publicComponents.toggleMobileNav()">↗ Our Projects</a>
            </div>
          </div>
          <div class="nav-card">
            <div class="nav-card-label">Contact</div>
            <div class="nav-card-links">
              <a class="nav-card-link" href="#contact" onclick="publicComponents.toggleMobileNav()">↗ Contact Us</a>
              <a class="nav-card-link" href="#" onclick="publicComponents.toggleMobileNav(); app.openAdminModal();">↗ Admin Login</a>
            </div>
          </div>
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
              
              <!-- Smooth Swipe Button -->
              <div class="swipe-button-container" id="swipeBtnContainer">
                <div class="swipe-button-track">
                  <div class="swipe-button-thumb" id="swipeBtnThumb">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </div>
                  <span class="swipe-button-text">Swipe to submit</span>
                </div>
              </div>
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
            <img src="assets/project_vellore.png" alt="Akshara Infrastructure Showcase" style="border-radius: var(--radius-md); box-shadow: var(--shadow-pop); border: 1px solid var(--border-light);" />
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
                    <button class="btn btn-secondary btn-full" onclick="publicComponents.openProjectDetail('${proj.id}')">
                      View Details & Masterplan
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
      <section class="section" id="process">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">Our Process</span>
            <h2 class="section-title">Transparent 4-Step Layout Journey</h2>
            <p class="section-subtitle">From initial site visit to receiving your registered plot title deed.</p>
          </div>

          <div class="process-grid">
            ${steps.map(s => `
              <div class="process-card">
                <div class="process-step-number">${s.step}</div>
                <h3 class="process-title">${s.title}</h3>
                <p class="process-desc">${s.desc}</p>
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

    return `
      <section class="section" id="testimonials">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">Client Feedback</span>
            <h2 class="section-title">What Plot Owners Say</h2>
            <p class="section-subtitle">Real experiences from clients who bought plots in Akshara developments.</p>
          </div>

          <div class="testimonials-marquee-container">
            <div class="testimonials-track">
              ${[...testimonials, ...testimonials].map(t => `
                <div class="testimonial-card">
                  <p class="testimonial-quote">"${t.quote}"</p>
                  <div class="testimonial-author">
                    <div class="author-avatar">${t.name[0]}</div>
                    <div>
                      <div class="author-name">${t.name}</div>
                      <div class="author-meta">${t.location}</div>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
            <div class="testimonials-track" aria-hidden="true">
              ${[...testimonials, ...testimonials].map(t => `
                <div class="testimonial-card">
                  <p class="testimonial-quote">"${t.quote}"</p>
                  <div class="testimonial-author">
                    <div class="author-avatar">${t.name[0]}</div>
                    <div>
                      <div class="author-name">${t.name}</div>
                      <div class="author-meta">${t.location}</div>
                    </div>
                  </div>
                </div>
              `).join('')}
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

                <div class="form-group" style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                  <div>
                    <label class="form-label">Phone Number *</label>
                    <input type="tel" id="leadPhone" class="form-control" placeholder="+91 98765 43210" required />
                  </div>
                  <div>
                    <label class="form-label">Email Address</label>
                    <input type="email" id="leadEmail" class="form-control" placeholder="anand@example.com" />
                  </div>
                </div>

                <div class="form-group" style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
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

  renderFooter() {
    const settings = window.store.getSettings();
    return `
      <footer class="footer-redesigned">
        <div class="container">
          <div class="footer-dark-box">
            <div class="footer-left-col">
              <div class="footer-logo">
                <div class="brand-logo-mark" style="background:#fff; color:#000;">A</div>
                <div style="font-size: 1.5rem; font-weight: 800; letter-spacing: -0.04em;">AKSHARA</div>
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
      </footer>
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
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; padding: 20px; background: var(--bg-secondary); border-radius: var(--radius-sm); margin-bottom: 32px;">
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
            <h3 style="font-size: 1.3rem; font-weight: 800; margin-bottom: 12px;">Master Layout Blueprint</h3>
            <img src="${proj.layoutPlan}" alt="Masterplan layout blueprint" style="width:100%; border-radius:var(--radius-sm); border:1px solid var(--border-light);" />
          </div>

          <!-- Amenities -->
          <div style="margin-bottom: 32px;">
            <h3 style="font-size: 1.3rem; font-weight: 800; margin-bottom: 16px;">Layout Amenities & Infrastructure</h3>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
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
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
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
    const cards = document.querySelectorAll('.nav-card');
    
    if (!this.isCardNavOpen) {
      this.isCardNavOpen = true;
      hamburger.classList.add('open');
      nav.classList.add('open');
      
      content.style.visibility = 'visible';
      content.style.position = 'static';
      content.style.pointerEvents = 'auto';
      const contentHeight = content.scrollHeight;
      content.style.position = 'absolute';
      
      const targetHeight = 60 + contentHeight + 16;
      
      if (typeof gsap !== 'undefined') {
        gsap.set(cards, { y: 50, opacity: 0 });
        
        this.cardNavTl = gsap.timeline();
        this.cardNavTl.to(nav, {
          height: targetHeight,
          duration: 0.2,
          ease: "power2.out"
        });
        
        this.cardNavTl.to(cards, {
          y: 0,
          opacity: 1,
          duration: 0.2,
          ease: "power2.out",
          stagger: 0.04
        }, "-=0.1");
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
  }
};
