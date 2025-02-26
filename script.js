let menuButton = document.getElementById('hamburger');
let dropdownMenu = document.getElementById('dropdown');
var imageContainers = document.querySelectorAll('figure');
let switchButton = document.getElementById('switch');
if (menuButton && dropdownMenu) {
    menuButton.addEventListener('click', () => {
        dropdownMenu.classList.toggle('open')
    })
}
if (imageContainers && window.matchMedia("(max-width: 768px)").matches) {
    imageContainers.forEach(e => {
        e.addEventListener('click', () => {
            let capt = e.querySelector('figcaption');
            capt.classList.toggle('hidden');
            let img = e.querySelector('img');
            img.classList.toggle('captionOn');
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    let toggleButton = document.getElementById('switch');
    let body = document.body;
    let icon = document.getElementById('switchIcon');
    let header = document.getElementById('menu');
    let dropdown = document.getElementById('dropdown');
    let footer = document.getElementsByTagName('footer')[0];

    if (localStorage.getItem('darkmode') === "enabled") {
        body.classList.add('darkmode');
        header.classList.add('darkmode');
        footer.classList.add('darkmode');
        dropdown.classList.add('darkmode')
    }

    toggleButton.addEventListener('click', function () {
        body.classList.toggle('darkmode');
        header.classList.toggle('darkmode');
        footer.classList.toggle('darkmode');
        dropdown.classList.toggle('darkmode');
        if (body.classList.contains('darkmode')) {
            localStorage.setItem('darkmode', 'enabled');
            icon.src = '/images/moon.svg';
        } else {
            localStorage.setItem('darkmode', 'disabled');
            icon.src = '/images/sun.svg';
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    let icon = document.getElementById('switchIcon');
    if (localStorage.getItem("darkMode") === "enabled") {
        icon.src = "/images/moon.svg"
    }
    else {
        icon.src = "/images/sun.svg"
    }
});
