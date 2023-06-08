const btnEl = document.querySelector(".btn"); /*selects the first element with the class "btn" in the document and assigns it to the btnEl variable*/

/*callback function calls when the "mouseover" event occurs. It logs the value of the pageX property of the event object to the console. The pageX property represents the horizontal coordinate of the mouse pointer relative to the whole document.*/
/*event.pageY represents the vertical coordinate of the mouse pointer relative to the whole document, and btnEl.offsetTop provides the distance between the top edge of the .btn element and its closest positioned ancestor*/
/*
btnEl.addEventListener("mouseover", (event)=>{
    console.log(event.pageY - btnEl.offsetTop);
});
*/
/*event.pageX represents the horizontal coordinate of the mouse pointer relative to the whole document, and btnEl.offsetLeft provides the distance between the left edge of the .btn element and its closest positioned ancestor*/
/*
btnEl.addEventListener("mouseover", (event)=>{
    console.log(event.pageX - btnEl.offsetLeft);
});
*/


/*the mouseover event listener is triggered when the mouse cursor enters the .btn element. Inside the event listener callback function, the horizontal distance from the left edge of the .btn element to the mouse cursor is calculated and stored in the X variable. Similarly, the vertical distance from the top edge of the .btn element to the mouse cursor is calculated and stored in the Y variable.

The calculated X and Y positions are then assigned to the CSS custom properties --xPos and --yPos respectively using the setProperty method. These custom properties can be used in CSS to apply visual effects or transformations based on the cursor position within the element*/
btnEl.addEventListener("mouseover", (event)=>{
    const X = (event.pageX - btnEl.offsetLeft);
    const Y = (event.pageY - btnEl.offsetTop);

    btnEl.style.setProperty("--xPos", X + "px");
    btnEl.style.setProperty("--yPos", Y + "px");
});