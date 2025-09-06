// Animação de scroll suave para os links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Animação de revelação ao scroll
function revealOnScroll() {
    const elements = document.querySelectorAll('.about, .products, .community, .testimonials, .contact');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }
    });
}

// Inicializar estilos para animação
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.about, .products, .community, .testimonials, .contact');
    
    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
        section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    });
    
    window.addEventListener('scroll', revealOnScroll);
    // Executar uma vez ao carregar para verificar elementos já visíveis
    revealOnScroll();
});

// Efeito de digitação no título principal
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Iniciar efeito de digitação quando a página carregar
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText);
    }
});

// script.js - Adicione esta função
function detectTouch() {
    if ('ontouchstart' in window || navigator.maxTouchPoints) {
        document.body.classList.add('touch-device');
    } else {
        document.body.classList.add('no-touch-device');
    }
}

// Execute a detecção de toque quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    detectTouch();
    
    // Resto do código existente...
});