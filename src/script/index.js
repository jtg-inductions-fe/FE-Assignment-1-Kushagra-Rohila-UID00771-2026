// Grab required DOM elements
const menuToggle = document.getElementById('menuToggle');
const categoryMenu = document.getElementById('categoriesMenu');
const categoriesToggle = document.getElementById('categoriesToggle');
const categoryList = document.getElementById('categoryList');
const categoryWrapper = document.getElementById('categoryWrapper');

// Step 4.1: Mobile Drawer Toggle
menuToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevents instant closing from outer click event
    categoryMenu.classList.toggle('dropdown-menu--active');
    menuToggle.classList.toggle('color--blue');
});

// Step 4.2: Submenu Toggle (Mobile & Desktop click support)
categoriesToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    categoryList.classList.toggle('dropdown-category__list--active');
    categoriesToggle.classList.toggle('color--blue');
});

// Step 4.3: Close menus when user clicks outside
document.addEventListener('click', (e) => {
    // If click is outside mobile menu, close it
    if (!categoryMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        categoryMenu.classList.remove('dropdown-menu--active');
    }
});

categoryWrapper.addEventListener('mouseenter', () => {
    categoryList.classList.add('dropdown-category__list--active');
    categoriesToggle.classList.add('color--blue');
});

// 2. Triggered when the mouse cursor exits the element
categoryWrapper.addEventListener('mouseleave', () => {
    categoryList.classList.remove('dropdown-category__list--active');
    categoriesToggle.classList.remove('color--blue');
});
