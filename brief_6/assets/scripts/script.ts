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
        const poster_path: string = movie["poster_path"];
        const image: string = movieDB_image_uri + poster_path;
        const imgage_element: HTMLImageElement = document.createElement('img');
        imgage_element.src = image;
        second_carousel_movie_section.appendChild(imgage_element);
        
    })
})

async function getIDs(query: string){
    const request = await fetch(`https://api.themoviedb.org/3/search/keyword?api_key=${movieDB_token}&query=${query}&page=1`, options)
    const data = await request.json();
    return data;
}

async function getSearchResults(search: string){
    const ids = await getIDs(search);
    console.log(ids);
    
    let a = [];
    console.log('start');
    for(const res of ids.results) {
        
        
        const request = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${movieDB_token}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_keywords=${res.id}&with_watch_monetization_types=flatrate`, options)
        await request.json().then((d) => {
            a = a.concat(d.results);
        });
        console.log(a);
        
        
    }
    console.log('Finito');
    
    return a;
    
}

const main_copy = document.getElementsByTagName('main')[0].cloneNode(true);
const search_input = document.querySelector("input#right-side") as HTMLInputElement;
search_input.addEventListener('keypress', (e: KeyboardEvent) => {
    if(e.key === "Enter"){
        const value: string = search_input.value;
        if(value){
            // Not null
            let what_did_i_searched = document.querySelector("header > p#search-result-paragraph");
            if(!what_did_i_searched){
                what_did_i_searched = document.createElement('p');
                what_did_i_searched.id = "search-result-paragraph";
                document.getElementsByTagName('header')[0].insertBefore(what_did_i_searched, search_input);
            }
            what_did_i_searched.textContent = `Results found for "${value}"`;
            
            document.getElementsByTagName('main')[0].remove();
            const new_main: HTMLElement = document.createElement('main');
            const search_img_container: HTMLDivElement = document.createElement('div');
            search_img_container.id = "search-images-container";
            getSearchResults(value.trim()).then((data) => {
                data.forEach((d) => {
                    const img = document.createElement('img') as HTMLImageElement;
                    img.src = movieDB_image_uri + d["poster_path"];
                    search_img_container.appendChild(img);
                })
                new_main.appendChild(search_img_container);
                document.getElementsByTagName('body')[0].insertBefore(new_main, document.getElementsByTagName('footer')[0]);
            })
        }
    }
    
})
