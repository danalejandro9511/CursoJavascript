import _ from 'underscore';

// Esta función crea un nuevo deck
export const crearDeck = (tiposDeCarta, tipoEspeciales) => {

    if(!tiposDeCarta || !tipoEspeciales) {
        throw new Error('No se han proporcionado los tipos de cartas');
    }

    let deck = [];
    
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tipoEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );

    return deck;
}