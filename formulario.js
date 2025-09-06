// formulario.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('whatsappForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obter valores do formulário
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const address = document.getElementById('address').value.trim();
            const notes = document.getElementById('notes').value.trim();
            
            // Validar telefone (remover caracteres não numéricos)
            const cleanedPhone = phone.replace(/\D/g, '');
            
            // Validar se todos os campos estão preenchidos
            if (!name || !cleanedPhone || !address || !notes) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }
            
            // Criar mensagem para WhatsApp
            const message = `Olá, Amor de Maçã & Cia! Gostaria de fazer um pedido/encomenda.%0A%0A*Nome:* ${name}%0A*Telefone:* ${phone}%0A*Endereço:* ${address}%0A*Observações:* ${notes}`;
            
            // Número do WhatsApp (substitua pelo número real se necessário)
            const whatsappNumber = '5511994222377';
            
            // Criar URL do WhatsApp
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
            
            // Abrir WhatsApp em uma nova janela/aba
            window.open(whatsappURL, '_blank');
            
            // Limpar formulário após envio
            form.reset();
            
            // Feedback para o usuário
            alert('Obrigada pelo seu contato! Você será redirecionada para o WhatsApp para finalizar o pedido.');
        });
    }
    
    // Máscara para o telefone
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length > 11) {
                value = value.slice(0, 11);
            }
            
            // Aplicar máscara: (11) 99999-9999
            if (value.length > 10) {
                value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
            } else if (value.length > 6) {
                value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
            } else if (value.length > 2) {
                value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
            } else if (value.length > 0) {
                value = value.replace(/(\d{0,2})/, '($1');
            }
            
            e.target.value = value;
        });
    }
});