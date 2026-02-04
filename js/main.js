(() => {

const movieBox = document.querySelector("#movies-box");
const baseURL = `https://swapi.info/api/films/`;
    
    function getMovies() {
        fetch(`${baseURL}`)
        .then((res) => res.json())
        .then(function(res) {

            console.log(res);

            const movies = res;
            const ul = document.createElement("ul");

            movies.forEach((movie, index) => {
                console.log(`Film ${index + 1}: ${movie.title}: ${movie.episode_id}`)

                const li = document.createElement("li");
                const a = document.createElement("a");
                a.textContent = movie.title;
                li.appendChild(a);
                li.appendChild(a);

                ul.appendChild(li);
            })

            movieBox.appendChild(ul);

            



            
        })
        .catch((error) => console.error(error))
    }
    

    getMovies();

})();
