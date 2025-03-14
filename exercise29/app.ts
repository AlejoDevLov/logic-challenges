/*
Enunciado Ejercicio 29:
Dado un array de objetos de peliculas de los años 80 y 90. 
 
Crea dos funciones:
- Una que las filtre por género
- y otra que las filtre por la decada en este formato 80s o 90s
 
Array de objetos a utilizar:
const peliculas = [
    { titulo: "Terminator", genero: "accion", anioLanzamiento: 1984 },
    { titulo: "Alien", genero: "ciencia ficción", anioLanzamiento: 1979 },
    { titulo: "Die Hard", genero: "accion", anioLanzamiento: 1988 },
    { titulo: "Predator", genero: "accion", anioLanzamiento: 1987 },
    { titulo: "Total Recall", genero: "ciencia ficción", anioLanzamiento: 1990 },
    { titulo: "RoboCop", genero: "ciencia ficción", anioLanzamiento: 1987 },
    { titulo: "Starship Troopers", genero: "ciencia ficción", anioLanzamiento: 1997 },
    { titulo: "The Fifth Element", genero: "ciencia ficción", anioLanzamiento: 1997 },
    { titulo: "Armageddon", genero: "accion", anioLanzamiento: 1998 },
    { titulo: "Deep Impact", genero: "ciencia ficción", anioLanzamiento: 1998 }
  ];
 
Ejemplos:
filtrarPorGenero(peliculas, "accion")
filtrarPorDecada(peliculas, "80s")
*/

(() => {


    interface Movies {
        title: string,
        genre: string,
        yearOfRelease: number,
    };

    const moviesList: Movies[] = [
        { title: "Terminator", genre: "accion", yearOfRelease: 1984 },
        { title: "Alien", genre: "ciencia ficción", yearOfRelease: 1979 },
        { title: "Die Hard", genre: "accion", yearOfRelease: 1988 },
        { title: "Predator", genre: "accion", yearOfRelease: 1987 },
        { title: "Total Recall", genre: "ciencia ficción", yearOfRelease: 1990 },
        { title: "RoboCop", genre: "ciencia ficción", yearOfRelease: 1987 },
        { title: "Starship Troopers", genre: "ciencia ficción", yearOfRelease: 1997 },
        { title: "The Fifth Element", genre: "ciencia ficción", yearOfRelease: 1997 },
        { title: "Armageddon", genre: "accion", yearOfRelease: 1998 },
        { title: "Deep Impact", genre: "ciencia ficción", yearOfRelease: 1998 }
      ];


    function filterByGenre(movies:Movies[], genre:string){
        genre = genre.toLowerCase().trim();
        return movies.filter( movie => movie.genre === genre);
    };

    function filterByYear(movies:Movies[], year:string){
        let fullYear:number;
        if(year==='80s'){
            fullYear = 1990;
        } else if( year==='90s' ){
            fullYear = 2000;
        } else {
            console.log('Year does not exist in the list');
            fullYear = 3000;
        }

        return movies.filter( movie =>{
            return movie.yearOfRelease < fullYear && movie.yearOfRelease >= fullYear - 10;
        } );
    }

    console.log(filterByGenre(moviesList, 'accion'))
    console.log(filterByYear(moviesList, '90s'))

})();