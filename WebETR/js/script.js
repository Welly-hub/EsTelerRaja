// Animasi Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animasi Counter
function animateCounters() {
    const counters = document.querySelectorAll('.number');
    const speed = 200;
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
        const increment = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(animateCounters, 1);
        } else {
            counter.innerText = target + '+';
        }
    });
}

// Trigger counter when section is in view
const aboutSection = document.querySelector('.about-section');
const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        animateCounters();
        observer.unobserve(aboutSection);
    }
}, { threshold: 0.5 });

observer.observe(aboutSection);

// Particle Animation for Hero Section
const fruitAnimation = document.querySelector('.fruit-animation');
const colors = ['#FF9800', '#4CAF50', '#8BC34A', '#FFC107'];

for (let i = 0; i < 15; i++) {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = Math.random() * 20 + 10 + 'px';
    particle.style.height = particle.style.width;
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    particle.style.borderRadius = '50%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.opacity = Math.random() * 0.5 + 0.3;
    
    const animationDuration = Math.random() * 5 + 3;
    const animationDelay = Math.random() * 3;
    
    particle.style.animation = `float ${animationDuration}s infinite ease-in-out ${animationDelay}s`;
    
    fruitAnimation.appendChild(particle);
}
// -----------------START Toggle Navigation -------------//
// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navList = document.querySelector('nav ul'); // Ubah target ke ul

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    menuToggle.innerHTML = navList.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close menu when clicking on a link
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});
// ----------------------------- END Toggle Navigation ----------------//

