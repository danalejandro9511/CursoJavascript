import { heroes } from './data/heroes';

export const promiseComponent = ( element ) => {
    


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