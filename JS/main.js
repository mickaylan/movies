function findMovieOrSeries() {
    const form = document.getElementById("search-form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const data = new FormData(event.target);
        const word = data.get("movie-name");

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2d419cfe04msh10b768da793aae3p1b41a4jsn66d1468ece3c',
                'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
            }
        };
        
        fetch(`https://online-movie-database.p.rapidapi.com/auto-complete?q=${word}`, options)
            .then(response => response.json())
            .then(data => {
                const movieList = data.d;

                movieList.map((movie) => {
                    const name = movie.l;
                    const url = movie.i.imageUrl;
                    let movies = `<li> <img src="${url}"> <h2>${name}</h2> </li>`
                    document.querySelector('.movie-list').innerHTML += movies;
                })
            })
            .catch(err => console.error(err));
    })
}

window.addEventListener('load', () =>{
    findMovieOrSeries();
})


