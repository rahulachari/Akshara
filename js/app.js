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
        document.body.style.backgroundColor = '#111';
        publicApp.innerHTML = `
          ${window.publicComponents.renderHeader()}
          <main>
            ${window.publicComponents.renderContactPage()}
          </main>
          ${window.publicComponents.renderFooter({ isDark: true })}
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
