let menuButton = document.getElementById('hamburger');
let dropdownMenu = document.getElementById('dropdown');
let imageContainers = document.querySelectorAll('figure');
let switchButton = document.getElementById('switch');
// otevření/zavření hamburger menu
if (menuButton && dropdownMenu) {
    menuButton.addEventListener('click', () => {
        dropdownMenu.classList.toggle('open')
    })
}
// listener pro zobrazení figcaption po kliknutí
if (imageContainers && window.matchMedia("(max-width: 768px)").matches) {
    imageContainers.forEach(e => {
        e.addEventListener('click', () => {
            if(e.id != 'table'){
                let capt = e.querySelector('figcaption');
                capt.classList.toggle('hidden');
                let img = e.querySelector('img');
                img.classList.toggle('captionOn');
            }
        });
    });
}

// pridani listeneru na tlačítko přepínaní darkmode, nastavení local storage
document.addEventListener('DOMContentLoaded', () => {
    let toggleButton = document.getElementById('switch');
    let body = document.body;
    let icon = document.getElementById('switchIcon');

    if (localStorage.getItem('darkMode') === "enabled") {
        body.classList.add('darkmode');
    }

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('darkmode');
        if (body.classList.contains('darkmode')) {
            localStorage.setItem('darkMode', 'enabled');
            icon.src = "https://www.svgrepo.com/show/532875/moon.svg";
        } else {
            localStorage.setItem('darkMode', 'disabled');
            icon.src = "https://www.svgrepo.com/show/489165/sun-2.svg";
        }
    });
});
// nastavení ikony darkmode podle stavu v localstorage
document.addEventListener("DOMContentLoaded", () => {
    let icon = document.getElementById('switchIcon');
    if (localStorage.getItem("darkMode") === "enabled") {
        icon.src = "https://www.svgrepo.com/show/532875/moon.svg"
    }
    else {
        icon.src = "https://www.svgrepo.com/show/489165/sun-2.svg"
    }
});

let messageType = document.getElementById('type');
let messageDoc = document.getElementById('document');

