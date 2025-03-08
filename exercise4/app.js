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
var lifes = 5;
var haveYouGuessedLetter = false;
var haveYouWon = false;
var word = 'alejo';
var emptyArray = Array.from({ length: word.length }, function (value) {
    return '_ ';
});
function hangingGame(word) {
    var lenghtOfWord = word.length;
    var spelledWord = word.split('');
    var letter = window.prompt('What is your word?') || '1';
    for (var i = 0; i < lenghtOfWord; i++) {
        if (letter === spelledWord[i]) {
            haveYouGuessedLetter = true;
            emptyArray.fill("".concat(letter, " "), i, i + 1);
        }
    }
    !haveYouGuessedLetter && lifes--;
    var answer = emptyArray.join('');
    haveYouGuessedLetter
        ? console.log("Well done!. \n Word: ".concat(answer, " Lifes: ").concat(lifes))
        : console.log("I\u00B4m sorry you failed. \n Word: ".concat(answer, " Lifes: ").concat(lifes));
    haveYouWon = word === answer.replaceAll(' ', '');
    haveYouGuessedLetter = false;
}
while (lifes > 0 && !haveYouWon) {
    hangingGame(word);
}
