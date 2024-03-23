const miModulo = (() => {
    'use strict';

    
    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'],
          especiales = ['A', 'J', 'Q', 'K'];
/* 
    let puntosJugardor = 0,
        puntosComputadora = 0; */
     let puntosJugadores = [];

    //Referencias del html
    const puntosHTML = document.querySelectorAll('small'),
          divCartasJugadores = document.querySelectorAll('.divCartas'),
          /* divCartasJugardor = document.querySelector('#jugador-cartas'),
          divCartasComputadora = document.querySelector('#computadora-cartas'), */
          btnPedir = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener'),
          btnNuevo = document.querySelector('#btnNuevo');

    const incializarJuego = ( numJugadores = 2) => {
        deck = crearDeck();

        puntosJugadores = [];
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);    
        }

        puntosHTML.forEach( elem => elem.innerText = 0);
        divCartasJugadores.forEach( elem => elem.innerHTML = '');

        btnPedir.disabled = false;
        btnDetener.disabled = false;

    }

    const crearDeck = () => {

        deck = [];

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

        return _.shuffle( deck );
    }


    const pedirCarta = () => {

        if( deck.length === 0 ) {
            throw 'No hay cartas en el deck';
        }

        return deck.pop();
    }

    const valorCarta = ( carta ) => {

        const valor = carta.substring(0, carta.length - 1);
        return ( isNaN( valor ) ) ? 
                ( valor === 'A' ) ? 11 : 10
                : valor * 1;

    }

    const acumularPuntos = (carta, turno ) => {


        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );
        puntosHTML[turno].innerHTML =  puntosJugadores[turno];

        return puntosJugadores[turno];
    }

    const crearCarta = (carta, turno) => {
    
        const imgCarta = document.createElement('img');
            imgCarta.src = `assets/cartas/${ carta }.png`;
            imgCarta.classList.add('carta');
            divCartasJugadores[turno].append(imgCarta);
            //divCartasComputadora.append(imgCarta);

    }

    const determinarGanador = () => {

        const [ puntosMinimos, puntosComputadora ] = puntosJugadores;

        if(puntosMinimos > 21){
            alert('Perdistes');
        }else if(puntosComputadora > 21){
            alert('ganastes');
        }else{
            alert('computadora Gana');
        }
    }

    //
    const turnoCmputadora = (puntosMinimos) => {

        let puntosComputadora = 0;

        do {

            const carta = pedirCarta();

            puntosComputadora = acumularPuntos( carta, puntosJugadores.length - 1);
            crearCarta( carta, puntosJugadores.length - 1);
            
        } while( (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21));

        determinarGanador();
        /* if(puntosComputadora === puntosJugardor){
            alert('nadie Gana');
        }else if(puntosMinimos > 21){
            alert('Perdistes');
        }else if(puntosComputadora > 21){
            alert('ganastes');
        }else{
            alert('computadora Gana');
        } */

    }

    //const valor = valorCarta( pedirCarta() );


    //Eventos 

    btnPedir.addEventListener('click', () => {

        const carta = pedirCarta();
        const puntosJugardor = acumularPuntos( carta, 0);

        crearCarta( carta, 0);

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
        turnoCmputadora(puntosJugadores[0]);
    });

    btnNuevo.addEventListener('click', () => {
        incializarJuego();

    });


    return {
        nuevoJuego: incializarJuego
    }

})();