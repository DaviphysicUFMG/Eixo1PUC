// Array para armazenar os produtos favoritos
const produtosFavoritos = [
    { id: 1, nome: 'Produto 1', imagem: 'https://via.placeholder.com/150?text=Produto+1' },
    { id: 2, nome: 'Produto 2', imagem: 'https://via.placeholder.com/150?text=Produto+2' },
    { id: 3, nome: 'Produto 3', imagem: 'https://via.placeholder.com/150?text=Produto+3' },
    { id: 4, nome: 'Produto 4', imagem: 'https://via.placeholder.com/150?text=Produto+4' },
    { id: 5, nome: 'Produto 5', imagem: 'https://via.placeholder.com/150?text=Produto+5' },
];

// Seleciona o contêiner para os produtos
const produtosContainer = document.getElementById('produtosContainer');

// Função para renderizar os produtos favoritos
function renderizarProdutos() {
    produtosContainer.innerHTML = ''; // Limpa o contêiner antes de renderizar

    produtosFavoritos.forEach(produto => {
        const produtoContainer = document.createElement('div');
        produtoContainer.classList.add('produto-container');
        produtoContainer.setAttribute('data-id', produto.id);
        produtoContainer.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}" class="produto-imagem">
            <h3>${produto.nome}</h3>
            <button class="desfavoritar-btn">Desfavoritar</button>
        `;
        produtosContainer.appendChild(produtoContainer);
    });

    // Adiciona o evento de desfavoritar aos botões após renderizar
    document.querySelectorAll('.desfavoritar-btn').forEach(button => {
        button.addEventListener('click', function() {
            const produtoContainer = this.closest('.produto-container');
            produtoContainer.classList.add('remover'); // Adiciona a classe para animação

            setTimeout(() => {
                produtoContainer.remove(); // Remove o elemento do DOM após a animação
                // Remove o produto do array
                const produtoId = parseInt(produtoContainer.getAttribute('data-id'));
                const index = produtosFavoritos.findIndex(produto => produto.id === produtoId);
                if (index > -1) {
                    produtosFavoritos.splice(index, 1); // Remove o produto do array
                }
            }, 300); // Tempo igual à duração da animação
        });
    });
}

// Renderiza os produtos ao carregar a página
renderizarProdutos();

// Evento para o botão "Adicionar Produto"
document.getElementById('addProdutoBtn').addEventListener('click', () => {
    const nome = prompt('Digite o nome do produto:');
    const imagem = prompt('Digite a URL da imagem do produto:');
    
    if (nome && imagem) {
        const novoProduto = { id: produtosFavoritos.length + 1, nome, imagem };
        produtosFavoritos.push(novoProduto);
        renderizarProdutos(); // Renderiza a lista atualizada de produtos
    }
});
