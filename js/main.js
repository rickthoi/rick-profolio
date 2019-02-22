//Select DOM items
//Select menu buttons
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");

//Select menu items with querySelectorAll
const navItems = document.querySelectorAll(".nav-item");

//Set initial state of menu false show true open menu
let showMenu = false;
// Add event listener
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  //check if Menu not show, add a close class
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));
    //reset Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));
    //reset Menu State
    showMenu = false;
  }
}
