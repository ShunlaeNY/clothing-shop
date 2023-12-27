const yangon = document.querySelector(".div3 .yangon");
console.log(yangon);
const otherRegion = document.querySelector(".div3 .other_region");
console.log(otherRegion);


    yangon.addEventListener("click",() =>{
        yangon.style.cssText="border:1px solid black;background-color: var(--secondary-color);"
        otherRegion.style.cssText="background-color:lightgray;border:none;color:gray;"
    })
    otherRegion.addEventListener("click",() =>{
        otherRegion.style.cssText="border:1px solid black;background-color: var(--secondary-color);"
        yangon.style.cssText="background-color:lightgray;border:none;color:gray;"
    })