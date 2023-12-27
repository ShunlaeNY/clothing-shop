const open_menu = document.querySelector(".open_menu");
const close_menu = document.querySelector(".close_menu");
const overflow_menu = document.querySelector(".overflow_menu");

open_menu.addEventListener("click",()=>{
    overflow_menu.style.display = "block";
    close_menu.style.display = "block";
    open_menu.style.display = "none";
})
close_menu.addEventListener("click",()=>{
    overflow_menu.style.display = "none";
    close_menu.style.display = "none";
    open_menu.style.display = "block";
})