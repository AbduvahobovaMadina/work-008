const navbar = document.querySelector(".navbar__collection");
const header = document.querySelector("header")
const btn = document.querySelector(".btn")

window.addEventListener("scroll", ()=>{
    let scrollValue = window.scrollY
    if(scrollValue > 180){
        header.classList.add("shrink")
    }else if(scrollValue <= 0){
        header.classList.remove("shrink")
        btn.style.bottom = "-50px"
    }



    if(scrollValue > 50){
        btn.style.bottom = "50px"
    }
})


// console.log("start");

function toggleShow() {
    navbar.classList.toggle("show");
}