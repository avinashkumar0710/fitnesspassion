// Shared Header HTML
const headerHTML = `
<header id="main-header">
    <div class="container nav">
        <a href="index.html" class="logo" style="display: flex; align-items: center; gap: 10px;">
            <img src="images/logo_gym_transparent.png" alt="Fitness Passion Gym Logo" style="height: 50px; margin-bottom: 5px;"> FITNESS <span>PASSION</span>
        </a>
        <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="pricing.html">Pricing</a></li>
            <li><a href="trainers.html">Trainers</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li><a href="reviews.html">Reviews</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
        <div class="mobile-menu-btn">&#9776;</div>
    </div>
</header>
`;

// Shared Footer HTML
const footerHTML = `
<footer>
    <div class="container">
        <div class="footer-grid">
            <div class="footer-brand">
                <a href="index.html" class="logo" style="margin-bottom: 20px; display: inline-flex; align-items: center; gap: 10px;">
                    <img src="images/logo_gym_transparent.png" alt="Fitness Passion Gym Logo" style="height: 50px; margin-bottom: 5px;"> FITNESS <span>PASSION</span>
                </a>
                <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.8; margin-bottom: 20px;">
                    Forging iron and sculpting legacies in Bhilai's most elite fitness sanctuary. No fluff, just results.
                </p>
                <div class="social-links">
                    <a href="#" class="social-icon" title="Instagram"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                    <a href="#" class="social-icon" title="Facebook"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                    <a href="#" class="social-icon" title="YouTube"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg></a>
                </div>
            </div>
            
            <div class="footer-col">
                <h4 class="footer-title">HQ LOCATOR</h4>
                <ul class="footer-contact-list">
                    <li>
                        <span class="icon-box">📍</span>
                        <div>
                            <strong>Address</strong>
                            <p>Plot no.6, Main Street, 1<br>Shakti Vihar Rd, Risali<br>Bhilai, CG 490006</p>
                        </div>
                    </li>
                    <li>
                        <span class="icon-box">📞</span>
                        <div>
                            <strong>Comms</strong>
                            <p>+91 77228 27265<br>+91 98935 20072</p>
                        </div>
                    </li>
                </ul>
            </div>
            
            <div class="footer-col">
                <h4 class="footer-title">OPERATIONS</h4>
                <ul class="footer-contact-list">
                    <li>
                        <span class="icon-box">⏱️</span>
                        <div>
                            <strong>Mon - Sat</strong>
                            <p>6:00 AM - 10:00 PM</p>
                        </div>
                    </li>
                    <li>
                        <span class="icon-box">☀️</span>
                        <div>
                            <strong>Sunday</strong>
                            <p>7:00 AM - 11:00 AM</p>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="footer-col">
                <h4 class="footer-title">LINKS</h4>
                <ul class="footer-links-styled">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="pricing.html">Pricing</a></li>
                    <li><a href="trainers.html">Trainers</a></li>
                    <li><a href="gallery.html">Gallery</a></li>
                    <li><a href="reviews.html">Reviews</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>
        </div>
        
        <div class="footer-bottom">
            <div class="copyright">
                &copy; 2026 FITNESS PASSION GYM. ALL RIGHTS RESERVED. NOT FOR THE WEAK.
            </div>
        </div>
    </div>
</footer>
`;

// Initialize everything on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    // Inject Header
    const headerEl = document.getElementById('header-placeholder');
    if (headerEl) {
        headerEl.innerHTML = headerHTML;

        // Set active link based on current page
        const page = window.location.pathname.split('/').pop() || 'index.html';
        headerEl.querySelectorAll('.nav-links a').forEach(link => {
            if (link.getAttribute('href') === page) {
                link.classList.add('active');
            }
        });

        // Add scrolled class for non-index pages (they have no hero)
        const header = document.getElementById('main-header');
        if (header && page !== 'index.html') {
            header.classList.add('scrolled');
        }

        // Mobile menu toggle
        const mobileBtn = headerEl.querySelector('.mobile-menu-btn');
        const navLinks = headerEl.querySelector('.nav-links');
        if (mobileBtn && navLinks) {
            mobileBtn.addEventListener('click', () => {
                navLinks.classList.toggle('mobile-active');
            });
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('mobile-active');
                });
            });
        }
    }

    // Inject Footer
    const footerEl = document.getElementById('footer-placeholder');
    if (footerEl) {
        footerEl.innerHTML = footerHTML;
    }

    // Scroll header effect (transparent → solid on index page)
    const header = document.getElementById('main-header');
    if (header) {
        const page = window.location.pathname.split('/').pop() || 'index.html';
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else if (page === 'index.html') {
                header.classList.remove('scrolled');
            }
        });
    }

    // Scroll Reveal via Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    // Scroll-to-top button
    const scrollBtn = document.getElementById('scroll-to-top');
    if (scrollBtn) {
        window.addEventListener('scroll', () => {
            scrollBtn.classList.toggle('visible', window.scrollY > 500);
        });
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
