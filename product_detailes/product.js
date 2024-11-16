const sizeBtns = document.querySelectorAll('.sizes button'); // Select all button elements within the 'sizes' div

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
