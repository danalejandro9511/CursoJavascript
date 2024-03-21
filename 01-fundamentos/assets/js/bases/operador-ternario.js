




const dia = 0;
const horaActual = 10;


let horaApertura;
let mensaje; //esta abierto, esta cerrado, hoy abrimos a las XX

horaApertura = ( [0,6].includes(dia) ) ? 9 : 11;

mensaje = (horaActual >= horaApertura) ? 'Esta abierto' : `Esta cerrado, hoy abrimos a las ${horaApertura}`;

console.log({mensaje});