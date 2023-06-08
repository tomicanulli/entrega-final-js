// let producto ;
// let reloj1 = ["Rolex", 80000];
// let reloj2 = ["Omega", 75000];
// let reloj3 = ["Tag Heuer", 70000];
// let reloj4 = ["Breitling", 72000];
// let malla1 = ["Rolex", 16000];
// let malla2 = ["Omega", 15000];
// let malla3 = ["Tag Heuer", 14500];
// let malla4 = ["Breitling", 14000];
// let relojSelected;
// let mallaSelected;
// let carritoTotal = 0
// let metodoPago;
// let cantCuotas;
// let details = [];
// //let alerta = alert (`Usted selecciono el reloj ${reloj1[0]} el precio a pagar es de $${reloj1[1]}`)

// alert (" Hola Bienvenido a Nuestra Tienda Virtual \n -----> Narcisissme - Relojes Rosario <-----");

// do{
//     producto = prompt( ` Qué deseas aldiquir? \n 1. Relojes \n 2. Mallas de repuesto `);

//     if (producto == 1){
//         relojSelected = prompt (`Que reloj desea aquirir ??\n 1. ${reloj1[0]} $ ${reloj1[1]}\n 2. ${reloj2[0]} $ ${reloj2[1]}\n 3. ${reloj3[0]} $ ${reloj3[1]}\n 4. ${reloj4[0]} $ ${reloj4[1]}\n`);
//         if (relojSelected == 1){
//             alert (`Usted selecciono el reloj ${reloj1[0]} el precio a pagar es de $${reloj1[1]}`);
//             carritoTotal = carritoTotal + reloj1[1];
//             details = details + reloj1;
//             alert ("El total del Carrito es: $" + carritoTotal);
//         }
//         else if (relojSelected == 2){
//             alert (`Usted selecciono el reloj ${reloj2[0]} el precio a pagar es de $${reloj2[1]}`);
//             carritoTotal = carritoTotal + reloj2[1];
//             details = details + reloj2;
//             alert ("El total del Carrito es: $" + carritoTotal);
//         }
//         else if (relojSelected == 3){
//             alert (`Usted selecciono el reloj ${reloj3[0]} el precio a pagar es de $${reloj3[1]}`);
//             carritoTotal = carritoTotal + reloj3[1];
//             details = details + reloj3;
//             alert ("El total del Carrito es: $" + carritoTotal);
//         }
//         else if (relojSelected == 4){
//             alert (`Usted selecciono el reloj ${reloj4[0]} el precio a pagar es de $${reloj4[1]}`);
//             carritoTotal = carritoTotal + reloj4[1];
//             details = details + reloj4;
//             alert ("El total del Carrito es: $" + carritoTotal);
//         }
//         else{
//             alert(`Por favor ingrese valores correctos. 1, 2, 3 o 4`);
//         }
//     }
//     else if (producto == 2){
//         mallaSelected = prompt (`Que malla desea aquirir ??\n 1. ${malla1[0]} $ ${malla1[1]}\n 2. ${malla2[0]} $ ${malla2[1]}\n 3. ${malla3[0]} $ ${malla3[1]}\n 4. ${malla4[0]} $ ${malla4[1]}\n`);
//         if (mallaSelected == 1){
//             alert (`Usted selecciono la malla ${malla1[0]} el precio a pagar es de $${malla1[1]}`);
//             carritoTotal = carritoTotal + malla1[1];
//             details = details + malla1;
//             alert ("El total del Carrito es: $" + carritoTotal);
//         }
//         else if (mallaSelected == 2){
//             alert (`Usted selecciono la malla ${malla2[0]} el precio a pagar es de $${malla2[1]}`);
//             carritoTotal = carritoTotal + malla2[1];
//             details = details + malla2;
//             alert ("El total del Carrito es: $" + carritoTotal);
//         }
//         else if (mallaSelected == 3){
//             alert (`Usted selecciono la malla ${malla3[0]} el precio a pagar es de $${malla3[1]}`);
//             carritoTotal = carritoTotal + malla3[1];
//             details = details + malla3;
//             alert ("El total del Carrito es: $" + carritoTotal);
//         }
//         else if (mallaSelected == 4){
//             alert (`Usted selecciono la malla ${malla4[0]} el precio a pagar es de $${malla4[1]}`);
//             carritoTotal = carritoTotal + malla4[1];
//             details = details + malla4;
//             alert ("El total del Carrito es: $" + carritoTotal);
//         }
//         else{
//             alert(`Por favor ingrese valores correctos. 1, 2, 3 o 4`);
//         }
//     }
//     else{
//         alert(`Por favor ingrese valores correctos. 1 o 2`);
//     }

// } while ( continuar = confirm("Desea continuar ??"));

// alert (`El detalle de su ticket es el siguiente: \n${details} \n`)

// metodoPago = prompt(`Cómo desea realizar el pago ?? ?\n 1. Contado \n 2. Financiado`);

//     if (metodoPago == 1){
//         alert (`Debe Trasferir o Depositar la siguiente suma: $${carritoTotal}`);
//     }
//     else if (metodoPago == 2){
//         cantCuotas = prompt(`En cuantas cuotas desea realizarlo ?? ?\n 1 Cuota - Sin recargo \n  3 Coutas - 30% Recargo \n  6 Coutas - 60% Recargo\n  12 Coutas - 120% Recargo`)
//         if (cantCuotas == 1){
//             alert (`Usted quiere abonó en ${cantCuotas} cuota, el valor de la cuota será: $` + (carritoTotal*(1))/cantCuotas);
//         }
//         else if (cantCuotas == 3){
//             alert (`Usted quiere abonó en ${cantCuotas} cuotas, el valor de cada cuota será: $` + (carritoTotal*(1.3))/cantCuotas);
//         }
//         else if (cantCuotas == 6){
//             alert (`Usted quiere abonó en ${cantCuotas} cuotas, el valor de cada cuota será: $` + (carritoTotal*(1.6))/cantCuotas);
//         }
//         else if (cantCuotas == 12){
//             alert (`Usted quiere abonó en ${cantCuotas} cuotas, el valor de cada cuota será: $` + (carritoTotal*(2.2))/cantCuotas);
//         }
//         else{
//             alert(`Por favor ingrese valores c  orrectos. 1, 3, 6 o 12`);
//         }
//     }
//     else alert(`Por favor ingrese valores correctos. 1 o 2`);

// alert(`Gracias por visitarnos`);


// function eliminarReloj(){
    
//     let confirmacion = prompt('Desea eliminar algún producto del carrito?');
//     if (confirmacion === "si"){
//         let relojEliminado = prompt('Que modelo desea eliminar ?');
//         carrito.forEach((reloj)=>{
//             if(reloj.modelo !== relojEliminado.toLocaleLowerCase()){
//                 carritoModificado = carrito.filter((reloj)=> reloj.modelo + " u$d " + reloj.precio);
//                 carritoModificado.forEach((reloj)=> console.log(reloj.modelo + " "+ reloj.precio));
//             }
//         })

//     }else if (confirmacion === "no"){
//         console.log(carrito);
//     }else ('Por favor indique si o no');
// }

// do{
//     eliminarReloj();
// } 
// while ( continuar = confirm("Desea eliminar otro??"));