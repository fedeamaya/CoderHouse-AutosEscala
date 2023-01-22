const shopCars = document.getElementById("shopcars");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

const autos = [
    {
        "id": 1,
        "name" : "Amarok",
        "tipo": "Camioneta",
        "origen": "Alemania",
        "marca": "Volkswagen",
        "img": "https://fotos.perfil.com/2019/11/15/volkswagen-amarok-v6-805503.jpg",
        "precio": 19000
    },
    {
        "id": 2,
        "name" : "A3",
        "tipo": "Deportivo",
        "origen": "Alemania",
        "marca": "Audi",
        "img": "https://cdn.motor1.com/images/mgl/nRVvk/s1/audi-a3-sportback-2020-on-location.webp",
        "precio": 18000
    },
    {
        "id": 3,
        "name" : "A4",
        "tipo": "Sedan",
        "origen": "Alemania",
        "marca": "Audi",
        "img": "https://hips.hearstapps.com/hmg-prod/images/medium-6802-audia4-1654633069.jpg?crop=0.891xw:1.00xh;0.0928xw,0&resize=640:*",
        "precio": 12000
    },
    {
        "id": 4,
        "name" : "Q5",
        "tipo": "Camioneta",
        "origen": "Alemania",
        "marca": "Audi",
        "img": "https://autotest.com.ar/wp-content/uploads/2020/11/AUDI-Q5-SPORTBACK-2021.jpg",
        "precio": 15000
    },
    {
        "id": 5,
        "name" : "R8",
        "tipo": "Super deportivo",
        "origen": "Alemania",
        "marca": "Audi",
        "img": "https://cdn.motor1.com/images/mgl/1YyZL/s1/2015-548796-2015-audi-r81.jpg",
        "precio": 20000 
    },
    {
        "id": 6,
        "name" : "TT",
        "tipo": "Deportivo",
        "origen": "Alemania",
        "marca": "Audi",
        "img": "https://www.km77.com/images/medium/9/0/6/5/audi-tt-edicion-tourist-trophy-frontal-lateral.359065.jpg",
        "precio": 15000 
    },
    {
        "id": 7,
        "name" : "Camaro",
        "tipo": "Super deportivo",
        "origen": "Estados unidos",
        "marca": "Chevrolet",
        "img": "https://st.depositphotos.com/1163717/3353/i/600/depositphotos_33536719-stock-photo-yellow-sports-car.jpg",
        "precio": 23000 
    },
    {
        "id": 8,
        "name" : "Corsa",
        "tipo": "Familiar",
        "origen": "Estados unidos",
        "marca": "Chevrolet",
        "img": "https://chevcar.com/wp-content/uploads/2021/07/Chevrolet-Corsa-4.jpg",
        "precio": 8000 
    },
    {
        "id": 9,
        "name" : "Cruze",
        "tipo": "Sedan",
        "origen": "Estados unidos",
        "marca": "Chevrolet",
        "img": "https://www.chevrolet.com.ar/content/dam/chevrolet/mercosur/argentina/espanol/index/cars/2019-cruze-premier/colorizer/enero-21/colorizer-azul-eclipse.jpg?imwidth=960",
        "precio": 10000 
    },
    {
        "id": 10,
        "name" : "Gol Trend",
        "tipo": "Familiar",
        "origen": "Alemania",
        "marca": "Volkswagen",
        "img": "https://sudamerics.com.ar/wp-content/uploads/2019/10/VW_Gol_Trend-800x600.jpg",
        "precio": 9000 
    },
    {
        "id": 11,
        "name" : "Onix",
        "tipo": "Familiar",
        "origen": "Estados unidos",
        "marca": "Chevrolet",
        "img": "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/xl/RT_V_0d008ceaa2eb419883ad5c2f1eea7838.jpg",
        "precio": 7000 
    },
    {
        "id": 12,
        "name" : "Saveiro",
        "tipo": "Camioneta",
        "origen": "Alemania",
        "marca": "Volkswagen",
        "img": "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/xl/RT_V_e495469aca444ee19102e33113bc9069.jpg",
        "precio": 13000 
    },
    {
        "id": 13,
        "name" : "Sonic",
        "tipo": "Familiar",
        "origen": "Estados unidos",
        "marca": "Chevrolet",
        "img": "https://noticias.coches.com/wp-content/uploads/2014/07/chevrolet_sonic-dusk-2013_r5.jpg",
        "precio": 10000 
    },
    {
        "id": 14,
        "name" : "T Cross",
        "tipo": "Camioneta",
        "origen": "Alemania",
        "marca": "Volkswagen",
        "img": "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/xl/RT_V_eb920fd356044f8b854396b536b9b78b.jpg",
        "precio": 13000 
    },
    {
        "id": 15,
        "name" : "Vento",
        "tipo": "Sedan",
        "origen": "Alemania",
        "marca": "Volkswagen",
        "img": "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/xl/RT_V_17c9d3885bf34e9b8f97b1e35a3fa24a.jpg",
        "precio": 17000 
    },
];

let carrito = [];

autos.forEach((product)=> {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src="${product.img}">
    <h2>${product.name}</h2>
    <h3>${product.tipo}</h3>
    <h3>${product.origen}</h3>
    <h3>${product.marca}</h3>
    <p class="precio">${product.precio} $</p>
    `;

    shopCars.append(content)

    let comprar = document.createElement("button")
    comprar.innerText = "comprar";
    comprar.className = "comprar"

    content.append(comprar)

    comprar.addEventListener("click", () => {
        carrito.push({
            id:product.id,
            name:product.name,
            tipo:product.tipo,
            origen:product.origen,
            marca:product.marca,
            img:product.img,
            precio:product.precio,
        });
        console.log(carrito)
    });
});

const añadirCarrito = () => {

    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalShop = document.createElement("div");
    modalShop.className = "modal-shop"
    modalShop.innerHTML = `
    <h1 class="modal-shop-title">Carrito.</h1>
    `;
    modalContainer.append(modalShop);
    
    const modalButton = document.createElement("h1");
    modalButton.innerText = "X";
    modalButton.className = "modal-shop-button";
    
    modalButton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    
    })
    
    modalShop.append(modalButton);
    
    carrito.forEach((product) => {
        let carritoContent = document.createElement ("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
        <img src="${product.img}">
        <h2> ${product.name}</h2>
        <p>${product.precio} $</p>
    `;
    
    modalContainer.append(carritoContent);
    
    let eliminar = document.createElement("span");
    eliminar.innerText = "❌";
    eliminar.className = "delete-product";
    carritoContent.append(eliminar);
    
    eliminar.addEventListener("click", eliminarProducto)            
    
    });
    
    const total = carrito.reduce((acc, el) => acc + el.precio, 0);
    
    const totalCopra = document.createElement("div");
    totalCopra.className = "totla-content";
    totalCopra.innerHTML = `Total a pagar: ${total} $`;
    modalContainer.append(totalCopra);
};

verCarrito.addEventListener("click", añadirCarrito)

const eliminarProducto = () => {
    const foundId = carrito.find((element) => element.id);
    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });

    añadirCarrito();
};