import { heroes } from '../data/heroes';

export const promiseComponent = ( element ) => {
    
    const renderHero = ( hero ) => {
        element.innerHTML = hero.name;
    }

    const renderTwoHeros = ( hero1, hero2 ) => {
        element.innerHTML = `${hero1.name} and ${hero2.name}`;
    }

    const renderError = ( error ) => {
        element.innerHTML = error;
    }

    const id1 = '5d86371f25a058e5b1c8a65e';
    const id2 = '5d86371f233c9f2425f16916';

    Promise.all([ findHero(id1), findHero(id2) ]).then( ([ hero1, hero2 ]) => {
        renderTwoHeros(hero1, hero2);
    }).catch( renderError );

    /* let hero1;

    findHero(id1).then( hero => {
        hero1 = hero;
        return findHero(id2);
    }).then( hero2 => {
        renderTwoHeros(hero1, hero2);
    }).catch( renderError ); */
    
    //findHero(id1).then( renderHero ).catch( renderError );

}


const findHero = ( id ) => {

    return new Promise ( ( resolve, reject ) => {

        const hero = heroes.find( hero => hero.id === id );

        if( hero ) {
            resolve(hero);
            return;
        }

        reject('Hero not found');
        
    });

}