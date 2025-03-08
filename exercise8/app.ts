/*
Enunciado Ejercicio 8:
Crea un algoritmo al cual le pase un número entero
y me lo convierta a número romano

Ejemplos:
enteroARomano(100)); // Resultado:  C
enteroARomano(345)); // Resultado: CCCXLV
 
*/

( () => {
    // console.log('hello world');

    const I = 1;
    const V = 5;
    const X = 10;
    const L = 50;
    const C = 100;
    const D = 500;
    const M = 1000;

    const romanNumerals   = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    const naturalNumerals = [ 1000, 900, 500, 400, 100,  90,  50,   40,   10,   9,   5,   4,    1 ];
    
    function convertIntToRoman2( num:number ) {
        let romanNumeralAnswer = '';
        
        for ( let i = 0; i < romanNumerals.length; i++ ){
            if ( num === 0 ) break;

            while( num >= naturalNumerals[i] ){
                romanNumeralAnswer += romanNumerals[i];
                num -= naturalNumerals[i];
            }
        }

        return romanNumeralAnswer;
    }
    
    function convertIntToRoman( number:number ){
        let answer:string[] = [];
        let residualNumber = number;
        let i:number = 0, v:number = 0, x:number = 0, l:number = 0, c:number = 0, d:number = 0, m:number = 0; 
        

        while( residualNumber !== 0 ){

            if ( residualNumber >= M && m < 3 || residualNumber >= M-D ){
                if ( residualNumber >= M-D ){
                    residualNumber -= M-D;
                    d++;
                    answer.push('D','M');
                } else{
                    residualNumber -= M;
                    m++;
                    answer.push('M');
                }
            } else if ( residualNumber >= D && d < 3 || residualNumber >= D-C ){
                if ( residualNumber >= D-C ){
                    residualNumber -= D-C;
                    d++;
                    answer.push('C','D');
                } else {
                    residualNumber -= D;
                    d++;
                    answer.push('D');
                }
            } else if ( residualNumber >= C && c < 3 || residualNumber >= C-L ){
                if(residualNumber >= C-L){
                    residualNumber -= C-L;
                    c++;
                    answer.push('L','C');
                } else{
                    residualNumber -= C;
                    c++;
                    answer.push('C');
                }
            } else if ( residualNumber >= L && l < 3 || residualNumber >= L-X ){
                if ( residualNumber >= L-X ){
                    residualNumber -= L-X;
                    l++;
                    answer.push('X','L');
                } else{
                    residualNumber -= L;
                    l++;
                    answer.push('L');
                }
            } else if ( residualNumber >= X && x < 3 || residualNumber === X-1 ){
                if ( residualNumber === X-1 ){
                    residualNumber = 0;
                    x++;
                    answer.push('I','X');
                } else{
                    residualNumber -= X;
                    x++;
                    answer.push('X');
                }
            } else if ( residualNumber >= V && v < 3 || residualNumber === V-1 ){
                if ( residualNumber === V-1 ){
                    residualNumber = 0;
                    v++;
                    answer.push('I','V');
                } else{
                    residualNumber -= V;
                    v++;
                    answer.push('V');
                }
            } else if ( residualNumber >= I && i < 3 ){
                residualNumber -= I;
                i++;
                answer.push('I');
            }

            // console.log('error', residualNumber);
        }

        // console.log(number % I);
        console.log({answer, residualNumber});
    }

    console.log(convertIntToRoman2(99));
    // console.log(2%5)
})();