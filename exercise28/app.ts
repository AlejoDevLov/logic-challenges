/*
Enunciado Ejercicio 28:
Crea una función que me diga si un número es armstrong o no.
 
Un número es armstrong si la suma de los cubos de sus dígitos es igual al número. 
Por ejemplo, el número 371 es armstrong porque 3^3 + 7^3 + 1^3 = 371.
 
Si la cifra es de 4 digitos, se eleva a 4, y si es de 5 a 5.
 
Ejemplos:
esArmstrong(371)  // Devuelve: true
*/

(() => {

    function isNumberArmstrong(number:number){

        const numberAsString = number.toString(); 
        let finalValue = 0;

        for( let i = 0; i < numberAsString.length; i++ ){
            finalValue += Number.parseInt(numberAsString[i])**numberAsString.length;
        }

        return finalValue === number
    }

    function isNumberArmstrong2(number:number){
        const unities = [100000, 10000, 1000, 100, 10, 1];
        const originalNumber = number;
        let unititesOfNumber:number[] = [];

        for( let i = 0; i < unities.length; i++ ){
            if( number >= unities[i] ){
                unititesOfNumber.push(Math.floor(number/unities[i]));
                number = number % unities[i];
            }
        }

        unititesOfNumber = unititesOfNumber.map( v => v**unititesOfNumber.length );

        let finalResult = 0;
        unititesOfNumber.forEach( v => finalResult += v );

        return originalNumber === finalResult;
    }

    // console.log(isNumberArmstrong(371));
    console.log(isNumberArmstrong2(1634));

})();