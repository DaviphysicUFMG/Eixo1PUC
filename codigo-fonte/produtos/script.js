document.getElementById('addIngredient').addEventListener('click', function() {
    const container = document.getElementById('ingredientsContainer');
    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'ingredients[]';
    input.required = true;
    container.appendChild(input);
});

document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    fetch('/api/products', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert('Produto cadastrado com sucesso!');
        this.reset();
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao cadastrar produto.');
    });
});
