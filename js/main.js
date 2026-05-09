document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu functionality
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const closeMenuButton = document.getElementById('close-menu');

    // Safety check for mobile menu elements
    if (mobileMenuButton && mobileMenu && mobileMenuOverlay && closeMenuButton) {
        function toggleMobileMenu() {
            mobileMenu.classList.toggle('active');
            mobileMenuOverlay.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
            document.body.classList.toggle('mobile-menu-open');
        }

        mobileMenuButton.addEventListener('click', toggleMobileMenu);
        closeMenuButton.addEventListener('click', toggleMobileMenu);
        mobileMenuOverlay.addEventListener('click', toggleMobileMenu);

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    }

    // Intro Animation Logic
    window.addEventListener('load', () => {
        const introOverlay = document.getElementById('intro-overlay');
        const introLogo = document.querySelector('.intro-logo');

        if (introOverlay && introLogo) {
            // Prevent scrolling while intro is active
            document.body.style.overflow = 'hidden';

            // Wait for slide animations to finish (1.2s total) + reading time (0.5s)
            setTimeout(() => {
                introLogo.classList.add('zoom-out');

                // Wait for zoom out animation to finish (1s)
                setTimeout(() => {
                    introOverlay.classList.add('hidden');

                    // Allow scrolling after intro
                    document.body.style.overflow = '';

                    // Cleanup from DOM after transition
                    setTimeout(() => {
                        introOverlay.remove();
                    }, 800);
                }, 1000);
            }, 1700);
        }
    });

    // Set active link visually based on current page
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-desktop a, .mobile-nav a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && currentPath.includes(href) && href !== '#') {
            link.classList.add('active');
        } else if (href === 'index.html' && (currentPath.endsWith('/') || currentPath === '')) {
            link.classList.add('active');
        }
    });

    // Mock data for courses
    const coursesData = [
        {
            icon: "ri-function-line",
            title: "Aljabar Kompleks",
            description: "Menguasai Konsep Fundamental Aljabar dimulai dari aljabar sederhana hingga pengaplikasiannya",
            color: "primary"
        },
        {
            icon: "ri-shape-2-line",
            title: "Fundamental Geometri",
            description: "Mempelajari Tentang bangun datar, bangun ruang, dimensi, sudut, luas, volume hanya dalam waktu kurang dari sehari",
            color: "secondary"
        },
        {
            icon: "ri-line-chart-line",
            title: "Gradien & Fungsi",
            description: "Mengenali dan menguasai materi gradien dan berbagai grafik dengan konstanta pak hendrik",
            color: "primary"
        },
        {
            icon: "ri-bar-chart-box-line",
            title: "Statistika & Probabilitas",
            description: "Belajar tentang kemungkinan, dan grafik serta bagaimana cara mengaplikasikannya dalam kehidupan sehari-hari",
            color: "secondary"
        }
    ];

    // Mock data for features
    const featuresData = [
        {
            icon: "ri-video-line",
            title: "Video pembelajaran interaktif",
            description: "Melibatkan konten video dinamis yang akan menjabarkan semua soal dengan sangat menarik dan mudah dipahami."
        },
        {
            icon: "ri-question-answer-line",
            title: "Bimbingan Belajar",
            description: "tersedia grup untuk bertanya jawab"
        },
        {
            icon: "ri-video-line",
            title: "Video Pembelajaran",
            description: "Belajar matematika jadi lebih mudah dan menyenangkan dengan video pembelajaran"
        }
    ];

    // Mock data for testimonials
    const testimonialsData = [
        {
            name: "",
            role: "",
            initials: "",
            image: "./res/newsResource/Screenshot (21).png",
            content: "tekan untuk melihat full"
        },
        {
            name: "",
            role: "",
            initials: "",
            image: "./res/newsResource/Screenshot (22).png",
            content: "tekan untuk melihat full"
        },
        {
            name: "",
            role: "",
            initials: "",
            image: "./res/newsResource/Screenshot (23).png",
            content: "tekan untuk melihat full"
        },
        {
            name: "",
            role: "",
            initials: "",
            image: "./res/newsResource/Screenshot (24).png",
            content: "tekan untuk melihat full"
        },
        {
            name: "",
            role: "",
            initials: "",
            image: "./res/newsResource/Screenshot (25).png",
            content: "tekan untuk melihat full"
        }
    ];

    // Render courses
    const coursesContainer = document.getElementById('courses-container');
    if (coursesContainer) {
        coursesData.forEach(course => {
            const courseElement = document.createElement('div');
            courseElement.className = 'card course-card animate-on-scroll';
            courseElement.innerHTML = `
                <div class="card-body">
                    <div class="course-icon ${course.color === 'primary' ? 'course-icon-primary' : 'course-icon-secondary'}">
                        <i class="${course.icon}"></i>
                    </div>
                    <h3 class="course-title">${course.title}</h3>
                    <p class="course-description">${course.description}</p>
                    <a href="#" class="course-link">
                        Pelajari sekarang
                        <i class="ri-arrow-right-line"></i>
                    </a>
                </div>
            `;
            coursesContainer.appendChild(courseElement);
        });
    }

    // Render features
    const featuresContainer = document.getElementById('features-container');
    if (featuresContainer) {
        featuresData.forEach(feature => {
            const featureElement = document.createElement('div');
            featureElement.className = 'card feature-card animate-on-scroll';
            featureElement.innerHTML = `
                <div class="card-body">
                    <div class="feature-icon">
                        <i class="${feature.icon}"></i>
                    </div>
                    <h3 class="feature-title">${feature.title}</h3>
                    <p class="feature-description">${feature.description}</p>
                </div>
            `;
            featuresContainer.appendChild(featureElement);
        });
    }

    // Render testimonials
    const testimonialsContainer = document.getElementById('testimonials-container');
    if (testimonialsContainer) {
        testimonialsData.forEach(testimonial => {
            const testimonialElement = document.createElement('div');
            testimonialElement.className = 'card testimonial-card animate-on-scroll';
            testimonialElement.innerHTML = `
                <div class="card-body">
                    <div class="testimonial-image-container">
                        <img src="${testimonial.image}" alt="Testimoni" class="testimonial-photo">
                    </div>
                    <p class="testimonial-content">"${testimonial.content}"</p>
                </div>
            `;
            testimonialsContainer.appendChild(testimonialElement);
        });
    }

    // Scroll Animation Observer (Fade In/Out)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% is visible
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                // Remove class to allow animation to reverse when scrolling out
                entry.target.classList.remove('is-visible');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => scrollObserver.observe(el));

    // Navbar Scroll Effect & Back to Top — single listener for performance
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        // Navbar transparency
        if (header) {
            if (currentScroll > lastScrollTop && currentScroll > 50) {
                header.classList.add('header-transparent');
            } else {
                header.classList.remove('header-transparent');
            }
        }

        // Back to top visibility
        if (backToTopBtn) {
            if (currentScroll > 300) {
                backToTopBtn.classList.add('active');
            } else {
                backToTopBtn.classList.remove('active');
            }
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }, { passive: true });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('news-slider');
    let isDown = false;
    let startDate;
    let scrollLeft;

    if (slider) {
        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2; // Angka 2 adalah kecepatan geser
            slider.scrollLeft = scrollLeft - walk;
        });

        // Dukungan untuk layar sentuh (Mobile)
        slider.addEventListener('touchstart', (e) => {
            isDown = true;
            startX = e.touches[0].pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('touchend', () => {
            isDown = false;
        });

        slider.addEventListener('touchmove', (e) => {
            if (!isDown) return;
            const x = e.touches[0].pageX - slider.offsetLeft;
            const walk = (x - startX) * 2;
            slider.scrollLeft = scrollLeft - walk;
        });
    }

    // Lightbox Logic
    const lightbox = document.getElementById('image-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.lightbox-close');

    if (lightbox && lightboxImg && closeBtn) {
        // Event delegation for testimonial images and map points
        document.addEventListener('click', (e) => {
            const testimonialImage = e.target.closest('.testimonial-photo');
            const mapPoint = e.target.closest('.map-point');

            if (testimonialImage) {
                lightbox.style.display = 'block';
                lightboxImg.src = testimonialImage.src;
                const card = testimonialImage.closest('.testimonial-card');
                const content = card ? card.querySelector('.testimonial-content') : null;
                lightboxCaption.innerHTML = content ? content.innerText : '';
                document.body.classList.add('no-scroll');
            } else if (mapPoint) {
                lightbox.style.display = 'block';
                lightboxImg.src = mapPoint.getAttribute('data-img');
                const location = mapPoint.getAttribute('data-location');
                lightboxCaption.innerHTML = `Dokumentasi Pelatihan: <strong>${location}</strong>`;
                document.body.classList.add('no-scroll');
            }
        });

        function closeLightbox() {
            lightbox.style.display = 'none';
            document.body.classList.remove('no-scroll');
        }

        closeBtn.addEventListener('click', closeLightbox);

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.style.display === 'block') {
                closeLightbox();
            }
        });
    }
});
