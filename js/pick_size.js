const smallButton = document.querySelector(".S_button");
const mediumButton = document.querySelector(".M_button");
const largeButton = document.querySelector(".L_button");
const extraLargeButton = document.querySelector(".XL_button");

smallButton.addEventListener("click",()=>{
    smallButton.style.cssText="border:1px solid var(--primary-color);background-color: var(--fourth_color);"
    mediumButton.style.cssText="border:none;background-color: lightgray;color:gray;"
    largeButton.style.cssText="border:none;background-color: lightgray;color:gray;"
    extraLargeButton.style.cssText="border:none;background-color: lightgray;color:gray;"
})

mediumButton.addEventListener("click",()=>{
    mediumButton.style.cssText="border:1px solid var(--primary-color);background-color: var(--fourth_color);"
    smallButton.style.cssText="border:none;background-color: lightgray;color:gray;"
    largeButton.style.cssText="border:none;background-color: lightgray;color:gray;"
    extraLargeButton.style.cssText="border:none;background-color: lightgray;color:gray;"
})

largeButton.addEventListener("click",()=>{
    largeButton.style.cssText="border:1px solid var(--primary-color);background-color: var(--fourth_color);"
    mediumButton.style.cssText="border:none;background-color: lightgray;color:gray;"
    smallButton.style.cssText="border:none;background-color: lightgray;color:gray;"
    extraLargeButton.style.cssText="border:none;background-color: lightgray;color:gray;"
})

extraLargeButton.addEventListener("click",()=>{
    extraLargeButton.style.cssText="border:1px solid var(--primary-color);background-color: var(--fourth_color);"
    mediumButton.style.cssText="border:none;background-color: lightgray;color:gray;"
    largeButton.style.cssText="border:none;background-color: lightgray;color:gray;"
    smallButton.style.cssText="border:none;background-color: lightgray;color:gray;"
})