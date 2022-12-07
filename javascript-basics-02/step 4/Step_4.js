document.querySelector("button").onclick=()=>{
    
    if(confirm("Do you want to reset all information?:")==true){
        document.querySelectorAll("input").forEach(g => {g.value=null
            
        });
    }
    else{
        alert("please try again!")
    }
}