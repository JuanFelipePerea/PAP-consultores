// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Sidebar functionality
        const sidebarToggle = document.getElementById('sidebarToggle');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebarOverlay');

        function toggleSidebar() {
            sidebar.classList.toggle('open');
            overlay.classList.toggle('active');
        }

        sidebarToggle.addEventListener('click', toggleSidebar);
        overlay.addEventListener('click', toggleSidebar);

        // Close sidebar when clicking on a nav link
        document.querySelectorAll('.sidebar-nav a').forEach(link => {
            link.addEventListener('click', () => {
                sidebar.classList.remove('open');
                overlay.classList.remove('active');
            });
        });

// Carrousel section
document.addEventListener('DOMContentLoaded', function() {
            const carousel = document.querySelector('#projectsCarousel');
            const carouselInstance = new bootstrap.Carousel(carousel, {
                interval: 6000,
                wrap: true,
                touch: true
            });

            // Pause on hover
            carousel.addEventListener('mouseenter', function() {
                carouselInstance.pause();
            });

            carousel.addEventListener('mouseleave', function() {
                carouselInstance.cycle();
            });

            // Add smooth scroll behavior for project links
            document.querySelectorAll('.project-link').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    // Here you would handle the navigation to the actual project page
                    console.log('Navigate to project:', this.closest('.project-card').querySelector('.project-title').textContent);
                });
            });
        });