import { movieDB_image_uri, imageEvents } from "./script";

export function pageChangeEvent(element: HTMLParagraphElement, all_results: any[]) {
    const id_parsed = parseInt(element.id);
    
    if(typeof id_parsed !== "undefined" && id_parsed >= 0 && all_results.length > id_parsed){
        const selected_list = all_results[id_parsed];
        let search_img_container = document.querySelector("div#search-images-container");
        search_img_container?.remove();
        search_img_container = document.createElement('div');
        search_img_container.id = "search-images-container";
        if(search_img_container){
            selected_list.forEach((d) => {
                const img = document.createElement('img') as HTMLImageElement;
                if(d["backdrop_path"] !== null){
                    img.src = movieDB_image_uri + d["backdrop_path"];
                }else{
                    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQclJBjkZUvmktXLQQWF1HCW5lih1l8eg2M0w&usqp=CAU"
                }
                img.id = d.id;
                search_img_container!.appendChild(img);
            })
            document.querySelector("main")?.insertBefore(search_img_container, document.querySelector("main")?.lastChild!)
        }
        
        
    }
    imageEvents();
}

{
    const page_title = document.querySelector("header div#left-side p#brand");
    if(page_title){
        page_title.addEventListener('click', () => {
            location.reload();
        })
    }
}

{
    const span_search = document.querySelector("header div#right-side span#search");
    const input_search: HTMLInputElement | null = document.querySelector("header div#right-side input");
    if(span_search && input_search){
        span_search.addEventListener('click', () => {
            input_search.style.display = "unset";
            setTimeout(() => {
                input_search.focus();
                input_search.style.border = "1px solid white";
                input_search.style.width = "80px";
                input_search.style.paddingRight = "15px";
                input_search.style.marginRight = "20px";
            }, 1)
            
        })
    }
}

{
    const service_code_button = document.querySelector("footer button#service-code");
    if(service_code_button){
        service_code_button.addEventListener('click', () => {
            service_code_button.textContent = "666-666";
        })
    }
}

{
    const hamburger_icon: HTMLSpanElement | null = document.querySelector("span#hamburger");
    if(hamburger_icon){
        hamburger_icon.addEventListener('click', () => {
            if(document.querySelector("main div#hamburger-div-container") === null){
                const global_div: HTMLDivElement = document.createElement('div');
                global_div.id = "hamburger-div-container";
                global_div.style.marginLeft = "-500px";
                
                document.querySelector("main")?.insertBefore(global_div, document.querySelector("main")!.firstChild);
                setTimeout(() => {
                    global_div.style.marginLeft = "0px";
                }, 1)
                
            }else{
                const global_div = document.querySelector("main div#hamburger-div-container") as HTMLDivElement;
                global_div.style.marginLeft = "-500px";
                setTimeout(() => {
                    global_div.remove();
                }, 500)
                // setTimeout(() => {
                //     global_div.remove();
                // }, 1000)
                
            }
            
        })
    }
}