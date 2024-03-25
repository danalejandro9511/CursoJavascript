

class Singleton  {

    static instancia;
    nombre = '';

    constructor( nombre = '' ) {
        const a = undefined;

        if( !!Singleton.instancia ){
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;


    }


}


const instancia = new Singleton('iroman');
const instancia2 = new Singleton('spiederman');

console.log(`nmmbre en la instacia 1 es: ${ instancia.nombre }`)
console.log(`nmmbre en la instacia 2 es: ${ instancia2.nombre }`)