document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const categoriesMenu = document.getElementById('categoriesMenu');
    const categoriesToggle = document.getElementById('categoriesToggle');
    const categoryList = document.getElementById('categoryList');
    const categoryWrapper = document.getElementById('categoryWrapper');

    document.addEventListener('click', (e) => {
        if (e.target.closest('#menuToggle')) {
            categoriesMenu.classList.toggle('dropdown-menu--active');
            menuToggle.classList.toggle('bg-blue');
            return; // Exit early
        }

        if (e.target.closest('#categoriesToggle')) {
            categoryList.classList.toggle('dropdown-category__list--active');
            return;
        }

        if (
            !categoriesMenu.contains(e.target) &&
            !menuToggle.contains(e.target)
        ) {
            categoriesMenu.classList.remove('dropdown-menu--active');
            menuToggle.classList.remove('bg-blue');
        }

        if (
            !categoryList.contains(e.target) &&
            !categoriesToggle.contains(e.target)
        ) {
            categoryList.classList.remove('dropdown-category_list--active');
        }
    });

    categoriesMenu.addEventListener('focusout', () => {
        setTimeout(() => {
            if (!categoriesMenu.contains(document.activeElement)) {
                categoriesMenu.classList.remove('dropdown-menu--active');
                menuToggle.focus();
            }
        }, 0);
    });

    categoryList.addEventListener('focusout', () => {
        setTimeout(() => {
            if (!categoryList.contains(document.activeElement)) {
                categoryList.classList.remove(
                    'dropdown-category__list--active',
                );
                categoriesToggle.focus();
            }
        }, 0);
    });

    if (categoryWrapper) {
        categoryWrapper.addEventListener('mouseenter', () => {
            categoryList.classList.add('dropdown-category__list--active');
            categoriesToggle.classList.add('bg-blue');
        });

        categoryWrapper.addEventListener('mouseleave', () => {
            categoryList.classList.remove('dropdown-category__list--active');
            categoriesToggle.classList.remove('bg-blue');
        });
    }
});
