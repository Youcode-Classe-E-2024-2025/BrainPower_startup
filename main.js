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
const sliderContainer = document.querySelector(".slider-container");
const slides = document.querySelectorAll(".slider");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;

// Update slider position
function updateSlider() {
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Move to the next slide
nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length; // Loop back to the first slide
    updateSlider();
});

// Move to the previous slide
prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Loop back to the last slide
    updateSlider();
});

// Auto-slide functionality (optional)
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}, 5000); // Change slides every 5 seconds

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