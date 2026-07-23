// ===== Navigation =====
const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    updateActiveLink();
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.querySelector('i').classList.toggle('fa-bars');
    navToggle.querySelector('i').classList.toggle('fa-times');
});

// Close menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.querySelector('i').classList.add('fa-bars');
        navToggle.querySelector('i').classList.remove('fa-times');
    });
});

// Active link update
function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
            navLinks.forEach(link => link.classList.remove('active'));
            document.querySelector(`.nav-link[href="#${id}"]`)?.classList.add('active');
        }
    });
}

// ===== Typing Effect =====
const titles = ['Vibe Coder', 'AI Full Stack Developer', 'Flutter Mobile Developer', 'Claude Code Expert'];
let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const titleElement = document.querySelector('.hero-title');

function typeEffect() {
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
        titleElement.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
    } else {
        titleElement.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentTitle.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

typeEffect();

// ===== Counter Animation =====
const counters = document.querySelectorAll('.stat-number');

function animateCounters() {
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 60;
        let current = 0;

        function updateCount() {
            current += increment;
            if (current < target) {
                counter.textContent = Math.ceil(current) + '+';
                requestAnimationFrame(updateCount);
            } else {
                counter.textContent = target + '+';
            }
        }

        updateCount();
    });
}

// Trigger counters when about section is visible
const aboutSection = document.querySelector('.about');
let countersAnimated = false;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !countersAnimated) {
            countersAnimated = true;
            animateCounters();
        }
    });
}, { threshold: 0.5 });

if (aboutSection) observer.observe(aboutSection);

// ===== Scroll Reveal =====
const revealElements = document.querySelectorAll('.skill-category, .project-card, .timeline-item');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(el);
});

// ===== Contact Form =====
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const btn = contactForm.querySelector('button');
    const originalText = btn.textContent;

    btn.textContent = 'Sending...';
    btn.disabled = true;

    // Simulate send - replace with actual form handling
    setTimeout(() => {
        btn.textContent = 'Message Sent!';
        btn.style.background = 'linear-gradient(135deg, #00b894, #00cec9)';

        setTimeout(() => {
            btn.textContent = originalText;
            btn.disabled = false;
            btn.style.background = '';
            contactForm.reset();
        }, 2000);
    }, 1500);
});

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ===== Upwork Slider =====
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
}

function nextSlide() {
    showSlide((currentSlide + 1) % slides.length);
}

function prevSlide() {
    showSlide((currentSlide - 1 + slides.length) % slides.length);
}

if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    dots.forEach(dot => {
        dot.addEventListener('click', () => showSlide(parseInt(dot.dataset.index)));
    });
    setInterval(nextSlide, 4000);
}

// ===== Askly Slider =====
const asklySlides = document.querySelectorAll('.askly-slide');
const asklyDots = document.querySelectorAll('.askly-dot');
const asklyPrev = document.querySelector('.askly-slider-btn.prev');
const asklyNext = document.querySelector('.askly-slider-btn.next');
let asklyCurrent = 0;

function asklyShow(index) {
    asklySlides.forEach(s => s.classList.remove('active'));
    asklyDots.forEach(d => d.classList.remove('active'));
    asklySlides[index].classList.add('active');
    asklyDots[index].classList.add('active');
    asklyCurrent = index;
}

function asklyNextSlide() {
    asklyShow((asklyCurrent + 1) % asklySlides.length);
}

function asklyPrevSlide() {
    asklyShow((asklyCurrent - 1 + asklySlides.length) % asklySlides.length);
}

if (asklyPrev && asklyNext) {
    asklyPrev.addEventListener('click', asklyPrevSlide);
    asklyNext.addEventListener('click', asklyNextSlide);
    asklyDots.forEach(dot => {
        dot.addEventListener('click', () => asklyShow(parseInt(dot.dataset.index)));
    });
}
