
const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Flash', 'Acuaman'];

for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

for (let i  in heroes) {
    console.log(heroes[i]);
}

for (let heroe of heroes){
    console.log(heroe);
}