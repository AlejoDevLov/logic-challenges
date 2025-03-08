/*
Enunciado Ejercicio 16:
Crea una función que meta en una caja de asteriscos la frase 
que le pasemos por parametro
 
Ejemplos:
mostrarTextoCaja('Hola soy Víctor Robles WEB');
 
**********
* Hola   *
* soy    *
* Víctor *
* Robles *
* WEB    *
**********
 
*/

(() => {

    function insertPhraseInAsteriscsBox( phrase ){

        const words = phrase.split(' ');
        const arrayOfWords = [];
        let maxLargeWord = 0;

        words.forEach( v => {
            if( v.length > maxLargeWord ){
                maxLargeWord = v.length;
            };
        });

        maxLargeWord += 4;

        for( let i = 0; i < words.length; i++ ){

            const newWordAsArray = Array.from({length: maxLargeWord}, (v, index) => {
                if(index === 0){
                    return '*';
                } else if( index === maxLargeWord - 1 ){
                    return '*\n';
                } else {
                    return ' ';
                }
            });

            for( let j = 0; j < words[i].length; j++ ){
                newWordAsArray.splice(2+j, 1, words[i][j])
            }

            arrayOfWords.push(newWordAsArray);
        }

        console.log(`${'*'.repeat(maxLargeWord)} \n${arrayOfWords.flat().join('')}${'*'.repeat(maxLargeWord)}`);
    }


    insertPhraseInAsteriscsBox('Hola soy Víctor Robles WEB y Alejandro');

})();