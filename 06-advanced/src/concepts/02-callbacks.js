import { heroes } from "../data/heroes";

export const callbackComponent = ( element ) => {
    
    const id = '5d86371f25a058e5b1c8a65e';
    findHero( id , (hero) => {

        element.innerHTML = `
            <h1>${hero.name}</h1>
            <img src="${hero.picture}" alt="${hero.name}">
            <p>${hero.about}</p>
        `;
    });

}

const findHero = (id, callback) => {

    const hero = heroes.find( hero => hero.id === id );

    callback(hero);

}