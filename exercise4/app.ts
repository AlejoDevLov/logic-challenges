/*
Enunciado Ejercicio 4:
Crea el juego del ahorcado.
El usuario tendrá que ir adivinando y descubriendo las letras de una palabra 
secreta, y tendrá 5 intentos (un intento por extremidad del cuerpo humano).
 
Utiliza el método de entrada de datos habitual de tu lenguaje,
en el caso de JS, usaremos la función prompt.
 
Ejemplo:
juegoDelAhorcado('victor');  
 
// Salida:
Adivina la letra: i
La palabra es: _i___
Te quedan 5 intentos
 
*/

let lifes = 5;
let haveYouGuessedLetter = false;
let haveYouWon = false;
const word = 'alejo';

let emptyArray = Array.from({length: word.length}, (value) => {
    return '_ ';
})


function hangingGame(word:string){
    const lenghtOfWord = word.length;
    let spelledWord = word.split('');

    const letter = window.prompt('What is your word?') || '1';

    for(let i = 0; i < lenghtOfWord; i++){
        if( letter === spelledWord[i] ){
            haveYouGuessedLetter = true;
            emptyArray.fill(`${letter} `, i, i+1);
        } 
    }

    !haveYouGuessedLetter && lifes--;

    const answer = emptyArray.join('');

    haveYouGuessedLetter 
        ? console.log(`Well done!. \n Word: ${answer} Lifes: ${lifes}`)
        : console.log(`I´m sorry you failed. \n Word: ${answer} Lifes: ${lifes}`)

    haveYouWon = word === answer.replaceAll(' ', '');
    
    haveYouGuessedLetter = false;
}

while( lifes > 0 && !haveYouWon ){
    hangingGame(word);
}
