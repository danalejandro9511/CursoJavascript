
function creaPersona ( nombre, apellido ) {
    return {
        nombre,
        apellido
    }
}

const persona = ( nombre, apellido )  => ({nombre,apellido});

console.log(persona('Daniel', 'Miranda'));

function imprimeArgumentos() {
    console.log(arguments);
}

const imprimeArgumentos2 = (edad, ...args) => {
    //console.log({edad, args});
    return args;
}

const [ casado, vivo, nombre, apellido ] = imprimeArgumentos2(10 , true, false, 'Daniel', 'Miranda');
//imprimeArgumentos2(10 , true, false, 'Daniel', 'Miranda');

const { apellido: nuevoApellido } = creaPersona('Daniel', 'Miranda');
console.log({nuevoApellido});

let tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

const imprimePropiedades = ( { nombre, codeName, vivo, edad, trajes} ) => ({nombre, codeName, vivo, edad, trajes});

console.log(imprimePropiedades(tony));