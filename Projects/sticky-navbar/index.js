const navbarEl = document.querySelector(".navbar");

const bottomContainerEl = document.querySelector(".bottom-container");

console.log(navbarEl.offsetHeight);
console.log(bottomContainerEl.offsetTop);

window.addEventListener("scroll", ()=>{
    if(window.scrollY > bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50 /*for text the top and bottom margin is 50px in css, so need to remove that part*/ ){
        navbarEl.classList.add("active");
    }
    else{
        navbarEl.classList.remove("active");
    }
})