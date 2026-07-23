// ===== Navigation =====
const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    // Hide WhatsApp button on scroll down, show on scroll up
    const waBtn = document.querySelector('.whatsapp-float');
    if (waBtn) {
        if (window.scrollY > 300 && window.scrollY > lastScroll) {
            waBtn.classList.add('hidden');
        } else if (window.scrollY < lastScroll) {
            waBtn.classList.remove('hidden');
        }
        lastScroll = window.scrollY;
    }
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
}, { threshold: 0.2 });

if (aboutSection) observer.observe(aboutSection);

// Fallback: show actual values after 3s if observer didn't fire
setTimeout(() => {
    if (!countersAnimated) {
        countersAnimated = true;
        counters.forEach(counter => {
            const target = counter.getAttribute('data-target');
            counter.textContent = target + '+';
        });
    }
}, 3000);

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
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button');
        const originalText = btn.textContent;
        btn.textContent = 'Sending...';
        btn.disabled = true;
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
}

// ===== WhatsApp Modal =====
function openWhatsAppModal() {
    document.getElementById('whatsappModal').classList.add('active');
}

function closeWhatsAppModal(event) {
    if (!event || !event.target || event.target.id === 'whatsappModal') {
        document.getElementById('whatsappModal').classList.remove('active');
    }
}

function submitWhatsAppForm(e) {
    e.preventDefault();
    const name = document.getElementById('waName').value.trim();
    const email = document.getElementById('waEmail').value.trim();
    const project = document.getElementById('waProject').value.trim();
    if (!name || !project) return;

    let msg = `Hi Umer! I'd like to discuss a project:%0A%0A`;
    msg += `Name: ${encodeURIComponent(name)}%0A`;
    if (email) msg += `Email: ${encodeURIComponent(email)}%0A`;
    msg += `Project Details: ${encodeURIComponent(project)}`;

    window.open(`https://wa.me/923459347900?text=${msg}`, '_blank');
    document.getElementById('whatsappModal').classList.remove('active');
    document.getElementById('whatsappForm').reset();
}

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

// ===== Project Card Sliders Helper =====
function initProjectSlider(slideSel, dotSel, prevSel, nextSel) {
    const slides = document.querySelectorAll(slideSel);
    const dots = document.querySelectorAll(dotSel);
    const prev = document.querySelector(prevSel);
    const next = document.querySelector(nextSel);
    let current = 0;

    if (!slides.length) return;

    function show(index) {
        slides.forEach(s => s.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));
        if (slides[index]) slides[index].classList.add('active');
        if (dots[index]) dots[index].classList.add('active');
        current = index;
    }

    if (prev && next) {
        prev.addEventListener('click', () => show((current - 1 + slides.length) % slides.length));
        next.addEventListener('click', () => show((current + 1) % slides.length));
        dots.forEach(dot => {
            dot.addEventListener('click', () => show(parseInt(dot.dataset.index)));
        });
    }
}

// Initialize Sliders
initProjectSlider('.askly-slide', '.askly-dot', '.askly-slider-btn.prev', '.askly-slider-btn.next');
initProjectSlider('.micamp-slide', '.micamp-dot', '.micamp-slider-btn.prev', '.micamp-slider-btn.next');
initProjectSlider('.trendsnap-slide', '.trendsnap-dot', '.trendsnap-slider-btn.prev', '.trendsnap-slider-btn.next');

// ===== Resume PDF Generator =====
function downloadResume() {
    const btn = document.querySelector('.btn-outline');
    if (btn) { btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...'; btn.disabled = true; }

    // Load images async
    const imgPromises = [
        loadImage('umer.jpg'),                    // profile photo
        loadImage('project-onepdf.png'),          // project 1 thumb
        loadImage('askly.png'),                   // project 2 thumb
    ];

    Promise.all(imgPromises).then(([profileImg, proj1Img, proj2Img]) => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF('p', 'mm', 'a4');
        const m = 20;
        const maxW = 170;
        let y = m;

        function w(txt, size, opts) {
            opts = opts || {};
            doc.setFontSize(size || 11);
            doc.setFont('Helvetica', opts.bold ? 'bold' : (opts.italic ? 'italic' : 'normal'));
            if (opts.color) doc.setTextColor(opts.color[0], opts.color[1], opts.color[2]);
            else doc.setTextColor(50, 50, 50);
            const lines = doc.splitTextToSize(String(txt), maxW);
            if (y + lines.length * (size * 0.35) > 280) { doc.addPage(); y = m; }
            doc.text(lines, m, y);
            y += lines.length * (size * 0.35) + (opts.space || 2);
        }

        function sep(h) { y += h || 4; if (y > 275) { doc.addPage(); y = m; } }

        // ----- HEADER with photo -----
        doc.setFillColor(108, 92, 231);
        doc.rect(0, 0, 210, 45, 'F');

        // Profile photo
        if (profileImg) {
            doc.addImage(profileImg, 'JPEG', 168, 5, 32, 35);
            // border
            doc.setDrawColor(255, 255, 255);
            doc.setLineWidth(1);
            doc.rect(168, 5, 32, 35);
        }

        doc.setTextColor(255, 255, 255);
        doc.setFontSize(22);
        doc.setFont('Helvetica', 'bold');
        doc.text('Umer Waqas', m, 18);
        doc.setFontSize(11);
        doc.setFont('Helvetica', 'normal');
        doc.text('AI Full Stack Developer', m, 27);
        doc.setFontSize(7.5);
        doc.text('Peshawar, Pakistan', m, 34);
        doc.text('umerwaqas.dev | linkedin.com/in/umerwaqas92', m, 39);
        doc.text('github.com/umerwaqas92 | upwork.com/freelancers/~010219e25749223694', m, 43);

        y = 55;

        // ----- SUMMARY -----
        w('PROFESSIONAL SUMMARY', 13, { bold: true, color: [108, 92, 231], space: 4 });
        w('AI Full Stack Developer with 6+ years of experience crafting end-to-end solutions using React, Next.js, Node.js, Python, Flutter, and AI integration. Specializes in LLM integration, RAG systems, chatbots, and intelligent automation. Top Rated on Upwork with 100% Job Success and 48+ successful projects.', 10, { space: 3 });
        sep(4);

        // ----- SKILLS -----
        w('CORE SKILLS', 13, { bold: true, color: [108, 92, 231], space: 4 });
        [
            ['AI/ML:', 'OpenAI / Claude API, LangChain, Vector DBs, RAG, Fine-tuning'],
            ['Frontend:', 'Next.js, React, TypeScript, Tailwind CSS, Figma-to-Code'],
            ['Backend:', 'Node.js, Python, Flask, FastAPI, REST APIs, WebSockets'],
            ['Mobile:', 'Flutter, Dart, iOS & Android App Development'],
            ['Cloud:', 'AWS, GCP, Cloudflare, Docker, CI/CD, VPS'],
            ['Vibe Coding:', 'Claude Code, Cursor AI, rapid prototyping'],
        ].forEach(([c, s]) => { w(c + ' ' + s, 9, { space: 2 }); });
        sep(4);

        // ----- WORK EXPERIENCE -----
        w('WORK EXPERIENCE', 13, { bold: true, color: [108, 92, 231], space: 4 });
        [
            ['iOS App Developer \u2014 OnePDF', '2025-Present', 'Published iOS PDF utility app on the Apple App Store.'],
            ['Full Stack Developer \u2014 nichetraffickit.com', '2025-Present', 'Built with Next.js, TypeScript, Vibe Coding & Go.'],
            ['Mobile App Developer \u2014 aiinfluencergenerator.app', '2024-Present', 'Cross-platform Flutter apps. AI influencer tools.'],
            ['AI Full Stack Developer \u2014 Freelance', '2024-Present', 'AI web apps for intl. clients. LLM, RAG, automation.'],
            ['Founder \u2014 Fluttydev', '2020-Present', 'Managing team of 20+ in web, mobile & blockchain.'],
        ].forEach(([title, period, desc]) => {
            w(title, 10, { bold: true, space: 0 });
            w(period, 8, { italic: true, color: [150, 150, 150], space: 1 });
            w(desc, 9, { space: 3 });
            sep(2);
        });
        sep(2);

        // ----- PROJECTS with thumbnails -----
        w('FEATURED PROJECTS', 13, { bold: true, color: [108, 92, 231], space: 6 });

        const projs = [
            { name: 'OnePDF: Everything PDF', img: proj1Img, desc: 'iOS PDF utility - scan, convert, merge, split, compress & sign.' },
            { name: 'Askly', img: proj2Img, desc: 'AI-powered Q&A platform.' },
        ];

        projs.forEach(p => {
            if (p.img && y > 210) { doc.addPage(); y = m; }

            if (p.img) {
                try {
                    const imgH = 18;
                    const imgW = 18;
                    doc.addImage(p.img, 'JPEG', m, y, imgW, imgH);
                    doc.setDrawColor(200, 200, 200);
                    doc.rect(m, y, imgW, imgH);
                } catch (e) { /* skip image if fails */ }
            }

            const textX = p.img ? m + 22 : m;
            const prevW = maxW;
            // temporarily reduce max text width for project with image
            if (p.img) {
                const lines = doc.splitTextToSize(String(p.name), 148);
                doc.setFontSize(10);
                doc.setFont('Helvetica', 'bold');
                doc.setTextColor(50, 50, 50);
                doc.text(lines, textX, y + 4);
                const lines2 = doc.splitTextToSize(String(p.desc), 148);
                doc.setFontSize(8.5);
                doc.setFont('Helvetica', 'normal');
                doc.setTextColor(100, 100, 100);
                doc.text(lines2, textX, y + 11);
                y += Math.max(imgH || 18, lines.length * 3.5 + lines2.length * 3 + 4) + 6;
            } else {
                w(p.name, 10, { bold: true, space: 1 });
                w(p.desc, 8.5, { color: [100, 100, 100], space: 3 });
            }
        });
        sep(4);

        // ----- UPWORK -----
        w('UPWORK HIGHLIGHTS', 13, { bold: true, color: [108, 92, 231], space: 4 });
        w('100% Job Success | Top Rated | $10K+ Earned | 48 Jobs | 398 Hours', 10, { space: 1 });
        w('Avg Response: 0-4 hours | Rate: $25.00/hr | 30+ hrs/week', 10, { space: 3 });
        sep(4);

        // ----- EDUCATION -----
        w('EDUCATION', 13, { bold: true, color: [108, 92, 231], space: 4 });
        w("Master's in Computer Science \u2014 UST Bannu (2021-2022)", 10, { space: 1 });
        w('B.Eng Mechatronics Engineering \u2014 UET Peshawar (2017-2020)', 10, { space: 3 });
        sep(4);

        // ----- TESTIMONIALS -----
        w('CLIENT TESTIMONIALS', 13, { bold: true, color: [108, 92, 231], space: 4 });
        [
            '\u201CWonderful resource, very helpful and self starter. Outperformed my requirements.\u201D',
            '\u201CUmer was excellent to work with and extremely diligent.\u201D',
            '\u201CUmer simply put just gets it. I highly recommend him.\u201D',
            '\u201CAlways a pleasure. Delivers on projects very fast.\u201D',
            '\u201CSecond successful job - will work together again.\u201D',
        ].forEach(r => { w(r, 9, { italic: true, color: [100, 100, 100], space: 2 }); });

        doc.save('Umer_Waqas_Resume.pdf');

        if (btn) { btn.innerHTML = '<i class="fas fa-file-pdf"></i> Resume PDF'; btn.disabled = false; }
    }).catch(() => {
        // Fallback: generate without images
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF('p', 'mm', 'a4');
        doc.text('Error loading images. Please try again.', 20, 20);
        doc.save('Umer_Waqas_Resume.pdf');
        if (btn) { btn.innerHTML = '<i class="fas fa-file-pdf"></i> Resume PDF'; btn.disabled = false; }
});
}

function loadImage(src) {
    return new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = function() {
            try {
                const canvas = document.createElement('canvas');
                // Resize to max 200px width for PDF
                const maxW = 200;
                const scale = Math.min(1, maxW / img.width);
                canvas.width = img.width * scale;
                canvas.height = img.height * scale;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                resolve(canvas.toDataURL('image/jpeg', 0.7));
            } catch(e) { resolve(null); }
        };
        img.onerror = function() { resolve(null); };
        img.src = src;
    });
}

// ===== Collapsible Timeline =====
function toggleTimeline(header) {
    const item = header.closest('.timeline-item');
    const wasActive = item.classList.contains('active');

    // Close all other items
    document.querySelectorAll('.timeline-item.active').forEach(el => {
        if (el !== item) el.classList.remove('active');
    });

    // Toggle clicked one
    item.classList.toggle('active', !wasActive);
}

