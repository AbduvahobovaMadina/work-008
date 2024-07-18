const navbar = document.querySelector(".navbar__collection");
const header = document.querySelector("header")
const btn = document.querySelector(".btn")


const API__PRODUCTS = "https://dummyjson.com"
const wrapper = document.querySelector(".wrapper")
const loading = document.querySelector(".loading")
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


console.log(API__PRODUCTS);
console.log(wrapper);

async function fetchProducts(api) {
        loading.style.display = "flex"
        let respnonse = await fetch(`${api}/products`)
        console.log(respnonse);
        respnonse
                .json()
                .then((res)=> createCard(res))
                .catch((err)=> console.log(err)) 
                .finally(loading.style.display = "none"
                )     
  
}

fetchProducts(API__PRODUCTS)

function createCard(data) {
    data.products.forEach((product) => {
        console.log(data);
        console.log(product);
        let card = document.createElement("div")
        card.classList.add("card")
        console.log(card);
        card.innerHTML = `
            <img class="img" src="${product.thumbnail}" alt="">
            <div class="desc">
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <h3><i class="fa-solid fa-star"></i> ${product.rating}</h3>
            <span>${product.price}$</span>
            <h3>Category:${product.category}</h3>
            </div>

        `

        wrapper.appendChild(card)
    }
);
}
