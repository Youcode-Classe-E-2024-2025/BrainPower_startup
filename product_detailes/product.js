const sizeBtns = document.querySelectorAll('.sizes button');

sizeBtns.forEach(btnSize => {
    btnSize.addEventListener('click', () => {
        // Remove active classes from all buttons
        sizeBtns.forEach(btn => {
            btn.classList.remove('text-white', 'bg-orange-500');
        });

        // Add active classes to the clicked button
        btnSize.classList.add('text-white', 'bg-orange-500');
    });
}); 

// add incries ..etc
const incriesBtn = document.getElementById('incries');
const QuantityDisplay = document.getElementById('Quantity');
const dincriesBtn = document.getElementById('dincries');


function incries() {
    // Convert the current text content to a number, increment, and update
    QuantityDisplay.textContent = parseInt(QuantityDisplay.textContent) + 1;
}

function dincries() {
    // Convert the current text content to a number, decrement, and update
    // Ensure the quantity doesn't go below 0
    const currentQuantity = parseInt(QuantityDisplay.textContent);
    if (currentQuantity > 0) {
        QuantityDisplay.textContent = currentQuantity - 1;
    }
}

incriesBtn.addEventListener('click', dincries);
dincriesBtn.addEventListener('click', incries);

// switch between each product

// Select the main image and all thumbnails
const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('.thumbnail');

// Add a click event listener to each thumbnail
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        // Update the src of the main image to match the clicked thumbnail
        mainImage.src = this.src;
    });
});

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id"); // Get product id from the URL

// Assuming you have the data stored in a variable `DataTshirt`
const product = DataTshirt.find(p => p.id === parseInt(productId)); // Find the product using the id

if (product) {
    // Populate the product details on the page
    document.getElementById("mainImage").src = product.images[0]; // Main image
    document.getElementById("mainImage").alt = product.name;
    document.querySelector("h1").textContent = product.name;
    document.querySelector(".text-red-500").textContent = product.price + " DH"; // Price
    document.querySelector("p.text-gray-300").textContent = product.text; // Description

    // Update image thumbnails
    const thumbnails = document.querySelectorAll(".thumbnail");
    thumbnails.forEach((thumb, index) => {
        if (product.images[index]) {
            thumb.src = product.images[index];
            thumb.addEventListener("click", () => {
                document.getElementById("mainImage").src = product.images[index];
            });
        }
    });
}
