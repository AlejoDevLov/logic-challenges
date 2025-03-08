/*
Enunciado Ejercicio 26:
Optimizar el gasto en mi gasolinera favorita.
 
Tiene dos opciones:
 
- Gasolina individual: Cuesta 10 euros por cada llenado.
- Tarjeta de socio: Cuesta 90 euros anuales pero cada vez que llenas 
te cuesta 8.2 euros el tanque pagas sólo el 78% del precio del llenado.
 
Cada vez que llenas el tanque, se paga el 78% del precio 
del llenado que pagaste la última vez hasta llegar a un descuento maximo
del 50%. Acumula el descuento (0.78 ** 3).
 
Hacer una función que, al pasarle las veces que voy a llenar el tanque, 
me diga si vale la pena comprar la tarjeta de socio o no.
 
Ejemplos:
deboSerSocio(15);
 
Devuelve: 
Como usuario casual te sale a: 150        
Como socio te sale a: 154.68487999999994 
No te sale a cuenta ser socio ser socio  
 
*/

(() => {

    function calculateGasolineConvenience( timesToFill: number ){
        const descountWithMembership = 0.78;
        const anualCostRegularPrice = 10 * timesToFill;
        let anualCostWithMembership = 90;


        for( let i = 1; i <= timesToFill; i++ ){
            let accruedDescount = descountWithMembership ** i;
            if( accruedDescount < 0.50 ){
                accruedDescount = 0.50;
            } 
            anualCostWithMembership += (8.2 * accruedDescount);
        }

        let response = `As casual user it would cost $${anualCostRegularPrice}\n`;
        response += `As associated it would cost ${anualCostWithMembership}\n`

        return anualCostRegularPrice < anualCostWithMembership 
            ? response + 'It is not recommended being associated.'
            : response + 'It is recommended being associated.'
    }

    console.log(calculateGasolineConvenience(15));

})();