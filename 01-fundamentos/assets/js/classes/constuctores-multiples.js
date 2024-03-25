

class Persona {

    static porObjeto ( {nombre, apellido, pais} ) {
        return new Persona(nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo() {
        console.log( `info: ${ this.nombre }, ${ this.apellido }` )
    }

}


const nombre1 = 'Daniel',
      apellido1 = 'Miranda',
      pais = 'Venezuela';

const dani = {
    nombre: 'daniel',
    apellido: 'Miranda',
    pais: 'Venezuela'
}

const persona1 = new Persona(nombre1, apellido1, pais);
const persona2 = Persona.porObjeto( dani );

persona1.getInfo();
persona2.getInfo();