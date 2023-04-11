const arrow: HTMLElement = document.getElementById("arrow")!;
const lines: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("line") as HTMLCollectionOf<HTMLElement>;
let toggled: boolean = false;
const normalWidthFirst: number = lines[0].clientWidth;
const normalWidthSecond: number = lines[1].clientWidth;
arrow.addEventListener('click', () => {
    console.log("si");
    if(toggled){
        lines[0].style.rotate = "0deg";
        lines[1].style.rotate = "0deg";
        lines[0].style.width = normalWidthFirst + "px";
        lines[1].style.width = normalWidthSecond + "px";
        toggled = false;
    }else{
        lines[0].style.rotate = "45deg";
        lines[0].style.width = normalWidthFirst + "20px";
        lines[1].style.width = normalWidthSecond + "20px";
        lines[1].style.rotate = "-45deg";
        toggled = true;

    }
    
    
})