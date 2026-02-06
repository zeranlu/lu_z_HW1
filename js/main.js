(() => {

// connect to API and pull a list of 10 characters
// when user clicks, pull up a specific movie, include the title, poster image, and opening crawl.

// route 1: get character
// https://swapi.info/api/people/

// route 2: get a particular movie
// https://swapi.info/api/films/0

const characterBox = document.querySelector("#character-box");

const baseURL = `https://swapi.info/api/`
const charURL = `https://swapi.info/api/people/`;

const charID = [
        4, //vader
        12, //tarkin
        16, //jabba
        21, //palpatine
        22, //boba
        33, //nute
        44, //maul
        67, //dooku
        69, //jango
        79 //grievous
    ];

// const filmID = [
//     0, //A New Hope
//     1, //The Empire Strikes Back
//     2, //Return of the Jedi
//     3, //The Phantom Menace
//     4, //Attack of the Clones
//     5, //Revenge of the Sith
// ]

    function getCharacters() {

        const ul =  document.createElement("ul");
        characterBox.appendChild(ul);
        
        for (let i = 0; i < charID.length; i++) {
            
            fetch(`${charURL}${charID[i]}`)
            .then((res) => res.json())
            .then(character => {

                const li = document.createElement("li");
                const a = document.createElement("a");
                a.textContent = character.name;
                a.dataset.characterID = charID[i];
                a.href = "#";
                li.appendChild(a);
                ul.appendChild(li);
                
            })
            .then(() => {

                const links = document.querySelectorAll("#character-box li a");

                links.forEach(link => {
                    link.addEventListener("click", getMovies)
                })
            })
            .catch((error) => {
                console.error(error)
            })
        }
    }

    function getMovies(e) {
        const characterID = e.currentTarget.dataset.characterID;

        fetch(`${charURL}${characterID}`)
        .then((res) => res.json())
        .then(character => {
            
            const movieBox = document.querySelector("#movie-box");
            movieBox.innerHTML = "";

            console.log("respective movies called")

            character.films.forEach(film => {
                const li = document.createElement("li");
                const a = document.createElement("a");
                a.textContent = film;
                a.dataset.film = film;
                a.href = "#";
                li.appendChild(a);
                movieBox.appendChild(li);
            });

            const movieLinks = document.querySelectorAll("#movie-box li a");

            movieLinks.forEach(movieLink => {
                movieLink.addEventListener("click", getContent)
            });
        })
        .catch((error) => {
            console.error(error)
        })

    }

    function getContent(e) {

        const filmURL = e.currentTarget.dataset.film;

        fetch(filmURL)
        .then(res => res.json())
        .then(film => {
            const crawlBox = document.querySelector("#crawl-box");
            crawlBox.innerHTML = '';

            console.log("respective content called")

            const h3 = document.createElement("h3");
            h3.textContent = film.title;

            const desc = document.createElement("p");
            desc.textContent = `Released: ${film.release_date} | Directed by: ${film.director} | Produced by: ${film.producer}`;
            
            const crawl = document.createElement("p");
            crawl.textContent = film.opening_crawl;
            
            crawlBox.appendChild(h3);
            crawlBox.appendChild(desc);
            crawlBox.appendChild(crawl);
        })
        .catch((error) => {
            console.error(error)
        })
    }

    // Call the function to start
    getCharacters();

})();
