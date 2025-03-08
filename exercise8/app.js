/*
Enunciado Ejercicio 8:
Crea un algoritmo al cual le pase un número entero
y me lo convierta a número romano

Ejemplos:
enteroARomano(100)); // Resultado:  C
enteroARomano(345)); // Resultado: CCCXLV
 
*/
(function () {
    console.log('hello world');
    var I = 1;
    var V = 5;
    var X = 10;
    var L = 50;
    var C = 100;
    var D = 500;
    var M = 1000;
    // 150 = CL
    function convertIntToRoman(number) {
        var answer = [];
        var residualNumber = number;
        var i = 0, v = 0, x = 0, l = 0, c = 0, d = 0, m = 0;
        while (residualNumber !== 0) {
            if (residualNumber % M === 0 && m < 3) {
                residualNumber -= M;
                m++;
                answer.push('M');
            }
            else if (residualNumber % D === 0 && d < 3) {
                residualNumber -= D;
                d++;
                answer.push('D');
            }
            else if (residualNumber % C === 0 && c < 3) {
                residualNumber -= C;
                c++;
                answer.push('C');
            }
            else if (residualNumber % L === 0 && l < 3) {
                residualNumber -= L;
                l++;
                answer.push('L');
            }
            else if (residualNumber % X === 0 && x < 3) {
                residualNumber -= X;
                x++;
                answer.push('X');
            }
            else if (residualNumber % V === 0 && v < 3) {
                residualNumber -= V;
                v++;
                answer.push('V');
            }
            else if (residualNumber % I === 0 && i < 3) {
                residualNumber -= I;
                i++;
                answer.push('I');
            }
            // console.log('error', residualNumber);
        }
        // console.log(number % I);
        console.log({ answer: answer, residualNumber: residualNumber });
    }
    convertIntToRoman(2);
    // console.log('hola')
})();
