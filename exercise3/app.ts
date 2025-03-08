/*
Enunciado Ejercicio 3:
Dadas dos fechas, crea una función que me proporcione la diferencia de dias
entre ellas
 
Ejemplo:
diferenciaDeDias('Dec 1, 2023', 'Dec 24, 2023');  // Salida: 23
 
*/

(() => {

    const calculateDaysOfDates = ( date1:string, date2:string ) => {

        const msDate1 = new Date(date1).getTime();
        const msDate2 = new Date(date2).getTime();
    
        const daysElapsedDate1 = Math.floor(msDate1 / 86_400_000)
        const daysElapsedDate2 = Math.floor(msDate2 / 86_400_000)
        // console.log({msDate1, msDate2})

        const differenceOfDays = Math.abs(daysElapsedDate2 - daysElapsedDate1);

        if( isNaN(differenceOfDays) ) return `The format of dates is incorrect. Please use mm/dd/yyyy`;
        
        return `The difference of days between '${date1}' and '${date2}' is ${differenceOfDays} days`;

    }

    const result1 = calculateDaysOfDates('Dec 1, 2023', 'Dec 24, 2023');
    const result2 = calculateDaysOfDates('Feb 8 2024', 'Feb 15 2025');

    console.log({ result1, result2 });

})();