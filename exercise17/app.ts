/*
Enunciado Ejercicio 17:
Dada un array de frases, contar el número de palabras que tiene
 
Ejemplos:
contarPalabras([
                "Hola, soy Víctor Robles WEB",
                "Me gusta programar",
                "Y soy desarrollador web"
            ]);
 
Devuelve: 12
 
*/

(() => {

   function countTotalOfWords( phrases:string[] ){
    let totalOfWordsInPhrases = 0;

        for (const phrase of phrases) {
            const wordsOfPhrase = phrase.split(' ');
            totalOfWordsInPhrases += wordsOfPhrase.length;
        }

        return totalOfWordsInPhrases;
   } 

   console.log(countTotalOfWords([
    "Hola, soy Víctor Robles WEB",
    "Me gusta programar",
    "Y soy desarrollador web"
]))

})();