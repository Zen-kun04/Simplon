

export function rightArrowEvent(){
    const rightArrow: HTMLElement | null = document.getElementById("right-arrow");
    if(rightArrow)    
    rightArrow.addEventListener('click', () => {
        console.log("derecha");
    });
}

export function leftArrowEvent(){
    const leftArrow: HTMLElement | null = document.getElementById("left-arrow");
    if(leftArrow)    
    leftArrow.addEventListener('click', () => {
        console.log("izquierda");
    });
}