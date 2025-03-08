/*
Enunciado Ejercicio 11:
 Crea una función a la cual le pase un array de numeros
 y un numero que será el resultado de la suma de dos de los valores
 
Ejemplos:
sumarDos([3, 7, 8, 2], 10) // [3, 7] (ambos suman 10)
sumarDos([4, 5, 9, 1], 10) // [9, 1]
sumarDos([1, 2, 3, 4], 5) // [2, 3]
 
*/

( () => {

    function findResultAddingTwoNumbers( numbers:number[], sum:number ){
        let i = 0;

        while( i < numbers.length ){
            for (let j = i+1; j < numbers.length; j++){
                if ( numbers[i] + numbers[j] === sum ){
                    return [numbers[i], numbers[j]];
                }
            }
            i++;
        }

    }

    console.log(findResultAddingTwoNumbers([1, 2, 3, 4], 6));

})();