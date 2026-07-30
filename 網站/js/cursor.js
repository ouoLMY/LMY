/* =========================================
   Click Ripple Effect
   水波點擊效果
========================================= */


document.addEventListener(
"click",
function(e){


    const ripple = document.createElement("span");


    ripple.className = "click-ripple";


    ripple.style.left =
    e.clientX + "px";


    ripple.style.top =
    e.clientY + "px";



    document.body.appendChild(ripple);



    setTimeout(()=>{


        ripple.remove();


    },800);



});