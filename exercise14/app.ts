/*
Enunciado Ejercicio 14:
Dada una cadena de texto, comprobar si es un palindromo o no. No usar funciones de
javascript, solo estructuras de control
 
Los palíndromos son palabras que se leen igual aun estando invertidas. 
Por ejemplo: ana, bob, otto, allivessevilla
 
Ejemplos:
esPalindromo("otto") // Devuelve: true
esPalindromo("victor") // Devuelve: false
 
*/

(() => {

    function isPalindrome( word:string ){
        let isItPalindrome = true;
        const wordLength = word.length;

        for( let i = 0; i < wordLength; i++ ){
            if( word[i] !== word[wordLength - 1 - i] ){
                isItPalindrome = false;
            }
        }

        return isItPalindrome;
    }

    console.log(isPalindrome('otto'))

})();