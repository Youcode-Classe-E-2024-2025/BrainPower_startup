// Chargement des produits depuis localStorage
let products = [];
["Tshirt", "Accessoire", "movie"].forEach(category => {
    const storedProducts = JSON.parse(localStorage.getItem(category)) || [];
    products = products.concat(storedProducts.map(item => ({
        id: item.id,
        title: item.name,
        price: parseFloat(item.price || 0),
        rating: parseFloat(item.rating || 0), // Si rating existe
        image: item.images && item.images.length > 0 
        ? item.images[0].replace(".", "") 
        : "placeholder.jpg",
    })));
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
        productCard.classList.add("p-4", "rounded-lg", );
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}" w-full h-auto object-contain rounded-md mb-4">
            <h3 class="text-lg font-semibold mb-2">${product.title}</h3>
            <p class="text-orange-400 font-bold">${product.price} DH</p>
            <p class="text-sm">⭐ ${product.rating}</p>
            <button class="mt-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg">Ajouter au panier</button>
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
    filteredProducts.sort((a, b) => sortAscending ? a.price - b.price : b.price - a.price);
    sortAscending = !sortAscending;
    displayProducts(currentPage);
});

console.log("Image URL:", product.image);

// Affichage initial
displayProducts(currentPage);
