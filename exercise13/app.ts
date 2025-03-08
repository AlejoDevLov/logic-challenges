/*
Enunciado Ejercicio 13:
Crea una funcion que calcule el area de un cuadrado, un rectangulo o un triangulo
 
Ejemplos:
calcularAreaPoligono({ tipo: 'triangulo', base: 6, altura: 9 }); 
 
Devuelve: 27
 
*/


(() => {

    function calculateAreaPoligone( element: {type:string, base:number, high:number} ){
        const { type, base, high } = element;

        switch( type ){
            case 'triangle': return (base * high )/ 2;

            case 'square': return base * high;

            case 'rectangle': return base * high;
            
            default: return 'Type poligone does not exist. Try with triangle, square or rectangle'
        }
    }

    console.log(calculateAreaPoligone({type: 'triangle', base: 6, high: 9}));

})();