/*
Enunciado Ejercicio 27:
Crea una función a la cual le pasemos una frase y una palabra,
y busque si la palabra existe en la frase. Indistinto de mayusculas y minusculas.
 
Ejemplos:
buscarPalabra('Hola como estas', 'Hola')  // Devuelve: true
*/

(() => {

    function findWordInPhrase(phrase:string, word:string){
        return phrase.toLowerCase().includes(word.toLowerCase());
    }

    console.log(findWordInPhrase('Hello, how are you?', 'hello'))

})();