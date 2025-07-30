// Selecionando elementos
const productForm = document.getElementById("productForm");
const productNameInput = document.getElementById("productName");
const productDescriptionInput = document.getElementById("productDescription");
const productImageInput = document.getElementById("productImage");
const ingredientsContainer = document.getElementById("ingredientsContainer");
const addIngredientBtn = document.getElementById("addIngredientBtn");
const productList = document.getElementById("productList");

// Recupera produtos salvos ao carregar a página
document.addEventListener("DOMContentLoaded", loadProducts);

// Adiciona um novo campo para ingrediente
addIngredientBtn.addEventListener("click", () => {
    const newIngredientInput = document.createElement("input");
    newIngredientInput.type = "text";
    newIngredientInput.className = "ingredient";
    newIngredientInput.placeholder = "Digite um ingrediente";
    ingredientsContainer.appendChild(newIngredientInput);
});

// Salvar produto no LocalStorage
productForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Obter dados do formulário
    const productName = productNameInput.value.trim();
    const productDescription = productDescriptionInput.value.trim();
    const productImage = productImageInput.value.trim();
    const ingredients = Array.from(
        ingredientsContainer.querySelectorAll(".ingredient")
    )
        .map(input => input.value.trim())
        .filter(value => value !== "");

    if (!productName || !productDescription || !productImage || ingredients.length === 0) {
        alert("Preencha todos os campos!");
        return;
    }

    const newProduct = { 
        name: productName, 
        description: productDescription, 
        image: productImage, 
        ingredients 
    };

    // Salvar no LocalStorage
    const products = JSON.parse(localStorage.getItem("products")) || [];
    products.push(newProduct);
    localStorage.setItem("products", JSON.stringify(products));

    // Atualizar lista e limpar formulário
    renderProduct(newProduct);
    productForm.reset();
    ingredientsContainer.innerHTML = `<input type="text" class="ingredient" placeholder="Digite um ingrediente">`;
});

// Carregar produtos salvos
function loadProducts() {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    products.forEach(renderProduct);
}

// Renderizar um produto na lista
function render
