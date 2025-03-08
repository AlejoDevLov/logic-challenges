/*
Enunciado Ejercicio 2:
Dada una ruta absoluta de un archivo (de un sistema linux o basado en unix)
crear una función que la simplifique

Ejemplo:
simplificarRuta("/home/");             // Salida: /home
simplificarRuta("/x/./y/../../z/");    // Salida: /z
simplificarRuta("/../");               // Salida: /
simplificarRuta("/home//pruebas/");    // Salida: /home/pruebas

*/

(() => {

    const path:string = "/home/";
    
    function simplifyPath(pathArg:string){
    
        // Identify index of slashes to be subsequently divided 
        let indexOfLastSlash:number = pathArg.length - 1;
        let indexOfFirstSlash:number = 0;
        let indexOfSecondSlash = indexOfFirstSlash;
        let indexOfMiddleSlash:number = -1;
    
        for(let i = 0; i < pathArg.length; i++ ){
            
            // Verify if there are double slash together
            if(pathArg[i] === '/' && i === indexOfFirstSlash + 1){
                indexOfMiddleSlash = i;
                continue;
            }
            
            if(pathArg[i] === '/' && i !== indexOfLastSlash ){
                indexOfSecondSlash = indexOfFirstSlash;
                indexOfFirstSlash = i
            }
        }
    
        if( indexOfMiddleSlash !== -1 ){
            const simplifiedPath = path.slice(indexOfSecondSlash, indexOfLastSlash);
            return simplifiedPath.replace('//', '/').replace('..', '');
        }

        return pathArg.slice(indexOfFirstSlash, indexOfLastSlash).replace('..', '');
    }


    console.log(simplifyPath(path));
})();