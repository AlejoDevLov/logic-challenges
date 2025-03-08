/*
Enunciado Ejercicio 9:
Crea una función que reciba un array de números y calcule
la suma de todos los números pares del array
 
Ejemplos:
sumarPares([2, 13, 6, 15]);  // Resultado: 8
 
*/

( () => {

    function calculateSumEvenNums(numbers:number[]){
        let result = 0;
    
        numbers.forEach( number => {
            if ( number % 2 === 0 ){
                result += number;
            }
        });
    
        return result;
    }

    console.log(calculateSumEvenNums([2, 13, 6, 15, 11, 10, 4, 5]));

})()

