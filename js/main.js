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
            title: "24/7 Dukungan Ahli",
            description: "Tanyakan soalmu, tim edukator profesional kami akan menjawabnya selangkah demi selangkah."
        },
        {
            icon: "ri-award-line",
            title: "Sertifikat Terverifikasi",
            description: "Dapatkan sertifikat keahlian yang diakui secara nasional setelah menyelesaikan kurikulum dengan baik."
        }
    ];

    // Mock data for testimonials
    const testimonialsData = [
        {
            name: "Kenny Richie Nergiva",
            role: "Juara HACKATHON National 2024",
            initials: "KR",
            content: "Smart Edu ini beneran merubah hidup saya, karna sebelum saya masuk smart edu ini saya jujur tidak suka ngitung-ngitung apalagi matematika, namun setelah dr.Hendrik merubah pola pikir saya, saya berhasil mendapatkan 11 kali bintang matematika selagi saat saya masih SD"
        },
        {
            name: "Hazel Firdaus keepa",
            role: "Pelajar SDS El-Fitra Badung",
            initials: "HF",
            content: "Saya merekomendasikan smart edu ini bagi teman-teman yang kesulitan dalam menyelesaikan soal matematika, penjelasannya sangat out of the box dan luar biasa, memberikan kita pemahaman dan visualisasi unik."
        },
        {
            name: "Etherilly Krasivaya Devuska",
            role: "Pelajar",
            initials: "EK",
            content: "Kurikulum yang diajarkan sangat sistematis, saya berhasil menyelesaikan materi kalkulus lanjutan dengan sangat mudah."
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
                    <div class="testimonial-header">
                        <div class="testimonial-avatar">
                            ${testimonial.initials}
                        </div>
                        <div class="testimonial-info">
                            <h4 class="testimonial-name">${testimonial.name}</h4>
                            <p class="testimonial-role">${testimonial.role}</p>
                        </div>
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

    // Navbar Scroll Effect
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScroll > lastScrollTop && currentScroll > 50) {
            // Scrolling down: make transparent
            header.classList.add('header-transparent');
        } else {
            // Scrolling up: make solid
            header.classList.remove('header-transparent');
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }, { passive: true });

    // Back to Top Button Logic
    const backToTopBtn = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

