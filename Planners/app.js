let page1Content = document.querySelector("#page1-content");
let Cursor = document.querySelector("#cursor");

page1Content.addEventListener("mousemove", function(e){
    Cursor.style.left = e.x+"px";
    Cursor.style.top = e.y+"px";
})