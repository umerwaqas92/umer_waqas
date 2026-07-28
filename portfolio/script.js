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
const titles = ['AI Developer', 'AI Full Stack Developer', 'Flutter Developer', 'Claude Code Expert'];
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
// ===== Project Category Filter =====
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;

        projectCards.forEach(card => {
            const cats = card.dataset.category || '';
            if (filter === 'all' || cats.split(' ').includes(filter)) {
                card.style.display = 'inline-block';
                setTimeout(() => card.style.opacity = '1', 10);
            } else {
                card.style.opacity = '0';
                setTimeout(() => card.style.display = 'none', 200);
            }
        });
    });
});

// ===== Collapsible Timeline =====
async function downloadResume() {
    const btn = document.querySelector('.btn-outline');
    if (btn) { btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...'; btn.disabled = true; }

    // Helper: load an image URL to base64 data URL
    function loadImage(url) {
        return new Promise((resolve) => {
            const img = new Image();
            img.crossOrigin = 'Anonymous';
            img.onload = () => {
                try {
                    const canvas = document.createElement('canvas');
                    canvas.width = img.naturalWidth;
                    canvas.height = img.naturalHeight;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0);
                    resolve(canvas.toDataURL('image/jpeg', 0.85));
                } catch (e) { resolve(null); }
            };
            img.onerror = () => resolve(null);
            img.src = url;
        });
    }

    setTimeout(async () => {
        try {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF('p', 'mm', 'a4');
            const m = 20, maxW = 170;
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

            // Header bar with optional profile photo
            doc.setFillColor(108, 92, 231);
            doc.rect(0, 0, 210, 40, 'F');

            // Try to add profile photo to the header
            const photoData = await loadImage('umer.jpg');
            if (photoData) {
                // Draw a white circular frame
                doc.setFillColor(255, 255, 255);
                doc.circle(175, 20, 14, 'F');
                // Add photo inside (will be square, frame masks the edges visually)
                doc.addImage(photoData, 'JPEG', 161, 6, 28, 28);
                // Thin border ring
                doc.setDrawColor(255, 255, 255);
                doc.setLineWidth(1.5);
                doc.circle(175, 20, 13, 'S');
            }

            doc.setTextColor(255, 255, 255);
            doc.setFontSize(22);
            doc.setFont('Helvetica', 'bold');
            doc.text('Umer Waqas', m, 16);
            doc.setFontSize(11);
            doc.setFont('Helvetica', 'normal');
            doc.text('AI Full Stack Developer', m, 25);
            doc.setFontSize(7);
            doc.text('umerwaqas.dev | github.com/umerwaqas92 | linkedin.com/in/umerwaqas92', m, 33);
            doc.text('upwork.com/freelancers/~010219e25749223694', m, 37);
            y = 48;

            w('PROFESSIONAL SUMMARY', 13, { bold: true, color: [108, 92, 231], space: 4 });
            w('AI Full Stack Developer with 6+ years delivering end-to-end solutions with React, Next.js, Node.js, Python, Flutter, and AI. Top Rated on Upwork with 100% Job Success across 48+ projects. Specializes in LLM integration, RAG systems, and AI-assisted development to ship 10x faster.', 10, { space: 3 });
            sep(4);

            w('CORE SKILLS', 13, { bold: true, color: [108, 92, 231], space: 4 });
            [['AI/ML:','OpenAI, Claude, LangChain, Vector DBs, RAG, Fine-tuning'],['Frontend:','Next.js, React, TypeScript, Tailwind CSS'],['Backend:','Node.js, Python, Flask, FastAPI, REST APIs'],['Mobile:','Flutter, Dart, iOS & Android'],['Cloud:','AWS, GCP, Cloudflare, Docker, VPS'],['AI-Assisted Dev:','Claude Code, Cursor AI, rapid prototyping']].forEach(([c,s])=>{w(c+' '+s,9,{space:2});});
            sep(4);

            w('WORK EXPERIENCE', 13, { bold: true, color: [108, 92, 231], space: 4 });
            [['Founder & AI Full Stack Developer - Fluttydev (2020-Present)','Leading a team of 20+ delivering AI-powered web, mobile & blockchain solutions. Products: OnePDF (iOS PDF utility on App Store), nichetraffickit.com, AI Influencer Generator. Reduced delivery time by 60% through AI-assisted workflows.'],
             ['AI Full Stack Developer - Upwork Freelance (2022-Present)','Top Rated \u00b7 100% Job Success \u00b7 48+ projects. Shipped AI MVPs in under 5 days for international clients. Automated business workflows saving clients 10+ hours/week. $10K+ earned on Upwork platform alone, plus direct client work.'],
             ['Full Stack Developer - Tech Solutions Inc. (2023-2024)','Led migration from legacy systems to microservices architecture, reducing page load time by 40%. Developed and maintained multiple client-facing web applications.'],
             ['Junior Developer - Web Agency (2022-2023)','Built 10+ responsive websites for diverse clients across full project lifecycle.']].forEach(([t,d])=>{w(t,9,{bold:true,space:1});w(d,9,{color:[100,100,100],space:3});sep(2);});
            sep(2);

            w('FEATURED PROJECTS', 13, { bold: true, color: [108, 92, 231], space: 4 });
            [['OnePDF: Everything PDF','iOS PDF utility - scan, convert, merge, split, compress & sign. Published on Apple App Store.'],['nichetraffickit.com','Traffic solutions platform built with Next.js, TypeScript, Go & AI-assisted development.'],['aiinfluencergenerator.app','AI-powered influencer content generation for iOS/Android built with Flutter.']].forEach(([n,d])=>{w(n,10,{bold:true,space:1});w(d,9,{color:[100,100,100],space:3});});
            sep(4);

            w('UPWORK HIGHLIGHTS', 13, { bold: true, color: [108, 92, 231], space: 4 });
            w('100% Job Success | Top Rated | 48 Jobs | 398 Hours | $10K+ on Upwork plus direct clients', 10, { space: 1 });
            w('Avg Response: 0-4 hours | Rate: $25.00/hr | 30+ hrs/week availability', 10, { space: 3 });
            sep(4);

            w('EDUCATION', 13, { bold: true, color: [108, 92, 231], space: 4 });
            w("Master's in CS - UST Bannu (2021-2022)", 10, { space: 1 });
            w('B.Eng Mechatronics - UET Peshawar (2017-2020)', 10, { space: 3 });

            doc.save('Umer_Waqas_Resume.pdf');
        } catch(e) { console.error('PDF error:', e); }
        if (btn) { btn.innerHTML = '<i class="fas fa-file-pdf"></i> Resume PDF'; btn.disabled = false; }
    }, 150);
}
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

