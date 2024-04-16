export const  asyncAwaitComponent2 = async( element ) => {

    /* const value1 = await slowPromise();
    const value2 = await fastPromise(); */

    const [value1, value2] = await Promise.all([
        slowPromise(),
        fastPromise()
    ]);

    element.innerHTML = `${value1} - ${value2}`;
}

const slowPromise = () => new Promise( resolve => {
    setTimeout( () => {
        resolve('Slow promise');
    }, 2000);
});

const fastPromise = () => new Promise( resolve => {
    setTimeout( () => {
        resolve('Fast promise');
    }, 1000);
});

