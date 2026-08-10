import Splide from '@splidejs/splide';
import '../styles/main.scss';

function attachWheelControl(splideInstance) {
    let isScrolling = false;
    const cooldown = 200;

    splideInstance.root.addEventListener(
        'wheel',
        (event) => {
            if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
                event.preventDefault();

                if (isScrolling) return;

                isScrolling = true;

                if (event.deltaX > 0) {
                    splideInstance.go('>');
                } else if (event.deltaX < 0) {
                    splideInstance.go('<');
                }

                setTimeout(() => {
                    isScrolling = false;
                }, cooldown);
            }
        },
        { passive: false },
    );
}

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const categoriesMenu = document.getElementById('categoriesMenu');
    const categoriesToggle = document.getElementById('categoriesToggle');
    const categoryList = document.getElementById('categoryList');
    const categoryWrapper = document.getElementById('categoryWrapper');

    const sliderConfig = {
        type: 'loop',
        mediaQuery: 'min',
        perPage: 1,
        perMove: 1,
        gap: '1.2rem',
        arrows: true,
        pagination: true,
        padding: '29%',
        drag: true,
        flickPower: 900,
        breakpoints: {
            1024: {
                perPage: 3,
                perMove: 3,
                padding: '0%',
                gap: '5rem',
            },
            1728: {
                gap: '0.9rem',
            },
        },
    };
    const carousel1 = new Splide('#latest-releases--carousel', sliderConfig);
    const carousel2 = new Splide('#best-sellers--carousel', sliderConfig);

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

    carousel1.mount();
    carousel2.mount();

    attachWheelControl(carousel1);
    attachWheelControl(carousel2);
});

document.addEventListener('DOMContentLoaded', () => {
    const carousel1 = new Splide('#latest-releases--carousel', {
        type: 'loop',
        mediaQuery: 'min',
        perPage: 1,
        perMove: 1,
        gap: '1.2rem', // Grid spacing
        arrows: true, // Renders arrow buttons
        pagination: true, // Renders circle dots
        padding: '29%',
        drag: true, // Desktop mouse drag
        flickPower: 900,
        breakpoints: {
            1024: {
                perPage: 3,
                perMove: 3,
                padding: '0%',
                gap: '5rem',
            },
            1728: {
                gap: '0.9rem',
            },
        },
    });

    carousel1.mount();

    const carousel2 = new Splide('#best-sellers--carousel', {
        type: 'loop',
        mediaQuery: 'min',
        perPage: 1,
        perMove: 1,
        gap: '1.2rem', // Grid spacing
        arrows: true, // Renders arrow buttons
        pagination: true, // Renders circle dots
        padding: '29%',
        drag: true, // Desktop mouse drag
        flickPower: 900,
        breakpoints: {
            1024: {
                perPage: 3,
                perMove: 3,
                padding: '0%',
                gap: '5rem',
            },
            1728: {
                gap: '0.9rem',
            },
        },
    });

    carousel2.mount();

    const splideEl1 = document.getElementById('latest-releases--carousel');
    const splideEl2 = document.getElementById('best-sellers--carousel');

    let isScrolling = false;
    const cooldown = 200;

    splideEl1.addEventListener(
        'wheel',
        (event) => {
            if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
                event.preventDefault();

                if (isScrolling) return;

                isScrolling = true;

                if (event.deltaX > 0) {
                    carousel1.go('>');
                }

                if (event.deltaX < 0) {
                    carousel1.go('<');
                }

                setTimeout(() => {
                    isScrolling = false;
                }, cooldown);
            }
        },
        { passive: true },
    );
    splideEl2.addEventListener(
        'wheel',
        (event) => {
            if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
                event.preventDefault();

                if (isScrolling) return;

                isScrolling = true;

                if (event.deltaX > 0) {
                    carousel2.go('>');
                }

                if (event.deltaX < 0) {
                    carousel2.go('<');
                }

                setTimeout(() => {
                    isScrolling = false;
                }, cooldown);
            }
        },
        { passive: true },
    );
});

document.addEventListener('DOMContentLoaded', () => {
    const carousel1 = new Splide('#latest-releases--carousel', {
        type: 'loop',
        mediaQuery: 'min',
        perPage: 1,
        perMove: 1,
        gap: '1.2rem', // Grid spacing
        arrows: true, // Renders arrow buttons
        pagination: true, // Renders circle dots
        padding: '29%',
        drag: true, // Desktop mouse drag
        flickPower: 900,
        breakpoints: {
            1024: {
                perPage: 3,
                perMove: 3,
                padding: '0%',
                gap: '5rem',
            },
            1728: {
                gap: '0.9rem',
            },
        },
    });

    carousel1.mount();

    const carousel2 = new Splide('#best-sellers--carousel', {
        type: 'loop',
        mediaQuery: 'min',
        perPage: 1,
        perMove: 1,
        gap: '1.2rem', // Grid spacing
        arrows: true, // Renders arrow buttons
        pagination: true, // Renders circle dots
        padding: '29%',
        drag: true, // Desktop mouse drag
        flickPower: 900,
        breakpoints: {
            1024: {
                perPage: 3,
                perMove: 3,
                padding: '0%',
                gap: '5rem',
            },
            1728: {
                gap: '0.9rem',
            },
        },
    });

    carousel2.mount();

    const splideEl1 = document.getElementById('latest-releases--carousel');
    const splideEl2 = document.getElementById('best-sellers--carousel');

    let isScrolling = false;
    const cooldown = 200;

    splideEl1.addEventListener(
        'wheel',
        (event) => {
            if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
                event.preventDefault();

                if (isScrolling) return;

                isScrolling = true;

                if (event.deltaX > 0) {
                    carousel1.go('>');
                }

                if (event.deltaX < 0) {
                    carousel1.go('<');
                }

                setTimeout(() => {
                    isScrolling = false;
                }, cooldown);
            }
        },
        { passive: true },
    );
    splideEl2.addEventListener(
        'wheel',
        (event) => {
            if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
                event.preventDefault();

                if (isScrolling) return;

                isScrolling = true;

                if (event.deltaX > 0) {
                    carousel2.go('>');
                }

                if (event.deltaX < 0) {
                    carousel2.go('<');
                }

                setTimeout(() => {
                    isScrolling = false;
                }, cooldown);
            }
        },
        { passive: true },
    );
});
