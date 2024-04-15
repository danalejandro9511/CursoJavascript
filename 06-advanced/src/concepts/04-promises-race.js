export const promisesRaceComponent = ( element ) => {
    element.innerHTML = 'Loading...';
    const renderError = ( error ) => {
        element.innerHTML = error;
    }

    Promise.race([ slowPromise, fastPromise ])
        .then( ( response ) => {
            element.innerHTML = response;
        })
        .catch( ( error ) => {
            renderError( error );
        });
}

const slowPromise = new Promise( ( resolve, reject ) => {
    setTimeout( () => {
        resolve('Slow promise');
    }, 2000);
});

const fastPromise = new Promise( ( resolve, reject ) => {
    setTimeout( () => {
        resolve('Fast promise');
    }, 1000);
});

