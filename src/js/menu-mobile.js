
var iconMenu = document.querySelector(".menu-mobile-toggler");
var menu = document.querySelector(".hamburger-menu");

iconMenu.addEventListener('click',function(){
    this.classList.toggle('active');
    menu.classList.toggle('active');
})