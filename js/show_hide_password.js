const hide_pwd = document.querySelector(".hide_password");
const show_pwd = document.querySelector(".show_password");
const input = document.querySelector("#password");
const inputType = input.getAttribute("type");
hide_pwd.addEventListener("click",() =>{
    hide_pwd.style.display="none";
    show_pwd.style.display="block";
    input.setAttribute("type","text");
    console.log("iii");

})

show_pwd.addEventListener("click",() =>{
    show_pwd.style.display="none";
    hide_pwd.style.display="block";
    input.setAttribute("type","password");

})