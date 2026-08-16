/**
 * Akshara Plotted Developments - Application Orchestrator
 */

class App {
  constructor() {
    this.isAdminViewOpen = false;
    this.currentRoute = window.location.hash === '#contact' ? 'contact' : 'home';
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
          <main style="padding-top: var(--header-height);">
            ${window.publicComponents.renderContactPage()}
          </main>
          ${window.publicComponents.renderFooter()}
        `;
        setTimeout(() => {
          if (window.publicComponents.initSwipeButton) {
            window.publicComponents.initSwipeButton();
          }
        }, 0);
      } else {
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
        // Initialize hero scroll zoom effect
        setTimeout(() => {
          if (window.publicComponents.initHeroScroll) {
            window.publicComponents.initHeroScroll();
          }
        }, 0);
      }
    }
  }

  setupEventListeners() {
    // Handle route changes
    window.addEventListener('hashchange', () => {
      const newRoute = window.location.hash === '#contact' ? 'contact' : 'home';
      if (this.currentRoute !== newRoute) {
        this.currentRoute = newRoute;
        this.renderApp();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });

    // Escape key closes modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeGlobalModal();
      }
    });
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
