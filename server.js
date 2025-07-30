const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.static('public'));

app.post('/api/products', upload.single('productImage'), (req, res) => {
    const product = {
        name: req.body.productName,
        description: req.body.productDescription,
        ingredients: req.body['ingredients[]'],
        image: req.file.path
    };
    // Aqui você pode salvar o produto no banco de dados
    console.log(product);
    res.json({ message: 'Produto cadastrado com sucesso!' });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
