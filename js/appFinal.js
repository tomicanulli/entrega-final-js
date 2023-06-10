let stockRelojes = [];
let cotizaciones = [] ;
let cotizacionUsd;
const contenedorProductos = document.getElementById('contProd');
const contenedorCarrito = document.getElementById('prodCarrito');
const buttonVaciar = document.getElementById('buttonVaciar');
const totalProd = document.getElementById('totalProd');
const totalUs = document.getElementById('totalUs');
const totalArs = document.getElementById('totalArs');
const buttonPlus = document.getElementById('plusProd');
const buttonLess = document.getElementById('lessProd');
const finalizarCompra = document.getElementById('finalizarCompra');
const prodCompra = document.getElementById('prodCompra');
const returnCompra = document.getElementById('returnCompra');
const totalCompra = document.getElementById('totalCompra');
const enviarPedido = document.getElementById('formPedido');
const clientName = document.getElementById('nameClient');
const clientSurame = document.getElementById('surnameClient');
const emailClient = document.getElementById('emailClient');

let carrito = [];
let verProducto = [];

//const linkProd = '../productos.json';

// async function traerProductos(){
//     stockRelojes2 = await fetch ('./productos.json')
//     .then ((respuesta) => {
//         if (respuesta.ok)
//             return respuesta.json
//     })
//     //const productos = await respuesta.json;
//     console.log(stockRelojes2)
// }
// traerProductos()

document.addEventListener('DOMContentLoaded', traerProductos )

async function traerProductos(){
    try{
        const relojes = await fetch('./productos.json');
        stockRelojes = await relojes.json();
        mostrarProd()
    }   
    catch(e){
        console.log(e)
    }
}
//stockRelojes = JSON.parse(localStorage.getItem('stockProd'))

const linkDolarBlue = "https://api.bluelytics.com.ar/v2/latest";
const DOMDolar= document.addEventListener('DOMContentLoaded', traerDolar);

async function traerDolar (){
    try{
        const coti = await fetch(linkDolarBlue);
        const dolar = await coti.json();
        localStorage.setItem('cotiUsd', JSON.stringify(dolar.blue.value_sell))

    }
    catch(e){ 
        console.log(e)
    }
}
cotizacionUsd = JSON.parse(localStorage.getItem('cotiUsd'))

function mostrarProd() {
if(contenedorProductos){
    
    stockRelojes.forEach((prod) => {
        const divProd = document.createElement('div');
        let precioArs = prod.precio * cotizacionUsd;;
        divProd.classList.add('contProdR');
        divProd.innerHTML = `
            <img id="img${prod.id}"class="img-prod" src="${prod.imagen}" alt="${prod.marca}-${prod.modelo}" title="${prod.marca}-${prod.modelo}">
            <div class="priceCont">
                <div class="prodDet">
                    <h4>${prod.marca}</h4>
                    <h2>${prod.modelo}</h2>
                    <p>Precio: U$ <b>${prod.precio}</b></p>
                    <p>Precio: AR$ <b>${precioArs}</b></p>
                </div>
            </div>
            <button id="add${prod.id}" class="addCarrito">Añadir al Carrito</button>
        `
        contenedorProductos.appendChild(divProd);
        const buttonCarrito = document.getElementById(`add${prod.id}`);
        buttonCarrito.addEventListener("click" , ()=> {
            if(stockRelojes){
                addCarrito(prod.id)
            }else{
                verProd.push(carrito)
            }
        })
        const verProd = document.getElementById(`img${prod.id}`);
        verProd.addEventListener("click" , ()=> {
            localStorage.setItem('prod', JSON.stringify(prod))
            location.href = "./pages/producto.html"
        })
        
    });
}
}
document.addEventListener('DOMContentLoaded', ()=>{
    if(localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito();
    }
})

const addCarrito = (prodId) => {
    const repeat = carrito.some (prod => prod.id === prodId)    
    if (repeat){
        const prod = carrito.map(prod =>{
            if(prod.id === prodId){
                prod.cantidad++
            }
        })
    }else {
        const itemCarrito = stockRelojes.find((prod) => prod.id === prodId );
        carrito.push(itemCarrito);

    }
    actualizarCarrito();
}
const actualizarCarrito = () => {
    contenedorCarrito.innerHTML= "";

    carrito.forEach((prod) =>{
        const divCarrito = document.createElement('div');
        divCarrito.classList.add('contRecom');
        let precioArs = prod.precio * cotizacionUsd;
        divCarrito.innerHTML = `
                <div class="imgCont">
                    <img class="img-prod" src="../assets/img/destacado-${prod.id}.PNG" alt="${prod.marca} ${prod.modelo}" title="${prod.marca} ${prod.modelo}">
                </div>
                <div class="detCont">
                    <h3> ${prod.marca} ${prod.modelo} </h3>
                    <h4> PRECIO: u$:${prod.precio} / Ar$ ${precioArs}</h4>
                    <div>
                        <button id="lessProd" onclick="lessOneProd(${prod.id})">-</button>
                        <p>${prod.cantidad}</p>
                        <button id="plusProd" onclick="plusOneProd(${prod.id})">+</button>
                    </div>  
                    <button onclick="deteleCarrito(${prod.id})">Eliminar</button>
                </div>
        `
        contenedorCarrito.appendChild(divCarrito);

    })

    if (carrito.length === 0){
        contenedorCarrito.innerHTML= `
        <p> Carrito Vacio </p>
        `;
    } 

    totalProd.innerText = carrito.reduce((acc, prod) => acc + (prod.cantidad), 0)
    
    totalUs.innerText = carrito.reduce((acc, prod) => acc + (prod.precio*prod.cantidad), 0)
    totalArs.innerText = carrito.reduce((acc, prod) => acc + (prod.precio*prod.cantidad*cotizacionUsd), 0)

    localStorage.setItem('carrito', JSON.stringify(carrito))
    
}

const deteleCarrito = (prodId) => {
    const idItem = prodId
    carrito = carrito.filter((prod) => prod.id !== idItem)
    actualizarCarrito ()
}

const vaciarCarrito = ()=>{
    buttonVaciar.addEventListener("click" , ()=> {
        carrito = [];
        actualizarCarrito ()
    })
}
vaciarCarrito();

const plusOneProd = (prodId) => {
    let prodPlus = carrito.find((prod) => prod.id == prodId)
    prodPlus.cantidad++
    actualizarCarrito()
    // const cantidadItem = prodId.cantidad
    // console.log(cantidadItem)
}
const lessOneProd = (prodId) => {
    let prodPlus = carrito.find((prod) => prod.id == prodId)
    prodPlus.cantidad--
    actualizarCarrito()
    // const cantidadItem = prodId.cantidad
    // console.log(cantidadItem)
}
if(finalizarCompra){
    finalizarCompra.addEventListener('click' , ()=>{
        if (carrito.length === 0){
            Swal.fire({
                title: "¡Tu carrito está vacio!",
                text: "Agrega productos para continuar con la compra",
                icon:   "error",
                confirmButtonText: "Aceptar",
            })
        } else {
            location.href = "./pages/compra.html"
            finCompra();
        }
    })
}
if(prodCompra){
    carrito = JSON.parse(localStorage.getItem('carrito'))
    actualizarCarrito();
}

function finCompra() {
    prodCompra.innerHTML= "";
    carrito.forEach((prod) =>{
        const trCompra = document.createElement('tr');
        trCompra.classList.add('carritoInfo');
        let precioArs = prod.precio * cotizacionUsd;;
        let precioTotal = prod.precio * prod.cantidad;
        let precioTotalArs = precioTotal * cotizacionUsd
        trCompra.innerHTML = `
            <td><div class="imgCont"> <img class="img-prod" src="./assets/img/destacado-${prod.id}.PNG" alt="${prod.marca} ${prod.modelo}" title="${prod.marca} ${prod.modelo}"> </div></td>
            <td>${prod.marca} ${prod.modelo}</td>
            <td>u$:${prod.precio} <br> Ar$ ${precioArs}</td>
            <td>${prod.cantidad}</td>
            <td>u$:${precioTotal} <br> Ar$ ${precioTotalArs} </td>
        `
        prodCompra.appendChild(trCompra);

        const totalUs = carrito.reduce((acc, prod) => acc + (prod.precio*prod.cantidad), 0)
        const totalArs = totalUs*cotizacionUsd;
        totalCompra.innerHTML = `
            <p>Total: U$${totalUs} / Ar$${totalArs}</p>
        `
    })
}
if(prodCompra){
    finCompra();
}

if(returnCompra){
    returnCompra.addEventListener('click' , ()=>{
        location.href = "index.html"
    })
}


if(enviarPedido){
    enviarPedido.addEventListener("submit", submitPedido)
}



function submitPedido(e){
    e.preventDefault()
    if(clientName.value === '' || clientSurame.value === '' || emailClient.value === ''){
        Swal.fire({
            title: "Por favor completa tus datos",
            text: "Completalos para finalizar el pedido",
            icon:   "error",
            confirmButtonText: "Aceptar",
        })
    }else{
        Swal.fire({
            title: "Pedido Recibido",
            text: `Gracias ${clientName.value} ${clientSurame.value} por tu pedido`,
            icon:   "success",
        })
        console.log('Pedido Recibido')
        enviarPedido.reset()
        carrito = [];
    }
}

