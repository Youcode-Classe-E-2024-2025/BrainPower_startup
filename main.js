// Select the category menu item and the dropdown menu
const categoryNav = document.getElementById('category-nav');
const dropDownMenuCaty = document.querySelector('.dropDown-menu-caty');
const dropDownRight = document.querySelector('.dropDown-menu-right');
const userIcon = document.querySelector('.fa-user');

// Add event listener to toggle dropdown visibility
categoryNav.addEventListener('click', (event) => {
    event.preventDefault(); 
    dropDownMenuCaty.classList.toggle('hidden'); 
});

// Close dropdown when clicking outside
document.addEventListener('click', (event) => {
    // Check if the click is outside the dropdown and category button
    if (!dropDownMenuCaty.contains(event.target) && !categoryNav.contains(event.target)) {
        dropDownMenuCaty.classList.add('hidden');
    }
});

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