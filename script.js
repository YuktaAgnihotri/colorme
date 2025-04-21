let containers = document.querySelectorAll('.container')
let red = document.querySelector('#red')
let blue = document.querySelector('.blue')
let green= document.querySelector('.green')
let white= document.querySelector('.white')

console.log("hi");
function redd(){
    document.body.style.backgroundColor="red";
}
red.addEventListener('click',redd);

function bluee(){
    document.body.style.backgroundColor="blue";
}

blue.addEventListener('click',bluee);

function greenn(){
    document.body.style.backgroundColor="green";
}

green.addEventListener('click',greenn);

function whitee(){
    document.body.style.backgroundColor="white";
}

white.addEventListener('click',whitee);