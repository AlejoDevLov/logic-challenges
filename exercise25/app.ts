/*
Enunciado Ejercicio 24:
Crea una función a la cual le pasemos un array de nombres de archivo
y nos devuelva un array con esos mismos archivos, pero si hay alguno
duplicado debe estar númerado con un (numero de repeticiones)
como hacen los sistemas operativos.
 
Ejemplos:
renombrarArchivos(["nombre.jpg", "apellido.png", "nombre.txt", "nombre.txt"]);
 
Devuelve: 
[ 'nombre.jpg', 'apellido.png', 'nombre(1).txt', 'nombre(2).txt' ]
 
*/

(() => {

    function renameFiles( files:string[] ){
        let renamedFiles = {};

        for( let i = 0; i < files.length; i++ ){
            const partsOfString = files[i].split('.');
            
            if( !renamedFiles[files[i]] ){
                renamedFiles[files[i]] = 1;
            } else {
                const newName = `${partsOfString[0]}(${renamedFiles[files[i]]}).${partsOfString[1]}`;
                renamedFiles[newName] = 1;
                renamedFiles[files[i]] += 1;
            }
        }

        return Object.keys(renamedFiles);
    }

    console.log(renameFiles(["name.jpg", "lastName.png", "name.txt", "name.txt", "name.txt"]))

})();