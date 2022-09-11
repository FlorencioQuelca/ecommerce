const arrayProducts = [{
        id: 0,
        name: "producto1",
        price: "10.5",
        stock: 10,
        description: "descripcion1",
        img: "../img/featured1.png",
    },
    {
        id: 1,
        name: "producto2",
        price: "10.5",
        stock: 10,
        description: "descripcion2",
        img: "../img/featured1.png",
    },
    {
        id: 2,
        name: "producto3",
        price: "10.5",
        stock: 10,
        description: "descripcion3",
        img: "../img/featured1.png",
    },
    {
        id: 3,
        name: "producto4",
        price: "10.5",
        stock: 10,
        description: "descripcion4",
        img: "../img/featured1.png",
    },

]
document.addEventListener("DOMContentLoaded", function() {
    const products = document.querySelector(".products");
    let html = ''
    for (let i = 0; i < arrayProducts.length; i++) {
        html += `<div class="product">
            <div class="product_img">
                <img src=" ${arrayProducts[i].img}" alt="${arrayProducts[i].name}">
            </div>
            <div class="product_info">
                <p> nombre:  ${arrayProducts[i].name}</p>
                <p> <small>descripcion: ${arrayProducts[i].description}</small></p>
                <p> precio: ${arrayProducts[i].price}</p>
                <p> <small>stock:  ${arrayProducts[i].stock}</small> </p>
            </div>
             <div class="product_action" data-id ='${arrayProducts[i].id}'>
                <button class="btn"> Agregar</button>
             </div>
        </div>`;
    }
    products.innerHTML = html;
    //console.log(html);
    document.addEventListener("click", function(event) {
        console.log(event.target.classList.contains("btn"));
    });



})