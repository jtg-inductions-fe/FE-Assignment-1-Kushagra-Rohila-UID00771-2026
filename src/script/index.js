document.addEventListener('DOMContentLoaded', () => {
    // Grab required DOM elements
    const menuToggle = document.getElementById('menuToggle');
    const categoryMenu = document.getElementById('categoriesMenu');
    const categoriesToggle = document.getElementById('categoriesToggle');
    const categoryList = document.getElementById('categoryList');
    const categoryWrapper = document.getElementById('categoryWrapper');
    const headerNavbarButton = document.querySelectorAll(
        '.header__navbar__button',
    );

    // Mobile Drawer Toggle
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevents instant closing from outer click event
        categoryMenu.classList.toggle('dropdown-menu--active');
        menuToggle.classList.toggle('color--blue');
    });

    // Submenu Toggle (Mobile & Desktop click support)
    categoriesToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        categoryList.classList.toggle('dropdown-category__list--active');
        categoriesToggle.classList.toggle('color--blue');
    });

    headerNavbarButton.forEach((element) => {
        element.addEventListener('mouseenter', () => {
            element.classList.add('color--blue');
        });
        element.addEventListener('mouseleave', () => {
            if (element === categoriesToggle) {
                return;
            }
            element.classList.remove('color--blue');
        });
    });

    //Close menus when user clicks outside
    document.addEventListener('click', (e) => {
        // If click is outside mobile menu, close it
        if (!categoryMenu.contains(e.target)) {
            categoryMenu.classList.remove('dropdown-menu--active');
            menuToggle.classList.remov('color--blue');
        }
    });

    categoryWrapper.addEventListener('mouseenter', () => {
        categoryList.classList.add('dropdown-category__list--active');
        categoriesToggle.classList.add('color--blue');
    });

    // Triggered when the mouse cursor exits the element
    categoryWrapper.addEventListener('mouseleave', () => {
        categoryList.classList.remove('dropdown-category__list--active');
        categoriesToggle.classList.remove('color--blue');
    });
});
