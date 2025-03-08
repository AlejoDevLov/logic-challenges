/*
Enunciado Ejercicio 5:
Dado un array de personas con nombres y apellidos
crear una función para ordenar el array por los apellidos
en orden alfabético
 
Ejemplo:
*/
const names = [
    "Víctor Robles",
    "Antonio Alcantara",
    "Al Pacino",
    "Robert DeNiro",
    "Brad Pitt",
    "Sylvester Stallone",
    "Alejandro Rios"
];  

const sortNamesAlphabetically = (names:string[]) => {
    const sortedNames:string[] = [];

    for (const name of names) {
        let separeteName = name.split(' ');
        separeteName = [separeteName[1], separeteName[0]];
        const joinedName = separeteName.join(' ');
        sortedNames.push(joinedName);
    }

    return sortedNames.sort();
};

console.log(sortNamesAlphabetically(names));