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
            <img src="${product.image}" alt="${product.title}" class="w-full h-64 object-contain rounded-md mb-4">
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
                <button>
                    <i class="bi bi-cart-plus-fill text-4xl mr-5"></i>
                </button>
            </div>
        `;
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

// Affichage initial
displayProducts(currentPage);
