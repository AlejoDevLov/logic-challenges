/*
Enunciado Ejercicio 24:
Crea una función a la cual le pasemos un array de nombres de archivo
y nos devuelva un array con esos mismos archivos, pero si hay alguno
duplicado debe estar númerado con un (numero de repeticiones)
como hacen los sistemas operativos.
 
Ejemplos:
renombrarArchivos(["nombre", "apellido", "nombre", "nombre"]);
 
Devuelve: 
[ 'nombre', 'apellido', 'nombre(1)', 'nombre(2)' ]
 
*/

(() => {

    function renameFiles( files:string[] ){
        let renamedFiles = {};

        for( let i = 0; i < files.length; i++ ){
            if( !renamedFiles[files[i]] ){
                renamedFiles[files[i]] = 1;
            } else {
                renamedFiles[files[i]+`(${renamedFiles[(files[i])]})`] = 1;
                renamedFiles[files[i]] += 1;
            }
        }

        return Object.keys(renamedFiles);
    }

    console.log(renameFiles(["name", "lastName", "name", "name"]))

})();