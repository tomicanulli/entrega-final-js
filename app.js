/*

let carrito =[];    
let producto = [];
let relojes = [];
let mallas = [];
let precio;
let precioTotal = 0;
let carritoModificado;

class reloj{
    constructor(modelo,maquinaria,tamaño,precio){
        this.modelo = modelo;
        this.maquinaria = maquinaria;
        this.tamaño = tamaño;
        this.precio = precio;

        this.presentacion = `Reloj modelo ${modelo}, precio u$d ${precio}, maquinaria ${maquinaria} y tamaño ${tamaño}`;
    } 
}



relojes.push(new reloj('submariner','Automatica','41mm','210'),
            new reloj('gmt','Automatica','41mm','210'),
            new reloj('deepsea','Automatica','41mm','210'),
            
            new reloj('formula','Pila','44mm','200'),
            new reloj('carrera','Pila','44mm','200'),
            new reloj('aquaracer','Automatica','44mm','200'),

            new reloj('seamaster','Automatica','40mm','200'),
            new reloj('speedmaster','Pila','44mm','200'),

            new reloj('sumersible','Automatica','44mm','230'),
            new reloj('luminor','Automatica','42mm','230'),
            new reloj('luminor gmt','Automatica','42mm','230'));




alert (" Hola Bienvenido a Nuestra Tienda Virtual \n -----> Narcisissme - Relojes Rosario <-----");

function relojElegido(){
    alert ('Estos son los relojes Disponibles ');
    
    let relojesDisponibles = relojes.map((reloj)=> reloj.modelo + " u$d " + reloj.precio);

    alert (relojesDisponibles.join('\n'));
    let modeloElegido = prompt ('¿Qué modelo desearia comprar?');
    
    relojes.forEach((reloj)=>{
        if(reloj.modelo === modeloElegido.toLocaleLowerCase()){
            console.log(reloj.presentacion);
            carrito.push(reloj);
        }
        else alert('Por favor elija un modelo de la lista');
    })
};
do{
    relojElegido();
} 
while ( continuar = confirm("Desea continuar ??"));

console.log(carrito);

carrito.forEach((reloj)=> console.log(`Usted eligió el modelo ${reloj.modelo} y su precio es u$d ${reloj.precio}`));

carrito.forEach((reloj)=> console.log(reloj.precio));   