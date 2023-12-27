const pick_item = document.querySelector(".pick_item");
console.log(pick_item);
const tee1_pick = document.querySelector(".tee1_pick");
console.log(tee1_pick);
pick_item.addEventListener("click",() => {
    shopping_cart_box.style.display="block";
    tee1_pick.style.display="flex";
})