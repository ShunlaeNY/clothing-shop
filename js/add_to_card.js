const add_to_icon = document.querySelector(".add_to_cart_icon");
console.log(add_to_icon);
const shopping_cart_box = document.querySelector(".shopping_cart_box");
const close_button = document.querySelector(".close_button")

add_to_icon.addEventListener("click",() => {
    shopping_cart_box.style.display="block";
})

close_button.addEventListener("click",()=>{
    shopping_cart_box.style.display="none";
})

