x=document.querySelectorAll("img").length
document.onmouseover = (e) => {
    const id = e.target.id
    switch (id) {
        case "image1":
            document.getElementById(id).src = './images/image1_2.jpg'
            console.log(id)
            break;

        case "image2":
            document.getElementById(id).src = './images/image2_2.jpg'
            break;

        case "image3":
            document.getElementById(id).src = './images/image3_2.jpg'
            break;
    
        case "image4":
            document.getElementById(id).src = './images/image4_2.jpg'
            break;

        case "image5":
            document.getElementById(id).src = './images/image5_2.jpg'
            break;
    
        default:
            break;
            
    }
}