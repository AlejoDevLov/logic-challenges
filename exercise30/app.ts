/*
Enunciado Ejercicio 30:
Dado un array de numeros, permitir los numeros duplicados
un maximo de 2 veces y devolver la longitud del array.
 
Ejemplos:
eliminarDuplicados([4, 4, 4, 2, 2, 3]); // 5
eliminarDuplicados([6, 6, 2, 2, 2, 3]); // 5
eliminarDuplicados([1, 2, 3, 4, 9, 9, 9, 9]); // 6
*/

(() => {

    function deleteDuplicateNumbers( numbers:number[] ){
        let newNumbers:number[] = [];

        numbers.forEach( v => {         
            if( newNumbers.filter( v2 => v === v2).length < 2 )
                newNumbers.push(v);
            });

        return newNumbers;
    }

    console.log(deleteDuplicateNumbers([6, 6, 2, 2, 2, 3]));
})();