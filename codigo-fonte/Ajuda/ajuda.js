// Seleciona o container de ajuda e o botão de ajuda
const ajudaContainer = document.querySelector('.ajuda-container');
const botaoAjuda = document.querySelector('.botao-ajuda');

// Adiciona o evento de clique ao botão de ajuda para mostrar ou esconder o container
botaoAjuda.addEventListener('click', () => {
    ajudaContainer.classList.toggle('visible');
});

// Seleciona os elementos do formulário
const nomeInput = document.querySelector('input[placeholder="Digite seu nome completo"]');
const erroNome = document.getElementById('erro-nome');
const limparBtn = document.getElementById('limpar');
const mensagemInput = document.getElementById('mensagem');
const enviarBtn = document.querySelector('button[type="submit"]'); // Seleciona o botão de enviar

// Valida o campo de nome e remove caracteres inválidos
nomeInput.addEventListener('input', function() {
    const nomeValido = /^[A-Za-zÀ-ÿ\s]+$/.test(nomeInput.value);

    if (!nomeValido) {
        erroNome.style.display = 'block';
        nomeInput.value = nomeInput.value.replace(/[^A-Za-zÀ-ÿ\s]/g, '');
    } else {
        erroNome.style.display = 'none';
    }
});

// Função para limpar apenas o campo de mensagem
limparBtn.addEventListener('click', function() {
    mensagemInput.value = ''; // Limpa o campo de mensagem
});

// Função para enviar a mensagem e mostrar a confirmação
enviarBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado
    // Aqui você pode adicionar lógica para enviar a mensagem, se necessário.

    // Cria um elemento para mostrar a mensagem de sucesso
    const mensagemSucesso = document.createElement('p');
    mensagemSucesso.textContent = 'Mensagem enviada com sucesso';
    mensagemSucesso.style.color = 'green'; // Altera a cor da mensagem para verde
    mensagemSucesso.style.marginTop = '10px'; // Adiciona uma margem superior
    ajudaContainer.appendChild(mensagemSucesso); // Adiciona a mensagem ao container de ajuda

    // Limpa os campos do formulário (opcional)
    nomeInput.value = '';
    mensagemInput.value = '';
});
