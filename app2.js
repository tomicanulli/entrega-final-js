/*let producto = [];
let relojes = [];
let mallas = [];  

class reloj{
    constructor(marca,modelo,maquinaria,tamaño,precio){
        this.marca = marca;
        this.modelo = modelo;
        this.maquinaria = maquinaria;
        this.tamaño = tamaño;
        this.precio = precio;
    } 
}

class mallaRespuesto{
    constructor(marca,ancho,material,color,precio){
        this.marca = marca;
        this.ancho = ancho;
        this.material = material;
        this.color = color;
        this.precio = precio;
    } 
}

relojes.push(new reloj('Rolex','Submariner','Automatica','41mm','210'),
            new reloj('Rolex','GMT II','Automatica','41mm','210'),
            new reloj('Rolex','Deepsea','Automatica','41mm','210'),
            
            new reloj('Tag Heuer','Formula 1','Pila','44mm','200'),
            new reloj('Tag Heuer','Carrera','Pila','44mm','200'),
            new reloj('Tag Heuer','Aquaracer','Automatica','44mm','200'),

            new reloj('Omega','Seamaster','Automatica','40mm','200'),
            new reloj('Omega','Seamaster','Automatica','40mm','200'),
            new reloj('Omega','Speedmaster','Pila','44mm','200'),

            new reloj('Panerai','Sumersible','Automatica','44mm','230'),
            new reloj('Panerai','Luminor','Automatica','42mm','230'),
            new reloj('Panerai','Luminor GMT','Automatica','42mm','230'));

mallas.push(new mallaRespuesto('Rolex','20mm','Goma','Negro','40'),
            new mallaRespuesto('Rolex','20mm','Cuero','Marron','40'),
            new mallaRespuesto('Rolex','21mm','Goma','Azul','40'),
            
            new mallaRespuesto('Tag Heuer','22mm','Goma','Negro','40'),
            new mallaRespuesto('Tag Heuer','22mm','Cuero','Marron','40'),
            new mallaRespuesto('Tag Heuer','20mm','Metalica','Plata','60'),

            new mallaRespuesto('Omega','20mm','Cuero','Negro','40'),
            new mallaRespuesto('Omega','20mm','Cuero','Marron','40'),

            new mallaRespuesto('Panerai','26mm','Goma','Negro','40'),
            new mallaRespuesto('Panerai','24mm','Goma','Verde','40'));

do{
    function productoElegido(){
        let prodElegido = prompt( `Qué deseas aldiquir? \n  --> Relojes \n --> Mallas de repuesto`);
        
    }
}





// producto.push(relojes);
// console.log(producto);
/*
///PREGUNTA:  Que producto desea comprar ? Reloj o malla ?
do{
    function productoElegido(){
        
        let prodElegido = prompt( `Qué deseas aldiquir? \n  --> Relojes \n --> Mallas de repuesto`);  
        
        if (prodElegido == 'reloj' || prodElegido == 'relojes'){
            alert ('Estos son los relojes Disponibles ');
            let relojesDisponibles = relojes.map((reloj)=> reloj.marca + " " + reloj.modelo + " u$d " + reloj.precio);
            alert (relojesDisponibles.join('\n'));
            let modeloElegida = prompt ('¿Qué modelo desearia comprar?');
            let relojElegido = relojes.includes((reloj)=> reloj.modelo === modeloElegida.toLowerCase);
            relojElegido.forEach((reloj) => console.log(reloj.marca));

        }
        else if (prodElegido == 'malla' || prodElegido == 'mallas' || prodElegido == 'mallas de repuesto' ){
            alert('Estos son las mallas Disponibles ');
            let mallasDisponibles = mallas.map((malla)=> malla.marca + " " + malla.ancho + " u$d " + malla.precio);;
            alert (mallasDisponibles.join('\n'));
            let marcaElegida = prompt ('¿Qué modelo desearia comprar?');
            mallas.forEach((malla)=>{
                if(malla.modelo === marcaElegida.toLocaleLowerCase()){
                    console.log(mallaRespuesto);
                }
            })

        }
        else{
            console.log('Ingrese un valor correcto.' )
        };

    }
productoElegido();
}

while ( continuar = confirm("Desea continuar ??"));

*/


    //let relojElegido = relojes.includes((reloj)=> reloj.modelo === modeloElegido);
    //relojElegido.forEach((reloj) => console.log(reloj.marca));