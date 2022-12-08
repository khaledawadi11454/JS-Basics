var idshow=document.querySelector('#show');
var idhide=document.querySelector('#hide');
var p=document.querySelector("p");
// Hide
idshow.onclick = ()=>{
p.style.display = "";
}
// Show again
idhide.onclick = ()=>{
p.style.display = "none";
}
