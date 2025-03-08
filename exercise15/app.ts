/*
Enunciado Ejercicio 15:
Dada un array de palabras, crear una función que lo devuelva ordenado
por la longitud de sus palabras de menor a mayor
 
Ejemplos:
ordenarPorLongitud([
  "Hola",
  "soy",
  "Víctor Robles",
  "como",
  "estas",
  "hoy",
  "amigo",
  "yo",
  "voy",
  "a",
  "estudiar",
  "ahora"
]);
 
*/

(() => {

    const arrayOfWords = [
        "Hola",
        "soy",
        "Víctor Robles",
        "como",
        "estas",
        "hoy",
        "amigo",
        "yo",
        "voy",
        "a",
        "estudiar",
        "ahora"
      ];

    // function sortArrayForLenghtOfWords( words: string[] ) {

    //     return words.sort( (a, b) => a.length - b.length );

    // }

    function sortArrayForLenghtOfWords2( words: string[] ) {

        let sortedArray:string[] = [];
        let isSorted = false;

        while( !isSorted ){

            for ( let i = 0; i < words.length; i++ ){
                if( words[i] <= words[i+1] ){
                    sortedArray.push(words[i]);
                    isSorted = true;
                } else {
                    // sortedArray = sortedArray.splice(i-1, 0, words[i]);
                    // isSorted = false;
                    // break;
                }
            }

        }

        return sortedArray;

    }

    console.log(sortArrayForLenghtOfWords2(arrayOfWords));

})();