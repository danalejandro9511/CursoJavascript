function Persona( nombre, edad ){

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = () => console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);

}

const maria = new Persona('Maria', 25);

console.log(maria);
maria.imprimir();