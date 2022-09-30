//1. (MOST MODERN) USE ANONYMOUS (no name) function loaded allows for multiple listeners
let originalInput;
let convertBtn;
let output;


document.addEventListener("DOMContentLoaded", ()=>{
    //ADD OUR DEFERRED CODE HERE 
     originalInput = document.getElementById("originalInput");
     convertBtn = document.getElementById("convertBtn");
     output = document.getElementById("output");

     convertBtn.addEventListener("click", ()=>{
        output.value = (Number(originalInput.value) * (9 / 5)) + 32
     });
});

/*
//2. (HALFWAY MODERN)WE CAN USE ANONYMOUS FUNCTIONS WITH THE CLASSIC ONLOAD ALSO
window.onload = ()=>{
    //ADD OUR DEFERRED CODE HERE

}

//3. (OLD SCHOOL)
function init(){
    //ADD OUR DEFERRED CODE HERE

}
window.onload = init;
*/