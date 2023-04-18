import { pageChangeEvent } from "./events";

require('dotenv').config()



const movieDB_token: string = process.env.TOKEN!;
export const movieDB_image_uri: string = "https://www.themoviedb.org/t/p/original";
const marvel_keyword: number = 180547;
const horror_comedy_keyword: number = 224636;
let copy_all_filtered_results: any[] = [];

const options = {method: 'GET'};





export function imageEvents(){
    const img = document.querySelectorAll("img");

    img.forEach((i) => {
        i.addEventListener('click', (e: Event) => {
            e.stopPropagation();
                
            // i.style.transform = "scale(5)";
            let random_div;
            let popup_info_container;
            if(!document.querySelector("div#popup-info-container")){ // Check if the popup is not already shown
                random_div = document.createElement('div') as HTMLDivElement;
                popup_info_container = document.createElement('div') as HTMLDivElement;
                random_div.id = "popup-info";
                popup_info_container.id = "popup-info-container";
                // popup_info_container.style.width = "100%"
                // popup_info_container.style.heigth = "100%"
                popup_info_container.appendChild(random_div)

                document.getElementsByTagName('main')[0].appendChild(popup_info_container);
                setTimeout(() => {
                    if(window.innerWidth <= 600){
                        random_div.style.width = "65%";
                        random_div.style.height = "100vw";
                    }else{
                        random_div.style.width = "40%";
                        random_div.style.height = "40vw";
                    }
                }, 200);
                random_div.appendChild(i.cloneNode(true));
            }else {
                document.querySelector('div#popup-info-container')?.remove();
                random_div = document.createElement('div') as HTMLDivElement;
                popup_info_container = document.createElement('div') as HTMLDivElement;
                random_div.id = "popup-info";
                popup_info_container.id = "popup-info-container";
                popup_info_container.appendChild(random_div)
                document.getElementsByTagName('main')[0].appendChild(popup_info_container);
                setTimeout(() => {
                    if(window.innerWidth <= 600){
                        random_div.style.width = "65%";
                        random_div.style.height = "100vw";
                    }else{
                        random_div.style.width = "40%";
                        random_div.style.height = "40vw";
                    }
                    
                }, 200);
                random_div.appendChild(i.cloneNode(true));
            }

            const movie_title_adult_div: HTMLDivElement = document.createElement('div');
            const movie_title: HTMLParagraphElement = document.createElement('p');
            const movie_adult: HTMLParagraphElement = document.createElement('p');
            const movie_overview: HTMLParagraphElement = document.createElement('p');
            const recommended: HTMLParagraphElement = document.createElement('p');
            const release: HTMLParagraphElement = document.createElement('p');
            const genres: HTMLParagraphElement = document.createElement('p');
            movie_overview.id = "movie-overview";
            getMovieInfo(i.id).then((data) => {                
                movie_title_adult_div.id = "movie-title-adult-container";
                movie_adult.textContent = "+18";
                movie_adult.id = "adult";
                recommended.textContent = `Recommended at ${Math.round(100 * (data.vote_average) / 10).toString()}%`;
                release.textContent = `Release date: ${data.release_date.split('-', 1)[0]}`;
                setTimeout(() => {
                    movie_title.textContent = data.title;
                    movie_title_adult_div.appendChild(movie_title);
                    if(data.overview)
                    movie_overview.textContent = data.overview;
                    else
                    movie_overview.textContent = "No description set.";

                    if(data.adult === true){
                        movie_title_adult_div.appendChild(movie_adult);
                    }
                    for(let genre of data.genres){
                        genres.textContent += `${genre.name}, `
                    }
                    random_div.appendChild(movie_title_adult_div);
                    random_div.appendChild(movie_overview);
                    random_div.appendChild(recommended);
                    random_div.appendChild(release);
                    random_div.appendChild(genres)
                }, 500)
                
                
            })
            
            
            
            
        })
    })
    
}

document.addEventListener('click', (e: Event) => {
    const clicked_item = e.target as HTMLElement;
    
    if((document.querySelector("div#popup-info") !== null) && clicked_item.id !== "popup-info" && clicked_item.parentElement?.id !== "popup-info" &&  clicked_item.parentElement?.id !== "movie-title-adult-container"){
        const popup = document.querySelector("div#popup-info") as HTMLDivElement;
        
        setTimeout(() => {
            popup.childNodes.forEach((node) => {
                const nodeA = node as HTMLElement;
                if(nodeA.tagName === "P")
                nodeA.style.opacity = "0";
    
                
            })
            popup.style.width = "0px";
            popup.style.height = "0px";
            
            
        }, 200)
        setTimeout(() => {
            popup.remove();
            document.querySelector("div#popup-info-container")?.remove();
        }, 450)
    }
})

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
    const first_carousel_movie_section = document.querySelectorAll("main > div.movie-list > div.carousel-container > div.carousel")[0] as HTMLDivElement;
    first_title_movie_section.textContent = "Marvel selection";
    movies["results"].forEach((movie) => {
        const poster_path: string = movie["backdrop_path"];
        const image: string = movieDB_image_uri + poster_path;
        const imgage_element: HTMLImageElement = document.createElement('img');
        imgage_element.src = image;
        imgage_element.id = movie.id;
        first_carousel_movie_section.appendChild(imgage_element);
        
    })
    imageEvents();
})


async function getHorrorComedyMovies() {
    const request = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${movieDB_token}&language=fr-FR&sort_by=popularity.desc&with_keywords=${horror_comedy_keyword}`, options)
    const data = await request.json();
    return data;
}

async function getMovieInfo(movie_id: number | string){
    const request = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${movieDB_token}&language=fr-FR`);
    const data = await request.json();
    return data
}

getHorrorComedyMovies().then((movies) => {
    const second_title_movie_section = document.querySelectorAll("main > div.movie-list > p.title")[1] as HTMLParagraphElement;
    const second_carousel_movie_section = document.querySelectorAll("main > div.movie-list > div.carousel-container > div.carousel")[1] as HTMLDivElement;
    second_title_movie_section.textContent = "The most terrifying laughs";
    
    movies["results"].forEach((movie) => {
        const poster_path: string = movie["backdrop_path"];
        const image: string = movieDB_image_uri + poster_path;
        const imgage_element: HTMLImageElement = document.createElement('img');
        imgage_element.src = image;
        imgage_element.id = movie.id;
        second_carousel_movie_section.appendChild(imgage_element);
        
    })
    imageEvents()
})

// async function getIDs(query: string){
//     const request = await fetch(`https://api.themoviedb.org/3/search/keyword?api_key=${movieDB_token}&query=${query}&page=1`, options)
//     const data = await request.json();
//     return data;
// }

async function getSearchResults(search: string){
    // const ids = await getIDs(search);
    
    let all_results = [];
    const request = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${movieDB_token}&language=fr-FR&query=${search}&page=1&include_adult=true`, options)
    await request.json().then((d) => {
        all_results = all_results.concat(d.results);
    });
    
    return all_results;
}

function pageChangeEventConnector(e: Event){
    pageChangeEvent(e.target as HTMLParagraphElement, copy_all_filtered_results);
}

const main_copy = document.getElementsByTagName('main')[0].cloneNode(true);
const search_div = document.querySelector("div#right-side") as HTMLSpanElement;
const search_input = document.querySelector("div#right-side input") as HTMLInputElement;
search_input.addEventListener('keypress', (e: KeyboardEvent) => {
    if(e.key === "Enter"){
        const value: string = search_input.value;
        if(value){
            // Not null
            let what_did_i_searched = document.querySelector("header > p#search-result-paragraph");
            if(!what_did_i_searched){
                what_did_i_searched = document.createElement('p');
                what_did_i_searched.id = "search-result-paragraph";
                document.getElementsByTagName('header')[0].insertBefore(what_did_i_searched, search_div);
            }
            
            
            const main = document.getElementsByTagName('main')[0];
            if(main){
                main.remove()
            }
            const new_main: HTMLElement = document.createElement('main');
            const search_img_container: HTMLDivElement = document.createElement('div');
            search_img_container.id = "search-images-container";
            getSearchResults(value.trim()).then((data) => {
                const all_filtered_results: any[] = [];
                let temporary_filtered_results: any[] = [];
                for(const res of data) {                    
                    if(temporary_filtered_results.length < 10 && !temporary_filtered_results.includes(res)){
                        temporary_filtered_results.push(res);
                    }
                    if(temporary_filtered_results.length >= 10){
                        all_filtered_results.push(temporary_filtered_results);
                        temporary_filtered_results = [];
                    }
                }
                if(temporary_filtered_results.length > 0){
                    all_filtered_results.push(temporary_filtered_results);
                    temporary_filtered_results = [];
                }
                if(all_filtered_results.length > 0){
                    what_did_i_searched!.textContent = `Results found for "${value}"`;
                    console.log(all_filtered_results);
                    
                    all_filtered_results[0].forEach((d) => {
                        const img = document.createElement('img') as HTMLImageElement;
                        if(d["backdrop_path"] !== null){
                            img.src = movieDB_image_uri + d["backdrop_path"];
                        }else{
                            img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQclJBjkZUvmktXLQQWF1HCW5lih1l8eg2M0w&usqp=CAU"
                        }
                        img.id = d.id;
                        
                        search_img_container.appendChild(img);
                    })
                }else{
                    what_did_i_searched!.textContent = `No results found for "${value}"`;
                    
                }
                new_main.appendChild(search_img_container);
                document.getElementsByTagName('body')[0].insertBefore(new_main, document.getElementsByTagName('footer')[0]);
                const pages_div_container: HTMLDivElement = document.createElement('div');
                pages_div_container.id = "pages-container";
                for(let i = 0; i < all_filtered_results.length; i++){
                    const page: HTMLParagraphElement = document.createElement('p');
                    page.classList.add("page_paragraph");
                    page.id = i.toString();
                    page.textContent = (i+1).toString();
                    pages_div_container.appendChild(page);
                    page.addEventListener('click', pageChangeEventConnector);
                }

                document.getElementsByTagName('main')[0].appendChild(pages_div_container);
                copy_all_filtered_results = [...all_filtered_results]
                all_filtered_results.length = 0;
                imageEvents();
            })
        }
    }
    
})


// Way to dynamically add the hamburger menu
// {
//     const width: number = window.innerWidth;
//     if (width <= 690){
//         const header: HTMLDivElement | null = document.querySelector("header div#left-side");
//         if(header){
//             const span: HTMLSpanElement = document.createElement('span');
//             span.id = "hamburger";
//             span.textContent = "\u2630";
//             header.insertBefore(span, header.firstChild);
//         }
//     }
// }
