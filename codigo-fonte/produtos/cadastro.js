const form = document.getElementById('productForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const ingredients = document.getElementById('ingredients').value;

    const product = { name, description, ingredients };

    await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    });

    alert('Produto cadastrado com sucesso!');
    form.reset();
});
