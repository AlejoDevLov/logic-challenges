/*
Enunciado Ejercicio 22:
Crea una función que invierta el orden de un texto
sin usar funciones nativas del lenguaje.
 
Ejemplos:
invertirTexto("Hola");
 
Devuelve: 
aloH
 
*/

(() => {

    function reverseString( word:string ){
        let reversedString:string = '';

        for ( let i = word.length-1; i >= 0; i-- ){
            reversedString += word[i];
        }

        return reversedString;
    }

    console.log(reverseString('alejo'));

})();