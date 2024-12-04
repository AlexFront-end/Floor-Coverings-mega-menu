const menuItems = document.querySelectorAll('.menu-ul-nav');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                menuItems.forEach(i => {
                    if (i !== item) i.classList.remove('active');
                });
                item.classList.toggle('active');
            });
        });
    });
});

const burgerMenu = document.getElementById('burger-menu');
const mobileMenu = document.getElementById('mobile-menu');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

function closeMenu() {
    mobileMenu.classList.remove('active');
}

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    const currentPage = document.getElementById(pageId);
    if (currentPage) {
        currentPage.classList.add('active');
    }
    mobileMenu.classList.remove('active');
}

function backToMenu() {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.add('active');
}

const backButtons = document.querySelectorAll('.page button');
backButtons.forEach(button => {
    button.addEventListener('click', backToMenu);
});

