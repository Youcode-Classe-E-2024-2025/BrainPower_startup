// Fonction pour afficher la liste des produits dans le panier
function displayProducts() {
    const cart = JSON.parse(localStorage.getItem('checkoutCart')) || [];
    const productList = document.getElementById('productList');
    let subtotal = 0;

    // Vider la liste des produits avant de la remplir
    productList.innerHTML = '';

    // Parcourir le panier pour afficher chaque produit
    cart.forEach(item => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('flex', 'items-center', 'justify-between', 'p-4', 'bg-gray-700', 'rounded-md');
        productDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover">
            <span class="flex-1">${item.name}</span>
            <span>${item.unitPrice}DH</span>
            <span>Quantity: ${item.quantity}</span>
            <span>${(item.unitPrice * item.quantity).toFixed(2)}DH</span>
        `;
        productList.appendChild(productDiv);

        // Calculer le sous-total
        subtotal += item.unitPrice * item.quantity;
    });

    // Afficher le sous-total et le total
    document.getElementById('subtotal').textContent = `${subtotal.toFixed(2)}DH`;
    document.getElementById('totalPrice').textContent = `${subtotal.toFixed(2)}DH`; // Total = Subtotal + frais de livraison (gratuits)
}

// Appeler la fonction lors du chargement de la page
window.onload = displayProducts;

// Fonction pour sauvegarder les informations de la commande dans localStorage
function buyOrder() {
    const form = document.getElementById('checkoutForm');
    const orderDetails = {
        firstName: form.firstName.value,
        address: form.address.value,
        apartment: form.apartment.value,
        city: form.city.value,
        phone: form.phone.value,
        email: form.email.value,
        total: document.getElementById('totalPrice').textContent
    };
    localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
    alert("Les informations de la commande ont été enregistrées !");
}
// Récupérer les produits du panier
const cart = JSON.parse(localStorage.getItem('checkoutCart'));

if (cart && cart.length > 0) {
let cartHTML = '';
let subtotal = 0;

// Parcourir chaque produit et ajouter les informations au HTML
cart.forEach(product => {
const productTotal = product.unitPrice * product.quantity;
subtotal += productTotal;

cartHTML += `
    <div class="flex items-center justify-between my-4">
        <img src="${product.image}" alt="${product.name}" class="w-16 h-16">
        <span>${product.name}</span>
        <span>${product.unitPrice} DH</span>
        <span>Quantité: ${product.quantity}</span>
        <span>Total: ${productTotal} DH</span>
    </div>
`;
});

// Afficher les produits dans la section du panier
document.getElementById('productList').innerHTML = cartHTML;

// Mettre à jour le subtotal et le total
document.getElementById('subtotal').textContent = `${subtotal} DH`;
document.getElementById('total').textContent = `${subtotal} DH`;  // Ajoute les frais de livraison si nécessaire
} else {
document.getElementById('productList').innerHTML = 'Aucun produit dans le panier';
document.getElementById('subtotal').textContent = '0 DH';
document.getElementById('total').textContent = '0 DH';
}


// Fonction pour imprimer les informations de la commande en PDF
function printOrder() {
    const orderDetails = JSON.parse(localStorage.getItem('orderDetails'));
    if (orderDetails) {
        let printWindow = window.open('', '', 'width=800,height=600');
        printWindow.document.write('<html><head><title>Commande</title></head><body>');
        printWindow.document.write('<h1>Détails de la Commande</h1>');
        printWindow.document.write(`<p>Nom: ${orderDetails.firstName}</p>`);
        printWindow.document.write(`<p>Adresse: ${orderDetails.address}, ${orderDetails.apartment}, ${orderDetails.city}</p>`);
        printWindow.document.write(`<p>Téléphone: ${orderDetails.phone}</p>`);
        printWindow.document.write(`<p>Email: ${orderDetails.email}</p>`);
        printWindow.document.write(`<p>Total: ${orderDetails.total} </p>`);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
    } else {
        alert("Aucune commande à imprimer.");
    }
}

