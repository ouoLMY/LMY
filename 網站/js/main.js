/* =========================================
   Mia's Diary
   main.js
   JavaScript Interaction
========================================= */



/* =========================================
   Loading Animation
========================================= */


window.addEventListener("load",()=>{


    const loading = document.querySelector(".loading");


    if(loading){


        setTimeout(()=>{


            loading.classList.add("hide");


        },800);


    }


});





/* =========================================
   Navbar Scroll Effect
========================================= */


const header = document.querySelector(".header");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 80){


        header.classList.add("active");


    }

    else{


        header.classList.remove("active");


    }


});





/* =========================================
   Scroll Reveal
========================================= */


const revealElements = document.querySelectorAll(

".section, .card, .gallery-grid img, .music-card"

);



const revealObserver = new IntersectionObserver(

(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("active");


        }


    });


},

{

    threshold:.15

}



);



revealElements.forEach(el=>{


    el.classList.add("reveal");


    revealObserver.observe(el);


});





/* =========================================
   Dark Mode
========================================= */


const themeBtn = document.querySelector("#themeBtn");



if(themeBtn){


themeBtn.addEventListener("click",()=>{


    document.body.classList.toggle("dark");



    const icon = themeBtn.querySelector("i");



    if(document.body.classList.contains("dark")){


        icon.className="ri-sun-line";


        localStorage.setItem(

            "theme",

            "dark"

        );


    }


    else{


        icon.className="ri-moon-line";


        localStorage.setItem(

            "theme",

            "light"

        );


    }



});


}




/* Load Saved Theme */


const savedTheme = localStorage.getItem("theme");


if(savedTheme==="dark"){


    document.body.classList.add("dark");



    const icon = document.querySelector("#themeBtn i");


    if(icon){


        icon.className="ri-sun-line";


    }


}






/* =========================================
   Hero Mouse Parallax
========================================= */


const hero = document.querySelector(".hero");

const heroContent = document.querySelector(".hero-content");



if(hero && heroContent){


hero.addEventListener(

"mousemove",

(e)=>{


    const x =

    (e.clientX / window.innerWidth - .5);



    const y =

    (e.clientY / window.innerHeight - .5);



    heroContent.style.transform =

    `
    translate(
    ${x * 20}px,
    ${y * 20}px
    )
    `;



});





hero.addEventListener(

"mouseleave",

()=>{


    heroContent.style.transform=

    "translate(0,0)";


});


}







/* =========================================
   Smooth Anchor Scroll
========================================= */


document.querySelectorAll(

'a[href^="#"]'

).forEach(anchor=>{


    anchor.addEventListener(

    "click",

    function(e){


        const target =

        document.querySelector(

            this.getAttribute("href")

        );


        if(target){


            e.preventDefault();



            target.scrollIntoView({

                behavior:"smooth"

            });


        }


    });


});






/* =========================================
   Current Year Footer
========================================= */


const year = document.querySelector(

"footer p"

);



if(year){


const date = new Date();


year.innerHTML =

`
© ${date.getFullYear()} Mia's Diary
`;



}