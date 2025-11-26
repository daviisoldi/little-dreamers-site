document.addEventListener('DOMContentLoaded', () => {
    const mainMenu = document.getElementById('main-menu');
    const talesMenu = document.getElementById('tales-menu');
    const aboutUsSection = document.getElementById('about-us-section');
    const allMenus = [mainMenu, talesMenu, aboutUsSection];
    const showTalesBtn = document.getElementById('show-tales-btn');
    const showAboutBtn = document.getElementById('show-about-btn');
    const backLinks = document.querySelectorAll('.back-link');

    function showMenu(menuToShow) {
        allMenus.forEach(menu => {
            menu.classList.add('hidden');
        });
        menuToShow.classList.remove('hidden');
    }

    showTalesBtn.addEventListener('click', (event) => {
        event.preventDefault();
        showMenu(talesMenu);
    });

    showAboutBtn.addEventListener('click', (event) => {
        event.preventDefault();
        showMenu(aboutUsSection);
    });

    backLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            showMenu(mainMenu);
        });
    });
});