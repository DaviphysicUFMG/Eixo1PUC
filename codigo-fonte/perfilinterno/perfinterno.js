// Função para salvar as alterações do perfil
function salvarAlteracoes() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    // Você pode armazenar no localStorage, mas para persistir a informação em um servidor,
    // você teria que integrar com uma API backend.
    localStorage.setItem('nome', nome);
    localStorage.setItem('email', email);
    localStorage.setItem('telefone', telefone);

    alert('Alterações salvas com sucesso!');
}

// Função para carregar os dados salvos ao abrir a página
function carregarPerfil() {
    const nomeSalvo = localStorage.getItem('nome');
    const emailSalvo = localStorage.getItem('email');
    const telefoneSalvo = localStorage.getItem('telefone');

    if (nomeSalvo) {
        document.getElementById('nome').value = nomeSalvo;
    }
    if (emailSalvo) {
        document.getElementById('email').value = emailSalvo;
    }
    if (telefoneSalvo) {
        document.getElementById('telefone').value = telefoneSalvo;
    }
}

// Carregar perfil ao abrir a página
window.onload = carregarPerfil;
