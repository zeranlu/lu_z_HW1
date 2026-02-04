(() => {

const movieBox = document.querySelector("#movies-box");
const baseURL = `https://swapi.info/api/films/`;
    
    function getMovies() {
        fetch(`${baseURL}`)
        .then(response => response.json())
        .then(function(response) {
            console.log(response.episode_id)
        })
        .catch()
    }
    

    getMovies();

})();
