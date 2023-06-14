const mainProducto = document.getElementById('mainProd');

document.addEventListener('DOMContentLoaded', ()=>{
    if(localStorage.getItem('prod')){
        mainProducto.innerHTML = '';
        verProducto = JSON.parse(localStorage.getItem('prod'))
        const {id, marca , modelo , precio, imagen, maquinaria, tamaño, cronografo, bisel, sumergible, acero, cristal } = verProducto
        const sectionReturn = document.createElement('section');
       // sectionReturn.classList.add('navReturn')
        sectionReturn.innerHTML = `
            <ul class="navReturn">
                <li><a href="../index.html">Inicio </a></li>
                <li><a href="../index.html"> / ${marca}  </a></li>
                <li><a href="../index.html"> /  ${modelo} </a></li>
                <li>/ ${marca} ${modelo}</li>
            </ul>

        `
        mainProducto.appendChild(sectionReturn)
        const precioArs = verProducto.precio * cotizacionUsd
        const prodDetails = document.createElement('section');
        prodDetails.classList.add('productD')
        prodDetails.innerHTML = `
            <h3>${marca} ${modelo}</h3>
            <h4>PRECIO: <b>u$ ${precio}</b></h4>
            <div class="imageProduct">
                <img style="width: 100%;" src="${imagen}" alt="${marca} ${modelo}">
            </div>
            <button id="buttonBuy"><a href="">Añadir al Carrito</a></button>
            <button id="buttonWp"><a href="https://api.whatsapp.com/send?phone=543462649084">Solicitar vía Whatsapp</a></button>
            <div class="description">
                <h3>${marca} ${modelo}</h3>
                <h4>PRECIO: <b>u$ ${precio} / Ar$ ${precioArs}</b></h4>
                <p> Descripción:</p>
                <ul>
                    <li>* ${maquinaria}</li>
                    <li>* Tamaño: ${tamaño}</li>
                    <li>* Cronografo Funcional: ${cronografo}</li>
                    <li>* Bisel Giratorio: ${bisel}</li>
                    <li>* Acero: ${acero}</li>
                    <li>* Sumergible: ${sumergible}</li>
                    <li>* Cristal: ${cristal}</li>
                </ul>
                <button id="buttonWp"><a href="https://api.whatsapp.com/send?phone=543462649084">Solicitar vía Whatsapp</a></button>
            </div>
        `
        mainProducto.appendChild(prodDetails)

    }
})
