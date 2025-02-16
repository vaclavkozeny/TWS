let menuButton = document.getElementById('hamburger');
let dropdownMenu = document.getElementById('dropdown');
let imageContainers = document.querySelectorAll('figure');
if(menuButton && dropdownMenu){
    menuButton.addEventListener('click',()=>{
        dropdownMenu.classList.toggle('hidden')
    })
}
if (imageContainers) {
    imageContainers.forEach(e => {
        e.addEventListener('click', () => {
            let capt = e.querySelector('figcaption'); // Najdi figcaption
            capt.classList.toggle('hidden'); // Přepni třídu
            let img = e.querySelector('img');
            img.classList.toggle('captionOn');
        });
    });
}