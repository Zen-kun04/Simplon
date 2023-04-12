import { movieDB_image_uri } from "./script";

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
                img.src = movieDB_image_uri + d["poster_path"];
                search_img_container!.appendChild(img);
            })
            document.querySelector("main")?.insertBefore(search_img_container, document.querySelector("main")?.lastChild!)
        }
        
        
    }
}