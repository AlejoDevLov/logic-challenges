/*
Enunciado Ejercicio 21:
Crea una función que reciba un numero y me genere una matriz
con el numero de columnas y filas que le hemos indicado por parámetro
 
Ejemplos:
generarMatriz(4);
 
Devuelve: 
[
  [ 1, 2, 3, 4 ],
  [ 5, 6, 7, 8 ],
  [ 9, 10, 11, 12 ],
  [ 13, 14, 15, 16 ]
]
 
*/

(() => {

    function createMatrix(size:number){

        let matriz: number[][] = [];

        for( let i=1; i <= size*size; i+=size ){
            const newRow = Array.from({length:size}, (v,index) => {
                return (i + index);
            });

            matriz.push(newRow);
        }

        return matriz;
    }

    console.log(createMatrix(4));

})();