/**
    * 2C = Two of Clubs 
    * 2D = Two of Diamons 
    * 2C = Two of Hearts 
    * 2C = Two of Spades 
*/

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugardor = 0,
    puntosComputadora = 0;

//Referencias del html
const puntosHTML = document.querySelectorAll('small');
const divCartasJugardor = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');

const crearDeck = () => {

    for( let i = 2; i <= 10; i++ ) {
         for( let tipo of tipos ) {
             deck.push( i + tipo );
         }  
    }

    for( let tipo of tipos ) {
        for( let esp of especiales ) {
            deck.push( esp + tipo );
        }
    }

    deck = _.shuffle( deck );


    return deck;
}

crearDeck();


const pedirCarta = () => {

    if( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }

    const carta = deck.pop();

    return carta;
}

const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;

}

//
const turnoCmputadora = (puntosMinimos) => {

    do {

        const carta = pedirCarta();

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerHTML =  puntosComputadora;

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`;
        imgCarta.classList.add('carta');
        divCartasComputadora.append(imgCarta);

        if(puntosMinimos > 21){
        
            break;
        }
        
     } while( (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21));

     if(puntosComputadora === puntosJugardor){
        alert('nadie Gana');
     }else if(puntosMinimos > 21){
        alert('Perdistes');
     }else if(puntosComputadora > 21){
        alert('ganastes');
     }else{
        alert('computadora Gana');
     }

}

const valor = valorCarta( pedirCarta() );


//Eventos 

btnPedir.addEventListener('click', () => {

    const carta = pedirCarta();

    puntosJugardor = puntosJugardor + valorCarta( carta );
    puntosHTML[0].innerHTML =  puntosJugardor;

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    divCartasJugardor.append(imgCarta);

    if( puntosJugardor > 21){
        console.warn('Perdistes');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoCmputadora(puntosJugardor);
    } else if ( puntosJugardor === 21){
        console.warn('Genial');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoCmputadora(puntosJugardor);
    }

});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoCmputadora(puntosJugardor)
});

btnNuevo.addEventListener('click', () => {
    deck = [];
    btnDetener.disabled = false;
    btnPedir.disabled = false;

    puntosComputadora = 0;
    puntosJugardor = 0;

    crearDeck();

    divCartasJugardor.innerHTML = '';
    divCartasComputadora.innerHTML = '';
    puntosHTML[0].innerHTML = 0;
    puntosHTML[1].innerHTML = 0;

});