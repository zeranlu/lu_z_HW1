export function scrollTo() {

    const aboutLink = document.querySelector("#about-a");
        aboutLink.addEventListener("click", () => {
        gsap.to(window, {duration: 1, scrollTo:{y:"#about", offsetY:200}});
    });

    const charLink = document.querySelector("#char-a");
        charLink.addEventListener("click", () => {
        gsap.to(window, {duration: 1, scrollTo:{y:"#character-box", offsetY:200}});
    });

    const movieLink = document.querySelector("#movie-a");
        movieLink.addEventListener("click", () => {
        gsap.to(window, {duration: 1, scrollTo:{y:"#movie-", offsetY:200}});
    });

};