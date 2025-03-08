/*
Enunciado Ejercicio 12:
Crea un programa que cuente las veces que cada palabra se repite en un texto
 
Ejemplos:
contarPalabras("El perro de san roque no tiene el rabo 
porque es un perro muy muy malo");
 
Devuelve:
{
  el: 2,
  perro: 2,
  de: 1,
  san: 1,
  roque: 1,
  no: 1,
  tiene: 1,
  rabo: 1,
  porque: 1,
  es: 1,
  un: 1,
  muy: 2,
  malo: 1
}
*/

( () => {

    const textExample = "El perro de san roque no tiene el rabo porque es un perro muy muy malo"

    function countWordsInText( text:string ){
        const words = text.toLowerCase().split(' ');

        let wordsAsAnObject = {};

        words.forEach( word => {
            if( word in wordsAsAnObject ){
                wordsAsAnObject[word]++;
            } else {
                wordsAsAnObject[word] = 1;
            }
        });

        return wordsAsAnObject;

    }

    console.log(countWordsInText(textExample));

})();