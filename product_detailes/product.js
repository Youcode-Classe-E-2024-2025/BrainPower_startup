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
