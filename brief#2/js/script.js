'use strict'

window.addEventListener('scroll', () => {
    const header = document.querySelector("header");
    const headerTitle = document.querySelector("header div p");
    const headerMenuButton = document.getElementsByClassName("material-symbols-outlined")[0];
    const headerMenuText = document.querySelectorAll("#nav-menu ul li a");
    if(window.scrollY > 20){
        header.classList.add("header-background");
        headerTitle.classList.add("header-title");
        for (var li_index in headerMenuText){
            if (typeof headerMenuText[li_index] == "object")
            headerMenuText[li_index].classList.add("header-text-menu-scroll");
            
        }
        
    }else{
        header.classList.remove("header-background");
        headerTitle.classList.remove("header-title");
        headerMenuButton.classList.remove("header-title");
        for (var li_index in headerMenuText){
            if (typeof headerMenuText[li_index] == "object")
            headerMenuText[li_index].classList.remove("header-text-menu-scroll");
        }
    }
});

window.addEventListener('load', () =>{
    var menu_toggled = false;
    var rotation = 0;
    document.querySelector("#menu-toggler").addEventListener('click', () => {
        console.log("si");
        rotation += 90;
        if (menu_toggled == false){
            menu_toggled = true;
            
            document.getElementById("menu-toggler").style = "transform: rotate(" + rotation + "deg);"
            document.getElementById("nav-menu").style = "display: flex;"
            document.getElementById("nav-menu").style = "flex-wrap: wrap;"
        }else{
            document.getElementById("menu-toggler").style = "transform: rotate(" + rotation + "deg);"
            document.getElementById("nav-menu").style = "display: none;"
            menu_toggled = false;
        }
    });
});