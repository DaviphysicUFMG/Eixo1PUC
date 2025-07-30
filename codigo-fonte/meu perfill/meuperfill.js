function alternarModoEscuro() {
    document.body.classList.toggle('dark-mode');
}

function curtirPost(curtirBtn) {
    const curtidas = curtirBtn.dataset.curtidas || 0;
    curtirBtn.dataset.curtidas = parseInt(curtidas) + 1;
    curtirBtn.textContent = `Curtir (${curtirBtn.dataset.curtidas})`;
}

function excluirPost(postId) {
    const post = document.getElementById(postId);
    post.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out";
    post.style.opacity = "0";
    post.style.transform = "scale(0.9)";
    setTimeout(() => post.remove(), 500); // Remove após a animação
}

function criarPost() {
    const mensagem = document.getElementById('mensagem').value;
    const imagem = document.getElementById('imagem-post').files[0];
    const postsContainer = document.getElementById('posts');

    const postDiv = document.createElement('div');
    postDiv.classList.add('post');

    // Botão de excluir
    const excluirBtn = document.createElement('button');
    excluirBtn.classList.add('excluir');
    excluirBtn.textContent = 'Excluir';
    excluirBtn.onclick = () => postDiv.remove();

    postDiv.appendChild(excluirBtn);

    if (imagem) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(imagem);
        img.style.maxWidth = '100%';
        img.style.borderRadius = '8px';
        postDiv.appendChild(img);
    }

    if (mensagem) {
        const p = document.createElement('p');
        p.textContent = mensagem;
        postDiv.appendChild(p);
    }

    // Adiciona interações
    const interacoesDiv = document.createElement('div');
    interacoesDiv.classList.add('interacoes');
    
    const curtirBtn = document.createElement('button');
    curtirBtn.classList.add('curtir');
    curtirBtn.textContent = 'Curtir';
    curtirBtn.dataset.curtidas = 0; // Inicializa o contador de curtidas
    curtirBtn.onclick = () => curtirPost(curtirBtn);
    
    const comentarBtn = document.createElement('button');
    comentarBtn.classList.add('comentar');
    comentarBtn.textContent = 'Comentar';
    comentarBtn.onclick = () => abrirComentarios(postDiv);

    interacoesDiv.appendChild(curtirBtn);
    interacoesDiv.appendChild(comentarBtn);

    postDiv.appendChild(interacoesDiv);

    // Contêiner de comentários
    const comentariosDiv = document.createElement('div');
    comentariosDiv.classList.add('comentarios');
    comentariosDiv.style.display = 'none';

    const textarea = document.createElement('textarea');
    textarea.placeholder = 'Escreva um comentário...';
    comentariosDiv.appendChild(textarea);

    const postarBtn = document.createElement('button');
    postarBtn.textContent = 'Postar';
    postarBtn.onclick = () => {
        const comentario = textarea.value.trim();
        if (comentario) {
            const comentarioP = document.createElement('p');
            comentarioP.textContent = comentario;
            comentariosDiv.appendChild(comentarioP);
            textarea.value = '';
        }
    };

    comentariosDiv.appendChild(postarBtn);
    postDiv.appendChild(comentariosDiv);

    postsContainer.prepend(postDiv); // Adiciona no topo
    document.getElementById('mensagem').value = '';
    document.getElementById('imagem-post').value = '';
}

// Função para abrir comentários
function abrirComentarios(postDiv) {
    const comentariosDiv = postDiv.querySelector('.comentarios');
    comentariosDiv.style.display = comentariosDiv.style.display === 'none' ? 'block' : 'none';
}
