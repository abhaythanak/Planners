function CursorEffect (){
    let page1Content = document.querySelector("#page1-content");
    let Cursor = document.querySelector("#cursor");

     // page1Content.addEventListener("mousemove", function(e){
     //     Cursor.style.left = e.x+"px";
     //     Cursor.style.top = e.y+"px";
// })
page1Content.addEventListener("mousemove", function(e){
    gsap.to(Cursor,{
        x:e.x,
        y:e.y
    })
})
page1Content.addEventListener("mouseenter", function(e){
    gsap.to(Cursor,{
        scale:1,
        opacity:1
    })
})
page1Content.addEventListener("mouseleave", function(e){
    gsap.to(Cursor,{
        scale:0,
        opacity:0
    })
})
}
CursorEffect();