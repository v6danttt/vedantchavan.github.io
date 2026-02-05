// ========== 3D Mouse Tracking Effect ==========
document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    const rotateX = (clientY - centerY) / 20;
    const rotateY = (clientX - centerX) / 20;
    
    // Apply to project cards
    document.querySelectorAll('.project-card').forEach(card => {
        const rect = card.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;
        
        const distX = clientX - cardCenterX;
        const distY = clientY - cardCenterY;
        const distance = Math.sqrt(distX * distX + distY * distY);
        
        if (distance < 200) {
            const rotX = (distY / 200) * 5;
            const rotY = (distX / 200) * 5;
            card.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(20px)`;
            
            // Update light position
            const mouseX = ((clientX - rect.left) / rect.width) * 100;
            const mouseY = ((clientY - rect.top) / rect.height) * 100;
            card.style.setProperty('--mouse-x', `${mouseX}%`);
            card.style.setProperty('--mouse-y', `${mouseY}%`);
        } else {
            card.style.transform = '';
        }
    });
    
    // Apply to cert cards
    document.querySelectorAll('.cert-card').forEach(card => {
        const rect = card.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;
        
        const distX = clientX - cardCenterX;
        const distY = clientY - cardCenterY;
        const distance = Math.sqrt(distX * distX + distY * distY);
        
        if (distance < 200) {
            const rotX = (distY / 200) * 8;
            const rotY = (distX / 200) * 8;
            card.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.05)`;
        } else {
            card.style.transform = '';
        }
    });
});

// ========== 3D Mouse Leave Reset ==========
document.addEventListener('mouseleave', () => {
    document.querySelectorAll('.project-card, .cert-card').forEach(card => {
        card.style.transform = '';
    });
});

// ========== Smooth scrolling for navigation links ==========
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

// ========== Parallax Scrolling Effect ==========
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    // Parallax for hero image
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrollY * 0.3}px)`;
    }
    
    // Active navigation link on scroll
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.style.color = '#fff';
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = '#ff006e';
        }
    });
    
    // 3D Rotation effect on scroll
    const cards = document.querySelectorAll('.project-card, .cert-card');
    cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
            const scrollPercent = (window.innerHeight - rect.top) / window.innerHeight;
            const rotateZ = (scrollPercent - 0.5) * 5;
            card.style.transition = 'none';
            if (card.classList.contains('project-card')) {
                card.style.transform = `rotateZ(${rotateZ}deg) perspective(1000px)`;
            }
        }
    });
});

// ========== Form Submission with Animation ==========
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = '✓ Message Sent!';
    submitBtn.style.background = '#00ff00';
    submitBtn.style.boxShadow = '0 0 30px rgba(0, 255, 0, 0.6)';
    
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.background = '';
        submitBtn.style.boxShadow = '';
        this.reset();
    }, 2000);
});

// ========== Social Icons Click Handler ==========
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('click', function() {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = '';
        }, 10);
        alert('Social media link - Configure with your actual profile URLs');
    });
});

// ========== Floating Spheres Background ==========
function createFloatingSpheres() {
    const container = document.querySelector('.animated-bg');
    if (!container) return;
    
    const sphereCount = 5;
    for (let i = 0; i < sphereCount; i++) {
        const sphere = document.createElement('div');
        sphere.className = 'floating-sphere';
        
        const size = Math.random() * 300 + 100;
        const delay = Math.random() * 15;
        const duration = Math.random() * 10 + 15;
        
        sphere.style.width = size + 'px';
        sphere.style.height = size + 'px';
        sphere.style.left = Math.random() * 100 + '%';
        sphere.style.top = Math.random() * 100 + '%';
        sphere.style.animationDelay = delay + 's';
        sphere.style.animationDuration = duration + 's';
        
        container.appendChild(sphere);
    }
}

// ========== Initialize on Page Load ==========
window.addEventListener('DOMContentLoaded', () => {
    createFloatingSpheres();
    
    // Add 3D depth to section titles
    document.querySelectorAll('.section-title').forEach((title, index) => {
        title.style.animation = `slideInDown ${0.8 + index * 0.2}s ease-out`;
    });
});
