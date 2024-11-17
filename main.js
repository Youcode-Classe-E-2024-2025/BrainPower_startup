// Select the dropdown menu

const dropDownRight = document.querySelector('.dropDown-menu-right');
const userIcon = document.querySelector('.fa-user');

userIcon.addEventListener('click',(event) =>{
    event.preventDefault();
    dropDownRight.classList.toggle('hidden');
});
// Close dropdown when clicking outside
document.addEventListener('click', (event) => {

    if (!dropDownRight.contains(event.target) && !userIcon.contains(event.target)) {
        dropDownRight.classList.add('hidden');
    }
});
// ----------------------------------------slider-----------------------------------------------

// Select all the slider elements
const sliders = document.querySelectorAll('.sliders > div');

// Initialize an index to track the active slider
let currentIndex = 0;

// Function to change the active slider
function changeSlider() {
    // Hide all sliders by setting their opacity to 0
    sliders.forEach((slider, index) => {
        slider.style.opacity = (index === currentIndex) ? '1' : '0';
    });

    // Move to the next slider
    currentIndex = (currentIndex + 1) % sliders.length;
}

// Run the changeSlider function every 3 seconds
setInterval(changeSlider, 3000);

// Initial styling to display only the first slider
sliders.forEach((slider, index) => {
    slider.style.position = 'absolute';
    slider.style.top = '0';
    slider.style.left = '0';
    slider.style.zIndex = '1';
    slider.style.transition = 'opacity 1s ease';
    slider.style.opacity = index === 0 ? '1' : '0';
});

// add smooth scroll 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// -------------------------mobile menu-------------------------
 // Toggle Mobile Menu
  function toggleMenu() {
        const menu = document.getElementById('menuList');
        menu.classList.toggle('hidden');
        menu.classList.toggle('flex');
        menu.classList.toggle('flex-col');
        menu.classList.toggle('absolute');
        menu.classList.toggle('bg-black');
        menu.classList.toggle('top-[77px]');
        menu.classList.toggle('w-full');
    }

    // To make the navbar responsive
    window.addEventListener('resize', function() {
        if (window.innerWidth > 700) {
            document.getElementById('menuList').classList.remove('hidden', 'flex-col', 'absolute', 'bg-black');
            document.getElementById('menuList').classList.add('flex');
        }
    });