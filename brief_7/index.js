let important_checkbox = document.getElementById("important-checkbox");

if(important_checkbox){
    
    important_checkbox.addEventListener('click', (e) => {
        let {checked} = important_checkbox;
        if(checked === true) {
            important_checkbox.nextSibling.textContent = "It's an important task";
        }else{
            important_checkbox.nextSibling.textContent = "Hell nah";
        }
    })
}