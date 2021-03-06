const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', function (e) {

    });
});

const sidebarMenu = document.querySelector('.sidebar');
const menuIcon = document.querySelector('.menu-icon');
const sidebarCloseIcon = document.querySelector('.sidebar__close-icon');

const menuToggler = (shouldClose) => {
    if (shouldClose) {
        sidebarMenu.classList.remove('active');
    } else {
        sidebarMenu.classList.add('active');
    }
};

menuIcon.addEventListener('click', () => {
    menuToggler(false);
});

sidebarCloseIcon.addEventListener('click', () => {
    menuToggler(true);
});

document.addEventListener('click', (e) => {
    const isInsideSidebar = sidebarMenu.contains(e.target);

    if (!e.target.classList.contains('menu-icon') && !isInsideSidebar) {
        menuToggler(true);
    }
});

const saveBtn = document.querySelector('.color-saver');
const inputs = document.querySelectorAll('input');

let r = 0;
let g = 0;
let b = 0;
let colorStep = 0;

saveBtn.addEventListener('click', () => {
    r = inputs[0].value;
    g = inputs[1].value;
    b = inputs[2].value;
    colorStep = 0;
    document.body.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${colorStep})`;
});


document.addEventListener('keydown', e => {
    // up key - 38; down key - 40
    const { keyCode } = e;

    switch (keyCode) {
        case 38:
            if (colorStep < 1) {
                colorStep += 0.1;
            }
            break;
        case 40:
            if (colorStep > 0) {
                colorStep -= 0.1;
            }
            break;
        case 48:
            colorStep = 0;
            break;
        case 27:
            menuToggler(true);
            break;
        default:
            break;

    }

    document.body.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${colorStep})`;
});

const header = document.querySelector('header');

let lastScrollY = 0;

document.addEventListener('scroll', (e) => {

    // 0
    const scrolledPixels = window.scrollY; // 48

    if (scrolledPixels > 0) { // to solve the issue with Safari
        if (scrolledPixels > lastScrollY) {
            header.classList.add('collapsed');
        } else {
            header.classList.remove('collapsed');
        }

        lastScrollY = scrolledPixels;
    }
});

const a = {
    name: 'Gazanfar',
    age: 73,
    surname: 'Gazanfarli'
};

const getNumberValues = (obj = {}) => {
    const res = {};

    Object.keys(obj).forEach(k => {
        if (typeof obj[k] === 'number') {
            res[k] = obj[k];
        }
    });

    return res;
};

console.log(getNumberValues(a));

// getNumberItems(a) -> { age: 73 }

// const testDiv = document.querySelector('.test');
//
// testDiv.addEventListener('mouseenter', () => {
//     document.body.classList.add('faded');
// });
//
// testDiv.addEventListener('mouseleave', () => {
//     document.body.classList.remove('faded');
// });
