let div= document.createElement("div");
document.body.appendChild(div);
div.className = "displayBox";
var insert = document.querySelector(".displayBox");
var input = document.getElementById("name");
document.getElementById("name").onkeyup = function (){
    insert.innerHTML = input.value;
};