console.log('Script carregado!');

// Seleciona os elementos do formulário e outros componentes
const ajudaContainer = document.querySelector('.ajuda-container');
const botaoAjuda = document.querySelector('.botao-ajuda');
const mensagemSucesso = document.getElementById('mensagem-sucesso');
const nomeInput = document.querySelector('input[placeholder="Digite seu nome completo"]');
const erroNome = document.getElementById('erro-nome');
const emailInput = document.querySelector('input[placeholder="Digite seu email"]');
const mensagemInput = document.getElementById('mensagem');
const limparBtn = document.getElementById('limpar');
const formAjuda = document.getElementById('form-ajuda');

// Função para validar os campos obrigatórios
function validarFormulario() {
    let valido = true;

    // Verifica se o nome está preenchido
    if (nomeInput.value.trim() === '') {
        erroNome.style.display = 'block';
        valido = false;
    } else {
        erroNome.style.display = 'none';
    }

    // Verifica se o email está preenchido
    if (emailInput.value.trim() === '') {
        valido = false;
        alert('Por favor, preencha o campo de email!');
    }

    // Verifica se a mensagem está preenchida
    if (mensagemInput.value.trim() === '') {
        valido = false;
        alert('Por favor, preencha a mensagem!');
    }

    return valido;
}

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

// Limpa apenas o campo de mensagem
limparBtn.addEventListener('click', function() {
    mensagemInput.value = '';
});

// Adiciona o evento de clique ao botão de ajuda para mostrar ou esconder o container
botaoAjuda.addEventListener('click', () => {
    ajudaContainer.classList.toggle('visible');
});

// Previne o envio do formulário e valida antes
formAjuda.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Valida o formulário antes de enviar
    if (validarFormulario()) {
        // Cria um objeto com os dados do formulário
        const dadosFormulario = {
            from_name: nomeInput.value,
            from_email: emailInput.value,
            mensagem: mensagemInput.value
        };

        // Envia a mensagem para você usando EmailJS
        emailjs.send('service_wzxl1mrl', 'template_ijlgfxx', dadosFormulario)
            .then(function(response) {
                console.log('Mensagem enviada com sucesso', response);
                mensagemSucesso.textContent = 'Mensagem enviada com sucesso';
                mensagemSucesso.style.display = 'block'; // Exibe a mensagem de sucesso
                mensagemSucesso.style.color = 'green';
                mensagemSucesso.style.marginTop = '10px';
                formAjuda.reset(); // Limpa o formulário após o envio
            }, function(error) {
                console.log('Erro ao enviar a mensagem', error);
                mensagemSucesso.textContent = 'Ocorreu um erro ao enviar a mensagem';
                mensagemSucesso.style.display = 'block';
                mensagemSucesso.style.color = 'red';
            });
    }
});
