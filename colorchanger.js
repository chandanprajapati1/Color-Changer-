const button = document.querySelectorAll('.button')
// console.log(button)
const body = document.querySelector('body')

button.forEach((item)=>{console.log(item)
item.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target);

    if(e.target.id === 'grey'){
        body.style.backgroundColor = "grey"
    }

    if(e.target.id === 'white'){
        body.style.backgroundColor = "white"
    }
    
    if(e.target.id === 'blue'){
        body.style.backgroundColor = "blue"
    }
    
    if(e.target.id === 'yellow'){
        body.style.backgroundColor = e.target.id
    }
    
})





})