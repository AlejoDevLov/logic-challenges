/*
Enunciado Ejercicio 23:
Crea una función que a la cual le pase unos números en un array y me decodifique
el mensaje teniendo en cuenta que cada letra tiene un numero asignado.
 
Las letras del abecedario de la A a la Z tienen un número
por ejemplo la A es el numero 1 y la Z es el numero 26
 
Ejemplos:
decodificarMensaje([8, 15, 12, 1]);
 
Devuelve: 
HOLA
 
*/

(() => {

    // const lettersIndex = {
    //     1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e', 6: 'f',
    //     7: 'g', 8: 'h', 9: 'i', 10: 'j', 11: 'k', 12: 'l',
    //     13: 'm', 14: 'n', 15: 'o', 16: 'p', 17: 'q', 18: 'r',
    //     19: 's', 20: 't', 21: 'u', 22: 'v', 23: 'w', 24: 'x',
    //     25: 'y', 26: 'z'
    // }

    // const letters = [ 
    //     'a', 'b', 'c' ,'d', 'e', 'f',
    //     'g', 'h', 'i', 'j', 'k', 'l',
    //     'm', 'n', 'o', 'p', 'q', 'r',
    //     's', 't', 'u', 'v', 'w', 'x',
    //     'y', 'z'
    // ]

    function decodeMessage( code:number[] ){
        let decodedMessage = '';

        code.forEach( number => {
            // decodedMessage += letters[number-1];
            decodedMessage += String.fromCharCode( number + 96 );
        });

        return decodedMessage;
    }

    console.log(decodeMessage([8, 15, 12, 1]));

})();