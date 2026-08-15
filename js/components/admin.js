/**
 * Akshara Plotted Developments - Admin Dashboard & CMS Components (Showcase Mode)
 */

window.adminComponents = {
  currentTab: 'overview', // 'overview', 'projects', 'cms', 'leads', 'settings'
  leadFilterStatus: 'All',

  renderAdminWrapper() {
    const isLogged = sessionStorage.getItem('akshara_admin_logged') === 'true';

    if (!isLogged) {
      return this.renderLoginView();
    }

    return `
      <div class="admin-wrapper" id="adminWrapper">
        <!-- Sidebar Navigation -->
        <aside class="admin-sidebar">
          <div>
            <div style="font-size: 1.25rem; font-weight: 800; letter-spacing: -0.03em; margin-bottom: 4px;">AKSHARA CMS</div>
            <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase;">Admin Dashboard v2.4</div>

            <ul class="admin-nav">
              <li class="admin-nav-item">
                <button class="${this.currentTab === 'overview' ? 'active' : ''}" onclick="adminComponents.switchTab('overview')">
                  📊 Analytics & Overview
                </button>
              </li>
              <li class="admin-nav-item">
                <button class="${this.currentTab === 'projects' ? 'active' : ''}" onclick="adminComponents.switchTab('projects')">
                  🏡 Projects & Layouts (${window.store.getProjects('All').length})
                </button>
              </li>
              <li class="admin-nav-item">
                <button class="${this.currentTab === 'leads' ? 'active' : ''}" onclick="adminComponents.switchTab('leads')">
                  📬 Enquiries / Leads (${window.store.getLeads().length})
                </button>
              </li>
              <li class="admin-nav-item">
                <button class="${this.currentTab === 'cms' ? 'active' : ''}" onclick="adminComponents.switchTab('cms')">
                  ✍️ Content & Board CMS
                </button>
              </li>
              <li class="admin-nav-item">
                <button class="${this.currentTab === 'settings' ? 'active' : ''}" onclick="adminComponents.switchTab('settings')">
                  ⚙️ Site Settings & SEO
                </button>
              </li>
            </ul>
          </div>

          <div style="display: flex; flex-direction: column; gap: 12px;">
            <button class="btn btn-secondary btn-full btn-sm" onclick="app.closeAdminModal()">
              👁️ View Public Website
            </button>
            <button class="btn btn-primary btn-full btn-sm" onclick="adminComponents.logout()">
              🚪 Logout Admin
            </button>
          </div>
        </aside>

        <!-- Main Workspace -->
        <main class="admin-main">
          ${this.renderActiveTabContent()}
        </main>
      </div>
    `;
  },

  renderLoginView() {
    return `
      <div style="position: fixed; top:0; left:0; width:100vw; height:100vh; background: var(--bg-primary); z-index:2500; display:flex; align-items:center; justify-content:center; padding:24px;">
        <div style="width:100%; max-width:420px; background:var(--bg-primary); border:1px solid var(--border-light); border-radius:var(--radius-md); padding:40px; box-shadow:var(--shadow-pop);">
          <div style="text-align:center; margin-bottom:32px;">
            <div style="width:48px; height:48px; background:var(--text-primary); color:var(--bg-primary); font-weight:800; font-size:1.5rem; display:inline-flex; align-items:center; justify-content:center; border-radius:var(--radius-sm); margin-bottom:12px;">A</div>
            <h2 style="font-size: 1.6rem; font-weight: 800;">Akshara Admin CMS</h2>
            <p style="font-size: 0.875rem; color: var(--text-muted);">Enter password to access admin panel dashboard</p>
          </div>

          <form onsubmit="adminComponents.handleLogin(event)">
            <div class="form-group">
              <label class="form-label">Admin Email</label>
              <input type="email" id="adminEmail" class="form-control" value="admin@aksharalayouts.com" required />
            </div>

            <div class="form-group">
              <label class="form-label">Security Password</label>
              <input type="password" id="adminPassword" class="form-control" placeholder="Default: admin123" required autofocus />
            </div>

            <div style="margin-bottom: 24px; font-size: 0.8rem; color: var(--text-muted);">
              💡 <em>Demo Password: <strong>admin123</strong></em>
            </div>

            <button type="submit" class="btn btn-primary btn-full btn-lg">
              Sign In to Admin Portal
            </button>
          </form>

          <div style="margin-top: 24px; text-align: center;">
            <button class="btn btn-secondary btn-sm" onclick="app.closeAdminModal()">
              ← Return to Website
            </button>
          </div>
        </div>
      </div>
    `;
  },

  handleLogin(e) {
    e.preventDefault();
    const pass = document.getElementById('adminPassword').value;
    if (pass === 'admin123' || pass === 'admin') {
      sessionStorage.setItem('akshara_admin_logged', 'true');
      app.showToast('✓ Welcome back, Admin!');
      app.renderApp();
    } else {
      app.showToast('❌ Invalid password. Use: admin123');
    }
  },

  logout() {
    sessionStorage.removeItem('akshara_admin_logged');
    app.showToast('Logged out of Admin CMS.');
    app.closeAdminModal();
  },

  switchTab(tab) {
    this.currentTab = tab;
    app.renderApp();
  },

  renderActiveTabContent() {
    switch (this.currentTab) {
      case 'overview': return this.renderOverviewTab();
      case 'projects': return this.renderProjectsTab();
      case 'leads': return this.renderLeadsTab();
      case 'cms': return this.renderCmsTab();
      case 'settings': return this.renderSettingsTab();
      default: return this.renderOverviewTab();
    }
  },

  // OVERVIEW & ANALYTICS TAB
  renderOverviewTab() {
    const analytics = window.store.getAnalytics();
    const leads = window.store.getLeads();

    const conversionRate = ((leads.length / (analytics.uniqueVisitors || 1)) * 100).toFixed(1);

    return `
      <div>
        <div class="admin-header-bar">
          <div>
            <h1 class="admin-title">Analytics & Visitor Performance</h1>
            <p style="color: var(--text-muted); font-size: 0.9rem;">Real-time visitor counts, traffic device breakdown, and lead conversions.</p>
          </div>
          <button class="btn btn-secondary btn-sm" onclick="app.renderApp()">
            🔄 Refresh Metrics
          </button>
        </div>

        <!-- Metrics Cards -->
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-card-label">Total Visitors (All-Time)</div>
            <div class="stat-card-value">${analytics.totalVisitors.toLocaleString()}</div>
            <div class="stat-card-change">↑ 14% this month</div>
          </div>
          <div class="stat-card">
            <div class="stat-card-label">Unique Visitors</div>
            <div class="stat-card-value">${analytics.uniqueVisitors.toLocaleString()}</div>
            <div class="stat-card-change">Individual IPs & Sessions</div>
          </div>
          <div class="stat-card">
            <div class="stat-card-label">Visitors Today</div>
            <div class="stat-card-value">${analytics.todayVisitors}</div>
            <div class="stat-card-change">Live session tracker</div>
          </div>
          <div class="stat-card">
            <div class="stat-card-label">Enquiry Conversion Rate</div>
            <div class="stat-card-value">${conversionRate}%</div>
            <div class="stat-card-change">${leads.length} total enquiries captured</div>
          </div>
        </div>

        <!-- SVG Visual Charts Grid -->
        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 24px; margin-bottom: 40px;">
          <!-- Daily Visitors Line Chart -->
          <div class="chart-box">
            <div class="chart-header">
              <h3 class="chart-title">Daily Visitor Traffic (7 Days)</h3>
              <span style="font-size: 0.8rem; font-weight:700; color: var(--text-muted);">Weekly Trend</span>
            </div>
            ${this.renderVisitorLineChart(analytics.dailyVisitsHistory)}
          </div>

          <!-- Device Distribution Chart -->
          <div class="chart-box">
            <div class="chart-header">
              <h3 class="chart-title">Device Breakdown</h3>
            </div>
            <div style="text-align: center; padding: 20px 0;">
              <div style="font-size: 2.5rem; font-weight: 800; margin-bottom: 4px;">${analytics.deviceBreakdown.mobile}%</div>
              <div style="font-size: 0.85rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">Mobile Visitors</div>
              <div style="margin-top: 16px; display: flex; justify-content: space-between; font-size: 0.85rem; padding: 12px; background: var(--bg-secondary); border-radius: var(--radius-sm);">
                <span>📱 Mobile: <strong>${analytics.deviceBreakdown.mobile}%</strong></span>
                <span>💻 Desktop: <strong>${analytics.deviceBreakdown.desktop}%</strong></span>
              </div>
            </div>
          </div>
        </div>

        <!-- Recent Leads Table -->
        <div class="chart-box">
          <div class="chart-header">
            <h3 class="chart-title">Recent Enquiries & Site Visitors</h3>
            <button class="btn btn-secondary btn-sm" onclick="adminComponents.switchTab('leads')">View All Enquiries →</button>
          </div>
          <div class="admin-table-container">
            <table class="admin-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Visitor Name</th>
                  <th>Phone</th>
                  <th>City Pref</th>
                  <th>Project Interest</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                ${leads.slice(0, 5).map(l => `
                  <tr>
                    <td style="font-size:0.8rem; color:var(--text-muted);">${l.date}</td>
                    <td style="font-weight:700;">${l.name}</td>
                    <td>${l.phone}</td>
                    <td>${l.cityPref}</td>
                    <td>${l.projectPref}</td>
                    <td><span class="lead-status status-${l.status.toLowerCase()}">${l.status}</span></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  },

  renderVisitorLineChart(history) {
    const max = Math.max(...history.map(h => h.visits)) + 20;
    const width = 500;
    const height = 160;

    const points = history.map((item, index) => {
      const x = (index / (history.length - 1)) * (width - 40) + 20;
      const y = height - (item.visits / max) * (height - 40) - 20;
      return `${x},${y}`;
    }).join(' ');

    return `
      <div style="width: 100%; overflow-x: auto;">
        <svg width="100%" height="180" viewBox="0 0 500 180" preserveAspectRatio="none">
          <line x1="20" y1="160" x2="480" y2="160" stroke="#E4E4E7" stroke-width="1" />
          <line x1="20" y1="20" x2="480" y2="20" stroke="#E4E4E7" stroke-width="1" stroke-dasharray="4" />
          <polyline fill="none" stroke="#000000" stroke-width="3" points="${points}" />
          ${history.map((item, index) => {
            const x = (index / (history.length - 1)) * (width - 40) + 20;
            const y = height - (item.visits / max) * (height - 40) - 20;
            return `
              <circle cx="${x}" cy="${y}" r="5" fill="#000000" />
              <text x="${x}" y="175" font-size="11" font-weight="700" fill="#71717A" text-anchor="middle">${item.day}</text>
              <text x="${x}" y="${y - 10}" font-size="10" font-weight="800" fill="#0A0A0A" text-anchor="middle">${item.visits}</text>
            `;
          }).join('')}
        </svg>
      </div>
    `;
  },

  // PROJECTS MANAGEMENT TAB
  renderProjectsTab() {
    const projects = window.store.getProjects('All');
    return `
      <div>
        <div class="admin-header-bar">
          <div>
            <h1 class="admin-title">Projects & Layout Management</h1>
            <p style="color: var(--text-muted); font-size: 0.9rem;">Add, edit, toggle status or delete plotted developments across all cities.</p>
          </div>
          <button class="btn btn-primary" onclick="adminComponents.openAddProjectModal()">
            + Add New Layout Project
          </button>
        </div>

        <div class="admin-table-container">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Project Name</th>
                <th>City</th>
                <th>Status</th>
                <th>Plot Sizes</th>
                <th>Approval</th>
                <th>Featured</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${projects.map(p => `
                <tr>
                  <td>
                    <img src="${p.image}" alt="${p.name}" style="width: 50px; height: 38px; object-fit: cover; border-radius: var(--radius-sm);" />
                  </td>
                  <td style="font-weight: 800;">${p.name}</td>
                  <td>${p.city}</td>
                  <td><span class="project-status-badge ${p.status === 'Ready' ? 'status-ready' : p.status === 'Upcoming' ? 'status-upcoming' : 'status-sold'}">${p.status}</span></td>
                  <td>${p.plotSizes}</td>
                  <td style="font-size:0.8rem; font-weight:700;">${p.dtcpApproval}</td>
                  <td>
                    <button class="btn btn-secondary btn-sm" onclick="adminComponents.toggleFeatured('${p.id}')">
                      ${p.featured ? '⭐ Featured' : '☆ Normal'}
                    </button>
                  </td>
                  <td>
                    <div style="display: flex; gap: 8px;">
                      <button class="btn btn-secondary btn-sm" onclick="adminComponents.openEditProjectModal('${p.id}')">Edit</button>
                      <button class="btn btn-secondary btn-sm" style="color: #E11D48;" onclick="adminComponents.deleteProject('${p.id}')">Delete</button>
                    </div>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  openAddProjectModal() {
    const modalBody = document.getElementById('globalModalBody');
    modalBody.innerHTML = `
      <div>
        <h2 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 20px;">Add New Layout Project</h2>
        <form onsubmit="adminComponents.saveNewProject(event)">
          <div class="form-group">
            <label class="form-label">Project Name *</label>
            <input type="text" id="newProjName" class="form-control" placeholder="e.g. Akshara Palm Meadows" required />
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;" class="form-group">
            <div>
              <label class="form-label">City *</label>
              <select id="newProjCity" class="form-control">
                <option value="Vellore">Vellore</option>
                <option value="Tirupati">Tirupati</option>
                <option value="Chittoor">Chittoor</option>
                <option value="Chennai">Chennai</option>
              </select>
            </div>
            <div>
              <label class="form-label">Status</label>
              <select id="newProjStatus" class="form-control">
                <option value="Ready">Ready / Completed</option>
                <option value="Upcoming">Upcoming</option>
                <option value="Sold Out">Sold Out</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Location Address</label>
            <input type="text" id="newProjLocation" class="form-control" placeholder="e.g. Near Collectorate, Katpadi" required />
          </div>

          <div class="form-group">
            <label class="form-label">Plot Dimensions Range</label>
            <input type="text" id="newProjSizes" class="form-control" placeholder="e.g. 1,200 - 3,000 sq.ft." required />
          </div>

          <div class="form-group">
            <label class="form-label">Image Asset URL</label>
            <select id="newProjImage" class="form-control">
              <option value="assets/project_vellore.png">Vellore Layout View</option>
              <option value="assets/project_tirupati.png">Tirupati Layout View</option>
              <option value="assets/project_chittoor.png">Chittoor Layout View</option>
              <option value="assets/project_chennai.png">Chennai Layout View</option>
              <option value="assets/hero_visual.png">Aerial Masterplan View</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label">DTCP / CMDA Approval Reference</label>
            <input type="text" id="newProjDtcp" class="form-control" placeholder="e.g. DTCP No. 84/2025" />
          </div>

          <div class="form-group">
            <label class="form-label">Description</label>
            <textarea id="newProjDesc" class="form-control" placeholder="Brief layout project summary..."></textarea>
          </div>

          <button type="submit" class="btn btn-primary btn-full btn-lg">Create Project</button>
        </form>
      </div>
    `;
    document.getElementById('globalModalOverlay').classList.add('active');
  },

  saveNewProject(e) {
    e.preventDefault();
    const name = document.getElementById('newProjName').value;
    const city = document.getElementById('newProjCity').value;
    const status = document.getElementById('newProjStatus').value;
    const location = document.getElementById('newProjLocation').value;
    const plotSizes = document.getElementById('newProjSizes').value;
    const image = document.getElementById('newProjImage').value;
    const dtcpApproval = document.getElementById('newProjDtcp').value;
    const description = document.getElementById('newProjDesc').value;

    window.store.addProject({
      name, city, status, location, plotSizes, image, dtcpApproval, description,
      layoutPlan: 'assets/masterplan_blueprint.png',
      reraNo: 'TN/RERA/REGISTERED',
      highlights: ['Clear Title Registered', '40ft Blacktop Roads', 'Subterranean Cabling'],
      amenities: ['Wide Roads', 'Security Entrance', 'Avenue Plantation']
    });

    app.closeGlobalModal();
    app.showToast('✓ New layout project added!');
    app.renderApp();
  },

  toggleFeatured(id) {
    window.store.toggleFeatured(id);
    app.renderApp();
  },

  deleteProject(id) {
    if (confirm('Are you sure you want to delete this layout project?')) {
      window.store.deleteProject(id);
      app.showToast('Project deleted.');
      app.renderApp();
    }
  },

  // LEADS & ENQUIRIES TAB
  renderLeadsTab() {
    let leads = window.store.getLeads();
    if (this.leadFilterStatus !== 'All') {
      leads = leads.filter(l => l.status === this.leadFilterStatus);
    }

    return `
      <div>
        <div class="admin-header-bar">
          <div>
            <h1 class="admin-title">Enquiries & Lead Management</h1>
            <p style="color: var(--text-muted); font-size: 0.9rem;">View incoming customer inquiries, mark follow-up statuses, and export database.</p>
          </div>

          <div style="display: flex; gap: 12px;">
            <button class="btn btn-secondary btn-sm" onclick="adminComponents.exportLeadsCSV()">
              📥 Export to CSV
            </button>
          </div>
        </div>

        <!-- Filter Pills -->
        <div style="display: flex; gap: 8px; margin-bottom: 24px;">
          ${['All', 'New', 'Contacted', 'Closed'].map(st => `
            <button class="filter-tab ${this.leadFilterStatus === st ? 'active' : ''}" onclick="adminComponents.setLeadFilter('${st}')">
              ${st} ${st === 'All' ? `(${window.store.getLeads().length})` : ''}
            </button>
          `).join('')}
        </div>

        <div class="admin-table-container">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>City Pref</th>
                <th>Project Interest</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${leads.map(l => `
                <tr>
                  <td style="font-size:0.8rem; color:var(--text-muted);">${l.date}</td>
                  <td style="font-weight:800;">${l.name}</td>
                  <td><a href="tel:${l.phone}" style="text-decoration:underline;">${l.phone}</a></td>
                  <td>${l.email || '—'}</td>
                  <td>${l.cityPref}</td>
                  <td>${l.projectPref}</td>
                  <td><span class="lead-status status-${l.status.toLowerCase()}">${l.status}</span></td>
                  <td>
                    <div style="display: flex; gap: 6px;">
                      <button class="btn btn-secondary btn-sm" onclick="adminComponents.updateLeadStatus('${l.id}', 'Contacted')">Mark Contacted</button>
                      <button class="btn btn-secondary btn-sm" onclick="adminComponents.updateLeadStatus('${l.id}', 'Closed')">Close</button>
                    </div>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  setLeadFilter(st) {
    this.leadFilterStatus = st;
    app.renderApp();
  },

  updateLeadStatus(id, st) {
    window.store.updateLeadStatus(id, st);
    app.showToast(`Lead status updated to ${st}`);
    app.renderApp();
  },

  exportLeadsCSV() {
    const leads = window.store.getLeads();
    let csv = 'ID,Date,Name,Phone,Email,CityPref,ProjectPref,Status\n';
    leads.forEach(l => {
      csv += `"${l.id}","${l.date}","${l.name}","${l.phone}","${l.email || ''}","${l.cityPref}","${l.projectPref}","${l.status}"\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Akshara_Leads_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    app.showToast('✓ Exported leads to CSV file!');
  },

  // CMS CONTENT TAB
  renderCmsTab() {
    const settings = window.store.getSettings();
    const board = window.store.getBoardMembers();

    return `
      <div>
        <div class="admin-header-bar">
          <div>
            <h1 class="admin-title">Content & Leadership CMS</h1>
            <p style="color: var(--text-muted); font-size: 0.9rem;">Modify website hero banner copy, leadership board bios (Lokesh, Payani, Sandeep), and section details.</p>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px;">
          <!-- Board Members Management -->
          <div class="chart-box">
            <h3 class="chart-title" style="margin-bottom: 20px;">Board of Directors Control</h3>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              ${board.map(b => `
                <div style="padding: 16px; background: var(--bg-secondary); border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: space-between;">
                  <div style="display: flex; align-items: center; gap: 12px;">
                    <img src="${b.photo}" alt="${b.name}" style="width: 44px; height: 44px; border-radius: 50%; object-fit: cover;" />
                    <div>
                      <div style="font-weight: 800;">${b.name}</div>
                      <div style="font-size: 0.75rem; color: var(--text-muted);">${b.designation}</div>
                    </div>
                  </div>
                  <button class="btn btn-secondary btn-sm" onclick="adminComponents.editBoardMember('${b.id}')">Edit Bio</button>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Hero & Company Tagline Editor -->
          <div class="chart-box">
            <h3 class="chart-title" style="margin-bottom: 20px;">Website Branding Copy</h3>
            <form onsubmit="adminComponents.saveBrandCopy(event)">
              <div class="form-group">
                <label class="form-label">Company Brand Name</label>
                <input type="text" id="cmsCompanyName" class="form-control" value="${settings.companyName}" />
              </div>
              <div class="form-group">
                <label class="form-label">Tagline</label>
                <input type="text" id="cmsTagline" class="form-control" value="${settings.tagline}" />
              </div>
              <button type="submit" class="btn btn-primary btn-full">Update Copy</button>
            </form>
          </div>
        </div>
      </div>
    `;
  },

  editBoardMember(id) {
    const member = window.store.getBoardMembers().find(b => b.id === id);
    if (!member) return;

    const modalBody = document.getElementById('globalModalBody');
    modalBody.innerHTML = `
      <div>
        <h2 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 20px;">Edit Board Member Details</h2>
        <form onsubmit="adminComponents.saveBoardEdit(event, '${id}')">
          <div class="form-group">
            <label class="form-label">Full Name</label>
            <input type="text" id="editBoardName" class="form-control" value="${member.name}" required />
          </div>
          <div class="form-group">
            <label class="form-label">Designation / Title</label>
            <input type="text" id="editBoardTitle" class="form-control" value="${member.designation}" required />
          </div>
          <div class="form-group">
            <label class="form-label">Professional Biography</label>
            <textarea id="editBoardBio" class="form-control" style="min-height: 120px;">${member.bio}</textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-full">Save Changes</button>
        </form>
      </div>
    `;
    document.getElementById('globalModalOverlay').classList.add('active');
  },

  saveBoardEdit(e, id) {
    e.preventDefault();
    const name = document.getElementById('editBoardName').value;
    const designation = document.getElementById('editBoardTitle').value;
    const bio = document.getElementById('editBoardBio').value;

    window.store.updateBoardMember(id, { name, designation, bio });
    app.closeGlobalModal();
    app.showToast('✓ Board member details updated!');
    app.renderApp();
  },

  saveBrandCopy(e) {
    e.preventDefault();
    const companyName = document.getElementById('cmsCompanyName').value;
    const tagline = document.getElementById('cmsTagline').value;

    window.store.updateSettings({ companyName, tagline });
    app.showToast('✓ Site branding settings saved!');
    app.renderApp();
  },

  // SITE SETTINGS TAB
  renderSettingsTab() {
    const settings = window.store.getSettings();
    return `
      <div>
        <div class="admin-header-bar">
          <div>
            <h1 class="admin-title">Site Settings & Contact Info</h1>
            <p style="color: var(--text-muted); font-size: 0.9rem;">Manage corporate phone numbers, WhatsApp link, address, and SEO defaults.</p>
          </div>
        </div>

        <div class="chart-box" style="max-width: 680px;">
          <form onsubmit="adminComponents.saveSettings(event)">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;" class="form-group">
              <div>
                <label class="form-label">Primary Phone</label>
                <input type="text" id="setPhone1" class="form-control" value="${settings.phone1}" required />
              </div>
              <div>
                <label class="form-label">Secondary Phone</label>
                <input type="text" id="setPhone2" class="form-control" value="${settings.phone2}" />
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;" class="form-group">
              <div>
                <label class="form-label">Email Support</label>
                <input type="email" id="setEmail" class="form-control" value="${settings.email}" required />
              </div>
              <div>
                <label class="form-label">WhatsApp Number (with country code)</label>
                <input type="text" id="setWhatsapp" class="form-control" value="${settings.whatsappNumber}" required />
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Corporate Office Address</label>
              <textarea id="setAddress" class="form-control">${settings.address}</textarea>
            </div>

            <div class="form-group">
              <label class="form-label">SEO Meta Title</label>
              <input type="text" id="setMetaTitle" class="form-control" value="${settings.metaTitle}" />
            </div>

            <div class="form-group">
              <label class="form-label">SEO Meta Description</label>
              <textarea id="setMetaDesc" class="form-control">${settings.metaDesc}</textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-full btn-lg">Save Site Configuration</button>
          </form>
        </div>
      </div>
    `;
  },

  saveSettings(e) {
    e.preventDefault();
    window.store.updateSettings({
      phone1: document.getElementById('setPhone1').value,
      phone2: document.getElementById('setPhone2').value,
      email: document.getElementById('setEmail').value,
      whatsappNumber: document.getElementById('setWhatsapp').value,
      address: document.getElementById('setAddress').value,
      metaTitle: document.getElementById('setMetaTitle').value,
      metaDesc: document.getElementById('setMetaDesc').value
    });

    app.showToast('✓ Site configuration saved!');
    app.renderApp();
  }
};
