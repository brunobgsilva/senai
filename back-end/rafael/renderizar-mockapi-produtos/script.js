const d = document;
const API_URL = 'https://69a8bfff32e2d46caf445da9.mockapi.io/produtos';
const productsContainer = d.querySelector('#products-container');
const productInfoForm = d.querySelector('#post-product')

productInfoForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    productDetails = getProductDetailsHTML();
    await postProduct(productDetails);
    renderCards();
});

async function getProducts() {
    res = await fetch(API_URL);
    return res.json();
};

async function renderCards() {
    productsContainer.innerHTML = ``;
    let cardsHTML = ``;
    const products = await getProducts();

    products.forEach(product => {
        cardsHTML += `
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
    });

    productsContainer.innerHTML = cardsHTML;

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
    
    await fetch(API_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body
    });

    console.log(`produto (${productDetails.nome}) postado`);
};

renderCards();