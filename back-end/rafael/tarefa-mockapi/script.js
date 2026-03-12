const d = document;
const API_URL = 'https://69a8bfff32e2d46caf445da9.mockapi.io/';
const productsContainer = d.querySelector('#produtos');
const productInfoForm = d.querySelector('#post-product');
const getProductForm = d.querySelector('#get-product');
const getAllProductsButton = d.querySelector('#get-all-products');

addEventListener('submit', (e) => e.preventDefault());

productInfoForm.addEventListener('submit', async (e) => {
    productDetails = getProductDetailsHTML();
    await postProduct(productDetails);
    renderCards();
});

getProductForm.addEventListener('submit', async (e) => {
    const productId = d.querySelector('#product-id-input').value;
    const product = await getProductById(productId);
    console.log(product);
    renderOnlyOneProduct(product);
});

getAllProductsButton.addEventListener('click', (e) => {
    renderCards();
});

async function getProducts() {
    res = await fetch(`${API_URL}/produtos`);
    return res.json();
};

async function renderCards() {
    productsContainer.innerHTML = ``;
    let cardsHTML = ``;
    const products = await getProducts();

    products.forEach(product => {
        cardsHTML += makeProductCardHTML(product);
    });

    productsContainer.innerHTML = cardsHTML;
};

function makeProductCardHTML(product) {
    cardHTML = `
        <div class="product-card">

            <div class="product-img-container">
                <img class="product-img" src="${product.imagem}" alt="coisa estranha">
            </div>

            <div class="product-details">

                <h3 class="product-name">
                    ${product.nome}
                </h3>

                <h5 class="product-description">
                    ${product.descricao}
                </h5>

                <h2 class="product-price">
                    R$${product.preco}
                </h2>

            </div>

        </div>
    `;

    return cardHTML;
};

function getProductDetailsHTML() {
    const name = d.querySelector('#product-name-input').value; 
    const image = d.querySelector('#product-img-input').value;
    const description = d.querySelector('#product-description-input').value;
    const category = d.querySelector('#product-category-input').value;
    const price = parseInt(d.querySelector('#product-price-input').value);

    const productDetails = {
        nome: name,
        imagem: image,
        descricao: description,
        categoria: category,
        preco: price
    };

    return productDetails;
};

async function postProduct(productDetails) {
    const body = JSON.stringify(productDetails);
    
    await fetch(`${API_URL}/produtos`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body
    });

    console.log(`produto (${productDetails.nome}) postado`);
};

async function getProductById(id) {
    product = await fetch(`${API_URL}/produtos/${id}`);

    return product.json();
};

function renderOnlyOneProduct(product) {
    const cardHTML = makeProductCardHTML(product);
    productsContainer.innerHTML = cardHTML;
}

renderCards(); 