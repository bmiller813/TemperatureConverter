let originalInput;
let convertBtn;
let output;


document.addEventListener("DOMContentLoaded", ()=>{
    //ADD OUR DEFERRED CODE HERE 
     originalInput = document.getElementById("originalInput");
     convertBtn = document.getElementById("convertBtn");
     output = document.getElementById("output");

     convertBtn.addEventListener("click", ()=>{
        output.value = (Number(originalInput.value) - 32) * (5 / 9)
     });
});