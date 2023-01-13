function active(){
    document.querySelector("nav").classList.toggle('nav_active')
    document.querySelector("svg").classList.toggle('svg-active')
    document.querySelector(".slots").classList.toggle('img-active')
}




/* Events fired on the drag target */
document.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("Text", event.target.id);
});



document.addEventListener("drag", function(event) {
});



/* Events fired on the drop target */
document.addEventListener("dragover", function(event) {
    event.preventDefault();
});



document.addEventListener("drop", function(event) {
    event.preventDefault();
    if ( event.target.className == "droptarget" ) {
        const data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    }
});


