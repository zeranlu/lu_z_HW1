(() => {

const characterBox = document.querySelector("#character-box");
const charURL = `https://swapi.info/api/people/`;
const filmURL = `https://swapi.info/api/films/`;
    
    function getCharacters() {
        fetch(`${filmURL}`)
        .then((res) => res.json())
        .then(function(res) {

            console.log(res);

            const characters = res;
            const ul = document.createElement("ul");

            characters.forEach((movie, index) => {
                console.log(`Film ${index + 1}: ${movie.title}: ${movie.episode_id}`)

                const li = document.createElement("li");
                const a = document.createElement("a");
                a.textContent = movie.title;
                li.appendChild(a);
                li.appendChild(a);

                ul.appendChild(li);
            })

            characterBox.appendChild(ul);
        })
        .then(function() {
            const links = document.querySelectorAll("movie")
        })
        .catch((error) => console.error(error))
    }
    

    getCharacters();

})();
