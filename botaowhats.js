// botaowhats.js
document.addEventListener('DOMContentLoaded', function() {
    // Criar o botão do WhatsApp
    const whatsappButton = document.createElement('div');
    whatsappButton.className = 'whatsapp-float';
    whatsappButton.innerHTML = '<i class="fab fa-whatsapp"></i>';
    
    // Adicionar o botão ao corpo do documento
    document.body.appendChild(whatsappButton);
    
    // Adicionar evento de clique para abrir o WhatsApp
    whatsappButton.addEventListener('click', function() {
        // Número da Amor de Maçã & Cia
        const phoneNumber = '5511994222377';
        
        // Mensagem pré-definida (opcional)
        const message = 'Olá! Gostaria de mais informações sobre as maçãs do amor.';
        
        // Codificar a mensagem para URL
        const encodedMessage = encodeURIComponent(message);
        
        // Criar o link do WhatsApp
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        // Abrir o WhatsApp em uma nova janela/aba
        window.open(whatsappURL, '_blank');
    });
    
    // Adicionar efeito de redução de pulsação quando o usuário rolar para baixo
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 300) {
            // Usuário está rolando para baixo e passou do topo
            whatsappButton.style.animation = 'pulse 3s infinite'; // Pulsação mais lenta
            whatsappButton.style.opacity = '0.9';
        } else {
            // Usuário está no topo ou rolando para cima
            whatsappButton.style.animation = 'pulse 2s infinite'; // Pulsação normal
            whatsappButton.style.opacity = '1';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Esconder o botão quando o usuário chegar no footer
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                whatsappButton.style.opacity = '0.5';
                whatsappButton.style.transform = 'scale(0.9)';
            } else {
                whatsappButton.style.opacity = '1';
                whatsappButton.style.transform = 'scale(1)';
            }
        });
    }, { threshold: 0.1 });
    
    // Observar o footer
    const footer = document.querySelector('footer');
    if (footer) {
        observer.observe(footer);
    }
});