// Enunciado Ejercicio 18:
// Dado un array de usuarios, mostrar sólo los que tengan de 20 años en adelante
// y en su nombre tengan la letra "o" y "n"


// const usuarios = [
//     { nombre: 'Antonio', edad: 20 },
//     { nombre: 'Juan', edad: 23 },
//     { nombre: 'Pepe', edad: 12 },
//     { nombre: 'Raul', edad: 28 },
//     { nombre: 'Paco', edad: 38 },
//     { nombre: 'Jason', edad: 56}
//   ];
 
// Ejemplos:
// filtrarUsuarios(usuarios);
 
// Devuelve: 
// [
//     { nombre: 'Antonio', edad: 20 },
//     { nombre: 'Jason', edad: 56}
// ]
 
(() => {

    function filterUsers( users: {name:string, age:number}[] ){
        const usersFound = users.filter( user => {
            return user.age >= 20 && user.name.toLowerCase().includes('o') 
                                    && user.name.toLowerCase().includes('n')
        })

        console.log(usersFound);
    }

    const users = [
        { name: 'Antonio', age: 20 },
        { name: 'Juan', age: 23 },
        { name: 'Pepe', age: 12 },
        { name: 'Raul', age: 28 },
        { name: 'Paco', age: 38 },
        { name: 'Jason', age: 56}
      ];

    filterUsers(users);

})();