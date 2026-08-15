/**
 * Akshara Plotted Developments - Public View Components (Showcase Mode)
 */

window.publicComponents = {
  currentCityFilter: 'All',

  renderHeader() {
    return `
      <header class="header" id="header">
        <div class="container header-inner">
          <a href="#" class="brand-logo" onclick="publicComponents.scrollToTop(event)">
            <div class="brand-logo-mark">A</div>
            <div>
              <div>AKSHARA</div>
              <div class="brand-tagline">Plotted Developments</div>
            </div>
          </a>

          <nav>
            <ul class="nav-links">
              <li><a href="#about" class="nav-link">About Us</a></li>
              <li><a href="#projects" class="nav-link" onclick="publicComponents.setFilter('All')">Our Projects</a></li>
              <li><a href="#why-us" class="nav-link">Why Akshara</a></li>
              <li><a href="#process" class="nav-link">Process</a></li>
              <li><a href="#leadership" class="nav-link">Leadership</a></li>
              <li><a href="#contact" class="nav-link">Contact</a></li>
            </ul>
          </nav>

          <div class="header-actions">
            <button class="admin-trigger-btn" onclick="app.openAdminModal()">
              🔒 Admin Panel
            </button>
            <a href="#projects" class="btn btn-primary btn-sm">Explore Projects</a>
            <button class="mobile-menu-toggle" id="mobileNavToggle" onclick="publicComponents.toggleMobileNav()">
              ☰
            </button>
          </div>
        </div>
      </header>

      <div class="mobile-nav" id="mobileNav">
        <ul class="mobile-nav-links">
          <li><a href="#about" class="mobile-nav-link" onclick="publicComponents.toggleMobileNav()">About Us</a></li>
          <li><a href="#projects" class="mobile-nav-link" onclick="publicComponents.toggleMobileNav()">Our Projects</a></li>
          <li><a href="#why-us" class="mobile-nav-link" onclick="publicComponents.toggleMobileNav()">Why Akshara</a></li>
          <li><a href="#process" class="mobile-nav-link" onclick="publicComponents.toggleMobileNav()">Our Process</a></li>
          <li><a href="#leadership" class="mobile-nav-link" onclick="publicComponents.toggleMobileNav()">Leadership</a></li>
          <li><a href="#contact" class="mobile-nav-link" onclick="publicComponents.toggleMobileNav()">Contact Us</a></li>
          <li>
            <button class="btn btn-secondary btn-full" onclick="publicComponents.toggleMobileNav(); app.openAdminModal();">
              🔒 Admin Login
            </button>
          </li>
        </ul>
      </div>
    `;
  },

  renderHero() {
    return `
      <section class="hero" id="hero">
        <div class="container hero-grid">
          <div class="hero-content">
            <div class="hero-badge">
              <span>●</span> Ready-to-Build Approved Residential Layouts
            </div>
            <h1 class="hero-title">
              Showcasing Benchmark Residential Layouts <span>in Prime Growth Corridors</span>
            </h1>
            <p class="hero-text">
              Akshara develops fully approved, high-yield plotted communities across <strong>Vellore, Chittoor, Tirupati, and Chennai</strong>. Complete with 40ft asphalt roads, subterranean utilities, 100% clear titles, and immediate registration.
            </p>
            <div class="hero-ctas">
              <a href="#projects" class="btn btn-primary btn-lg">
                View Project Showcase
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="#contact" class="btn btn-secondary btn-lg">Schedule Site Visit</a>
            </div>
            <div class="hero-stats">
              <div>
                <div class="hero-stat-number">45+</div>
                <div class="hero-stat-label">Layout Projects Completed</div>
              </div>
              <div>
                <div class="hero-stat-number">3,500+</div>
                <div class="hero-stat-label">Satisfied Plot Owners</div>
              </div>
              <div>
                <div class="hero-stat-number">100%</div>
                <div class="hero-stat-label">DTCP & CMDA Approved</div>
              </div>
            </div>
          </div>
          <div class="hero-visual-container">
            <div class="hero-visual-card">
              <img src="assets/hero_visual.png" alt="Akshara Plotted Development Render" class="hero-image" />
              <div class="hero-floating-tag">
                <div>
                  <div class="hero-tag-text">Katpadi & Sriperumbudur Layouts</div>
                  <div class="hero-tag-sub">Wide 40ft Asphalt Roads • Underground Cabling</div>
                </div>
                <span class="btn btn-primary btn-sm" onclick="publicComponents.openProjectDetail('proj-1')">View Layout Map</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
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
                    <button class="btn btn-primary btn-full" onclick="publicComponents.openProjectDetail('${proj.id}')">
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

          <div class="testimonials-grid">
            ${testimonials.map(t => `
              <div class="testimonial-card">
                <p class="testimonial-quote">“${t.quote}”</p>
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
      <footer class="footer">
        <div class="container">
          <div class="footer-grid">
            <div>
              <div class="footer-brand-title">AKSHARA</div>
              <p class="footer-brand-desc">
                Developing DTCP, CMDA & RERA approved plotted layouts with benchmark infrastructure across Vellore, Chittoor, Tirupati, and Chennai.
              </p>
              <div style="font-weight: 700; font-size: 0.84rem; color: var(--text-primary);">
                Headquarters: Katpadi Main Road, Vellore
              </div>
            </div>

            <div>
              <h4 class="footer-heading">Quick Links</h4>
              <ul class="footer-links">
                <li><a href="#about" class="footer-link">About Company</a></li>
                <li><a href="#projects" class="footer-link">Project Portfolio</a></li>
                <li><a href="#why-us" class="footer-link">Why Choose Us</a></li>
                <li><a href="#leadership" class="footer-link">Board of Directors</a></li>
                <li><a href="#contact" class="footer-link">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 class="footer-heading">Key Markets</h4>
              <ul class="footer-links">
                <li><a href="#projects" class="footer-link" onclick="publicComponents.setFilter('Vellore')">Vellore Layouts</a></li>
                <li><a href="#projects" class="footer-link" onclick="publicComponents.setFilter('Tirupati')">Tirupati Layouts</a></li>
                <li><a href="#projects" class="footer-link" onclick="publicComponents.setFilter('Chittoor')">Chittoor Layouts</a></li>
                <li><a href="#projects" class="footer-link" onclick="publicComponents.setFilter('Chennai')">Chennai Villa Plots</a></li>
              </ul>
            </div>

            <div>
              <h4 class="footer-heading">Statutory Approvals</h4>
              <ul class="footer-links">
                <li class="footer-link">DTCP Certified Layouts</li>
                <li class="footer-link">CMDA & TUDA Clearances</li>
                <li class="footer-link">RERA Registered Layouts</li>
                <li class="footer-link">Clear Parent Title Deeds</li>
                <li style="margin-top: 12px;">
                  <button class="admin-trigger-btn" onclick="app.openAdminModal()">
                    🔒 Admin Portal Access
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div class="footer-bottom">
            <div>© ${new Date().getFullYear()} Akshara Plotted Developments. All Rights Reserved.</div>
            <div>Pure White Minimalist Architectural Design System</div>
          </div>
        </div>
      </footer>

      <!-- Floating WhatsApp Action -->
      <a href="https://wa.me/${settings.whatsappNumber}?text=Hi%20Akshara%20Team,%20I%20am%20interested%20in%20viewing%20your%20plotted%20layouts." target="_blank" class="whatsapp-float" title="Chat on WhatsApp">
        💬
      </a>
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
              <button type="submit" class="btn btn-primary btn-full">Request Site Visit & Layout Plan</button>
            </form>
          </div>
        </div>
      </div>
    `;

    document.getElementById('globalModalOverlay').classList.add('active');
  },

  handleFormSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('leadName').value;
    const phone = document.getElementById('leadPhone').value;
    const email = document.getElementById('leadEmail').value;
    const cityPref = document.getElementById('leadCityPref').value;
    const projectPref = document.getElementById('leadProjectPref').value;
    const message = document.getElementById('leadMessage').value;

    window.store.addLead({ name, phone, email, cityPref, projectPref, message });
    app.showToast('✓ Thank you! Your enquiry has been received. Our team will contact you shortly.');
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

  toggleMobileNav() {
    const nav = document.getElementById('mobileNav');
    nav.classList.toggle('open');
  },

  scrollToTop(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};
