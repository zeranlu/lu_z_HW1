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
const filmURL = `https://swapi.info/api/films/`;
    
    function getCharacters() {

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
        const ul =  document.createElement("ul");
        
        charID.forEach(id => {

            fetch(`${charURL}${id}`)
            .then((res) => res.json())
            .then(character => {

                const li = document.createElement("li");
                const a = document.createElement("a");
                a.textContent = character.name;
                li.appendChild(a);
                ul.appendChild(li);
                
                characterBox.appendChild(ul)
            })
            .then(() => {
                //attach an event listener to each link, calls a new function that makes the second AJAX call
                // function name is getMovie();
            })
            .catch((error) => {
                console.error(error)
            })
        })
    }

    function getMovie() {

        // need to extract data attribute either using event object or "this"
        fetch(`${filmURL}`)
        .then((res) => res.json())
        .then((movie) => {

            // console.log(`img.src="images/poster-${movie.episode_id}.jpg"`);
            // console.log(movie.title);
            // console.log(movie.opening_crawl);
        })
        .catch((error) => {
            console.error(error)
        })
    }
    
    getMovie();

    // Call the function to start
    getCharacters();

})();
