/*
Enunciado Ejercicio 1:
Dado un array o un objeto de superhéroes de Marvel, haz un programa que pueda
mostrar la información de un superheroe.
 
Y añade una capacidad de buscar la información de varios superhéroes a la vez.
 
Ejemplo:
mostrarInformacionSuperheroe('Iron Man');
 
Salida:
Nombre real: Tony Stark
Poderes: Tecnología avanzada, Movilidad aérea
Equipo: Los vengadores
 
Ejemplo 2: 
mostrarInformacionSuperheroes([array de nombres]]);
 
Salida:
Muestra la información de todos los superheroes
*/


const infoSuperheroes = {
    'Iron Man': {
        nombreReal: 'Tony Stark',
        poderes: ['Tecnologia avanzada', 'Movilidad aérea'],
        equipo: 'Los vengadores'
    },
    'Capitán América': {
        nombreReal: 'Steve Rogers',
        poderes: ['Fuerza sobrehumana', 'Agilidad y reflejos sobresalientes'],
        equipo: 'Los vengadores'
    },
    'Thor': {
        nombreReal: 'Thor Odinson',
        poderes: ['Mjolnir', 'Viento y trueno'],
        equipo: 'Los vengadores'
    },
    'Spider-Man': {
        nombreReal: 'Peter Parker',
        poderes: ['Balanceo', 'Telarañas pegajosas', 'Sentido aracnido'],
        equipo: 'Los vengadores'
    },
    'Hulk': {
        nombreReal: 'Bruce Banner',
        poderes: ['Fuerza sobrehumana', 'Invulnerabilidad'],
        equipo: 'Los vengadores'
    }
};


const showSuperheroData = ( heroNames ) => {

    let herosResult = [];
    let heroResult = {};

    const typeDateOfHeroName = typeof heroNames;

    if( typeDateOfHeroName == 'object' ){
        const heroes = Object.keys(infoSuperheroes);
        heroes.forEach ( hero => {
        heroNames.forEach( heroName => {
            if( hero === heroName ){
                herosResult.push(infoSuperheroes[hero]); 
            }
            } )
        } )
        return herosResult;

    } else if( typeDateOfHeroName === 'string' ){
        const heroes = Object.keys(infoSuperheroes);
        heroes.forEach ( hero => {
            if( hero === heroNames ){
                heroResult = infoSuperheroes[hero]; 
            }
        } )
        return heroResult;
    }
}

console.log(showSuperheroData('Thor'));
