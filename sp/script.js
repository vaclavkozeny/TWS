let menuButton = document.getElementById('hamburger');
let dropdownMenu = document.getElementById('dropdown');
if(menuButton && dropdownMenu){
    menuButton.addEventListener('click',()=>{
        dropdownMenu.classList.toggle('hidden')
    })
}