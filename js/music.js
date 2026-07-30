/* =========================================
   Background Music Player
========================================= */


const music =
document.querySelector("#bgMusic");


const musicBtn =
document.querySelector("#musicBtn");


const icon =
musicBtn.querySelector("i");
const record =
document.querySelector("#record");


let playing = false;



musicBtn.addEventListener(
"click",
()=>{


    if(!playing){


    music.play();



    icon.className =
    "ri-pause-fill";



    record.classList.add(
        "playing"
    );



    playing=true;


}

    else{


    music.pause();



    icon.className =
    "ri-play-fill";



    record.classList.remove(
        "playing"
    );



    playing=false;


}


});