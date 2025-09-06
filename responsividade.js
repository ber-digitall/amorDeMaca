// responsive.js
document.addEventListener('DOMContentLoaded', function() {
    // Ajustar altura do hero em dispositivos móveis
    function adjustHeroHeight() {
        const hero = document.querySelector('.hero');
        if (hero && window.innerWidth < 768) {
            hero.style.minHeight = window.innerHeight + 'px';
        }
    }
    
    // Ajustar layout com base no tamanho da tela
    function handleLayoutChanges() {
        const productsGrid = document.querySelector('.products-grid');
        
        if (productsGrid && window.innerWidth < 576) {
            productsGrid.style.gridTemplateColumns = '1fr';
        }
    }
    
    // Executar funções no carregamento e no redimensionamento
    adjustHeroHeight();
    handleLayoutChanges();
    
    window.addEventListener('resize', function() {
        adjustHeroHeight();
        handleLayoutChanges();
    });
    
    // Melhorar acessibilidade em dispositivos touch
    if ('ontouchstart' in window) {
        document.body.classList.add('touch');
        
        // Aumentar área de toque para botões em dispositivos móveis
        const buttons = document.querySelectorAll('button, .btn, .social-link');
        buttons.forEach(button => {
            button.style.minHeight = '44px';
            button.style.minWidth = '44px';
        });
    }
});