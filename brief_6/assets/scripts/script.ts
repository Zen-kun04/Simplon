require('dotenv').config()

const movieDB_token: string = process.env.TOKEN!;
const movieDB_image_uri: string = "https://www.themoviedb.org/t/p/original";
const marvel_keyword: number = 180547;
const horror_comedy_keyword: number = 224636;


const options = {method: 'GET'};

function changePage(path_to_html: string) {
    
}

async function getDiscoverMovie() {
    const request = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${movieDB_token}&language=fr-FR&sort_by=popularity.desc`, options)
    const data = await request.json();
    const movie = data["results"][0];
    return movie;
}

getDiscoverMovie().then((discovered_movie) => {
    const first_movie_banner = document.querySelector('div#first-movie') as HTMLDivElement;
    first_movie_banner.style.backgroundImage = `url("${movieDB_image_uri + discovered_movie["backdrop_path"]}")`;
    const first_movie_title = document.querySelector('div#first-movie > h1.title') as HTMLHeadingElement;
    first_movie_title.textContent = discovered_movie["title"];
})


async function getMarvelMovies() {
    const request = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${movieDB_token}&language=fr-FR&sort_by=popularity.desc&with_keywords=${marvel_keyword}`, options)
    const data = await request.json();
    return data;
}


getMarvelMovies().then((movies) => {
    const first_title_movie_section = document.querySelectorAll("main > div.movie-list > p.title")[0] as HTMLParagraphElement;
    const first_carousel_movie_section = document.querySelectorAll("main > div.movie-list > div.carousel")[0] as HTMLDivElement;
    first_title_movie_section.textContent = "Marvel selection";
    
    movies["results"].forEach((movie) => {
        console.log(movie);
        const poster_path: string = movie["poster_path"];
        const image: string = movieDB_image_uri + poster_path;
        const imgage_element: HTMLImageElement = document.createElement('img');
        imgage_element.src = image;
        first_carousel_movie_section.appendChild(imgage_element);
        
    })
})


async function getHorrorComedyMovies() {
    const request = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${movieDB_token}&language=fr-FR&sort_by=popularity.desc&with_keywords=${horror_comedy_keyword}`, options)
    const data = await request.json();
    return data;
}

getHorrorComedyMovies().then((movies) => {
    const second_title_movie_section = document.querySelectorAll("main > div.movie-list > p.title")[1] as HTMLParagraphElement;
    const second_carousel_movie_section = document.querySelectorAll("main > div.movie-list > div.carousel")[1] as HTMLDivElement;
    second_title_movie_section.textContent = "The most terrifying laughs";
    
    movies["results"].forEach((movie) => {
        console.log(movie);
        const poster_path: string = movie["poster_path"];
        const image: string = movieDB_image_uri + poster_path;
        const imgage_element: HTMLImageElement = document.createElement('img');
        imgage_element.src = image;
        second_carousel_movie_section.appendChild(imgage_element);
        
    })
})