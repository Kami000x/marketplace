const connect = document.getElementById("connect")
const block = document.querySelector(".connect-block");
const header = document.getElementById("header")
const barr = document.querySelector(".bars")


connect.addEventListener("click", function (){
 
    block.classList.toggle("hidden")
    barr.classList.toggle("hidden")

    header.classList.toggle("hide")


});
