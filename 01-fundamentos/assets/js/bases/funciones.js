function saludar( nombre ) {
    console.log(arguments);
    console.log( 'Hola ' + nombre );
}

const saludar2 = function( nombre ) {
    console.log( 'Hola ' + nombre );
}

const saludarFlecha = () => {
    console.log('Hola Flecha');
}

const saludarFlecha2 = ( nombre ) => {
    console.log('Hola ' + nombre);
}

function sumar( a, b ) {
    return a + b;
}

const sumar2 = ( a, b ) => a + b;

function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log(getAleatorio2());