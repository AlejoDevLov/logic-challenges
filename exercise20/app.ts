/*
Enunciado Ejercicio 20:
Crea una función que ordene un array de objetos en base a las propiedades
que le pase por parametro.
 
  const usuarios = [
    { nombre: 'Antonio', edad: 20 },
    { nombre: 'Juan', edad: 23 },
    { nombre: 'Pepe', edad: 12 },
    { nombre: 'Raul', edad: 28 },
    { nombre: 'Paco', edad: 38 },
    { nombre: 'Jason', edad: 56}
  ];
 
 
Ejemplos:
ordenarObjetos(usuarios, "edad");
 
*/

(() => {

    const users = [
        { name: 'Antonio', age: 20 },
        { name: 'Juan', age: 23 },
        { name: 'Pepe', age: 12 },
        { name: 'Raul', age: 28 },
        { name: 'Paco', age: 38 },
        { name: 'Jason', age: 56}
      ];


    function sortObjectByProperty( objects:{name:string, age:number}[], prop:string ){

        let typeProp;

        for ( let i = 0; i < objects.length; i++ ){
            if ( objects[i][prop] ){
                typeProp = typeof objects[i][prop];
                break;
            }
        }

        if( typeProp === 'string' ){
            return objects.sort( object => object[prop] );
        } else if ( typeProp === 'number' ) {
            return objects.sort( (a, b) => a[prop] - b[prop] );
        } else {
            return 'Property to filter is not included in the objects.'
        }

    }

    console.log(sortObjectByProperty(users, 'age'))

})();