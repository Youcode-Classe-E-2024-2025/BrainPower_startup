// Chargement des produits depuis localStorage
let products = [];

["Tshirt", "Accessoire", "movie"].forEach(category => {
    const storedProducts = JSON.parse(localStorage.getItem(category)) || [];

    // Traitement des produits par catégorie
    products = products.concat(storedProducts.map(item => {
        // Pour les films, utiliser 'image' et ne pas vérifier 'images'
        if (category === "movie") {
            return {
                id: item.id,
                title: item.name,
                price: parseFloat(item.price || 0),
                rating: parseFloat(item.rating || 0), // Si rating existe
                image: item.image ? item.image.replace(".", "") : "placeholder.jpg",  // Utiliser 'image' pour les films
            };
        }

        // Pour Tshirt et Accessoire, utiliser 'images' comme tableau
        return {
            id: item.id,
            title: item.name,
            price: parseFloat(item.price || 0),
            rating: parseFloat(item.rating || 0), // Si rating existe
            image: item.images && item.images.length > 0 
                ? item.images[0].replace(".", "") // Utiliser la première image
                : "placeholder.jpg",
        };
    }));
});

// Variables de pagination
const itemsPerPage = 16;
let currentPage = 1;
let filteredProducts = [...products];

// Fonction d'affichage des produits
function displayProducts(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const productsToDisplay = filteredProducts.slice(start, end);
    const productList = document.getElementById("productList");
    productList.innerHTML = "";

    productsToDisplay.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("p-4");
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}"  class="w-full h-64 object-contain rounded-md mb-4 product-card">
            <p class="text-2xl font-semibold mb-2">${product.title}</p>
            <div class="flex">
                <p class="text-4xl text-red font-bold text-yellow-500">${product.price.toFixed(2)} DH</p>
                <p class="text-lg line-through">${(product.price + 10).toFixed(2)} DH</p>
            </div>
            <div class="flex items-center justify-between">
                <p class="text-2xl">
                    <i class="bi bi-star-fill text-yellow-500"></i>
                    <i class="bi bi-star-fill text-yellow-500"></i>
                    <i class="bi bi-star-fill text-yellow-500"></i>
                    <i class="bi bi-star-fill text-yellow-500"></i>
                    <i class="bi bi-star-half text-yellow-500"></i>
                    9.5
                </p>
                <button class="add-to-cart">
                    <i class="bi bi-cart-plus-fill text-4xl mr-5"></i>
                </button>
            </div>
        `;
        if (product.image && product.image.includes("movie")) { // Assure-toi que l'attribut image indique bien "movie"
            const productImage = productCard.querySelector(".product-card");
            productImage.addEventListener("click", () => {
                window.location.href = `./DetailMovies/detailMovie.html?id=${product.id}`;
            });
        } else {
            const productImage = productCard.querySelector(".product-card");
            productImage.addEventListener("click", (event) => {
                const productId = event.target.dataset.id;
                window.location.href = `product_detailes.html?id=${productId}`; // Redirect to product details page with product id
            });
        }
        const addToCartButton = productCard.querySelector(".add-to-cart");
        addToCartButton.addEventListener("click", (event) => {
        event.stopPropagation();

         // Créer un objet produit avec les bonnes propriétés
        const cartProduct = {
        id: product.id,
        name: product.title,
        unitPrice: product.price, // prix de l'article
        quantity: 1, // initialiser à 1 par défaut
        image: product.image
    };

    // Récupérer le panier existant dans le localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Ajouter ou mettre à jour le produit dans le panier
    const existingProductIndex = cart.findIndex(item => item.id === cartProduct.id);
    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += 1; // Si le produit existe déjà, augmenter la quantité
    } else {
        cart.push(cartProduct); // Sinon, ajouter le produit
    }

    // Sauvegarder à nouveau dans le localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Afficher une alerte
    alert(`${product.title} a été ajouté au panier !`);
});

        productList.appendChild(productCard);
    });

    document.getElementById("pageNum").textContent = page;
    document.getElementById("prevPage").disabled = page === 1;
    document.getElementById("nextPage").disabled = end >= filteredProducts.length;
}

// Gestion de la pagination
document.getElementById("prevPage").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        displayProducts(currentPage);
    }
});

document.getElementById("nextPage").addEventListener("click", () => {
    if (currentPage * itemsPerPage < filteredProducts.length) {
        currentPage++;
        displayProducts(currentPage);
    }
});

// Gestion de la recherche
document.getElementById("searchInput").addEventListener("input", (event) => {
    const query = event.target.value.toLowerCase();
    filteredProducts = products.filter(product => product.title.toLowerCase().includes(query));
    currentPage = 1;
    displayProducts(currentPage);
});

// Gestion du tri par prix
let sortAscending = true;

document.getElementById("sortPriceBtn").addEventListener("click", () => {
    const priceSortOptions = document.getElementById("priceSortOptions");
    priceSortOptions.classList.toggle("hidden");
});

// Tri croissant
document.getElementById("sortAsc").addEventListener("click", () => {
    filteredProducts.sort((a, b) => a.price - b.price);
    sortAscending = true;
    displayProducts(currentPage);
    document.getElementById("priceSortOptions").classList.add("hidden");
});

// Tri décroissant
document.getElementById("sortDesc").addEventListener("click", () => {
    filteredProducts.sort((a, b) => b.price - a.price);
    sortAscending = false;
    displayProducts(currentPage);
    document.getElementById("priceSortOptions").classList.add("hidden");
});

// Fonction pour récupérer le panier du localStorage
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// Fonction pour enregistrer le panier dans le localStorage
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Fonction pour ajouter un produit au panier
function addToCart(product) {
    let cart = getCart();
    const existingProduct = cart.find(item => item.id === product.id);
    
    if (existingProduct) {
        // Si le produit est déjà dans le panier, on augmente la quantité
        existingProduct.quantity += 1;
    } else {
        // Sinon on l'ajoute avec quantité 1
        cart.push({...product, quantity: 1});
    }

    saveCart(cart);
    alert(`${product.title} ajouté au panier !`);
}

// Gestion des événements sur le bouton "Ajouter au panier"
document.querySelectorAll('.bi-cart-plus-fill').forEach(button => {
    button.addEventListener('click', (event) => {
        const productId = event.target.closest('.product').id; // Récupère l'id du produit parent
        const product = products.find(p => p.id === productId); // Trouve le produit dans la liste

        addToCart(product); // Ajoute au panier
    });
});


// Affichage initial
displayProducts(currentPage);
