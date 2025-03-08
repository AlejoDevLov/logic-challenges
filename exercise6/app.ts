/*
Enunciado Ejercicio 6:
Dado un año actual, crea un programa que me muestre 
los años bisiestos que habrá en los proximos 30 años
 
Ejemplo:
bisiestos(2023);
 
// Salida:
2024
2028
2032
2036
2040
2044
2048
2052
 
*/

( () =>{

    function calculateLeapYears( year:number ){

        let leapYears:number[] = [];
        const limitYears = 30;
        const daysWhenFebruaryIsLeap = 29;

        for ( let i = 0; i < limitYears; i++ ){
            const februaryDays = new Date(`feb-29-${year + i}`).getDate();
            februaryDays === daysWhenFebruaryIsLeap 
                && leapYears.push(new Date(`${year + i + 1}`).getFullYear());
        }

        console.log('Over next 30 years, the following years are going to be leap: ' + leapYears);
    }

    calculateLeapYears(2023);
})();