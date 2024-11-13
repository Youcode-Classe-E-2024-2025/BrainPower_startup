// Exemple de données de produit
const products = [
    { id: 1, title: "T-shirt Bleach", price: 130.34, rating: 9.5, image: "image1.jpg" },
    { id: 2, title: "Poster Naruto", price: 150.00, rating: 9.0, image: "image2.jpg" },
    // Ajoutez plus de produits ici
];

const itemsPerPage = 16;
let currentPage = 1;
let filteredProducts = [...products];

function toggleSortMenu() {
    const sortMenu = document.getElementById("sortMenu");
    sortMenu.classList.toggle("hidden");
}

// Affichage initial des produits
function displayProducts(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const productsToDisplay = filteredProducts.slice(start, end);
    const productList = document.getElementById("productList");
    productList.innerHTML = "";

    productsToDisplay.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("bg-gray-800", "p-4", "rounded-lg", "text-center");
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="w-full h-48 object-cover mb-2 rounded-lg">
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
// document.getElementById("searchInput").addEventListener("input", (event) => {
//     const query = event.target.value.toLowerCase();
//     filteredProducts = products.filter(product => product.title.toLowerCase().includes(query));
//     currentPage = 1;
//     displayProducts(currentPage);
// });

// Gestion du tri par prix
let sortAscending = true;
document.getElementById("sortPriceBtn").addEventListener("click", () => {
    filteredProducts.sort((a, b) => sortAscending ? a.price - b.price : b.price - a.price);
    sortAscending = !sortAscending;
    displayProducts(currentPage);
});

// Affichage initial
displayProducts(currentPage);
