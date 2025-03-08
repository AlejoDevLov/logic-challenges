/*
Enunciado Ejercicio 19:
Crea una función que simule el lanzamiento de dos dados.
 
Ejemplos:
dados();
 
*/

(() => {

    function throwDices(){
        const dice1 = Math.ceil(Math.random() * 6);
        const dice2 = Math.ceil(Math.random() * 6);

        return [dice1, dice2];
    }


    console.log(throwDices());
    console.log(throwDices());
    console.log(throwDices());
    console.log(throwDices());

})();