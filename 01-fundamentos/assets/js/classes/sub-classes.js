class Persona {

    static _conteo = 0;
    static get conteo () {
        return Persona._conteo + ' instancias';
    }
    
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre, codigo, frase) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    //no pudden tener el mismo nombre
    set setComidaFavorita( comida ) {
        this.comida = comida;
    }  

    get getComidaFavorita () {
        return `La comida favorita de ${ this.nombre } es ${ this.comida }`
    }

    quienSoy() {
        console.log(` Soy ${ this.nombre } y mi identidad es ${ this.codigo }`)
    }

    miFrase(){
        this.quienSoy();
    }

}

class Heroe extends Persona{
    
    clan = 'sin clan';

    constructor(nombre, codigo, frase){
        super(nombre, codigo, frase);

        this.clan = 'Avenger';
    }

    quienSoy() {
        console.log(` Soy ${ this.nombre }, ${ this.clan }`);
        super.quienSoy();
    }

}

const spiderman = new Heroe('Daniel', 'EL Guapo', 'Hola como estas');;

console.log(spiderman);