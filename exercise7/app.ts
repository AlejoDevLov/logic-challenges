/*
Enunciado Ejercicio 7:
Dada un array de enteros, detectar si esa lista
de números es una permutación del 1 al ultimo número del array.
 
En este caso una permutación es una secuencia de números
en orden sin que falte ninguno entre ellos.
 
Devolver el número faltante más grande.
 
El array puede venir desordenado.
 
Ejemplos:
permutacion([1, 2, 3, 4, 5])   // Devuelve: 5
permutacion([1, 2, 3, 5]))     // Devuelve: 4
 
*/

( () => {

    const array1 = [4, 4, 2, 1, 5, 7, 3, 6];
    const array2 = [1, 3, 2, 6, 20, 5, 10];

    function validateArray( array:number[] ){
        let isPermutedArray = true;
        let higherNoPermutedNumber = -1000;

        const sortedArray = array.sort( (a,b) => a-b );

        for ( let i = 0; i < sortedArray.length-1; i++ ){
            if ( sortedArray[i+1] !== sortedArray[i]+1 && sortedArray[i+1] !== sortedArray[i] ){
                isPermutedArray = false;
                if ( higherNoPermutedNumber < sortedArray[i]+1 ){
                    higherNoPermutedNumber = sortedArray[i+1]-1;
                }
            }
        }

        return isPermutedArray
            ? `The array is permuted. Its higher number is ${ sortedArray[sortedArray.length-1] }`
            : `The array is not permuted. The higher missing number is ${ higherNoPermutedNumber }`;
    }

    console.log(validateArray(array2));
})();