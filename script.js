let leftarrow = document.querySelector("#leftarrow")
let rightarrow = document.querySelector("#rightarrow")

leftarrow.addEventListener('click', e =>{
    if(window.history.back()){
        window.history.back();
    }
    else{
        leftarrow.style.cursor="not-allowed"
    }
})
rightarrow.addEventListener('click', e =>{
    if(window.history.forward()){
        window.history.forward();
    }
    else{
        rightarrow.style.cursor="not-allowed"
    }
})

