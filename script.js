let nav=document.querySelector("nav");
let scrollBtn=document.querySelector(".scroll-button a");
let val;


window.onscroll=function(){
    if(document.documentElement.scrollTop > 200){
        nav.classList.add("sticky");
        scrollBtn.style.display="block";
    }

    else{
        nav.classList.remove("sticky");
        scrollBtn.style.display="none";
    }
}


let body= document.querySelector("body");
let navBar= document.querySelector(".navbar");
let menuBtn= document.querySelector(".menu-btn");
let cancelBtn= document.querySelector(".cancel-btn");


menuBtn.onClick = function(){
    navBar.classList.add("active");
    menuBtn.style.opacity="0";
    menuBtn.style.pointerEvents="none";
    body.style.overflowX="hidden";
    scrollBtn.style.pointerEvents="none";
}


cancelBtn.onClick = function(){
    navBar.classList.remove("active");
    menuBtn.style.opacity= "1";
    menuBtn.style.pointerEvents= "auto";
    body.style.overflowX= "auto";
    scrollBtn.style.pointerEvents= "auto";
}

//sidebar nevigation bar closed while we c*/

let navLinks = documents.querySelectorAll(".menu li a");
for(var i=0;i<navLinks.length;i++){
    navLinks[i],addEventListener("click", function() {
        navBar.classList.remove("active");
        menuBtn.style.opacity="1";
        menuBtn.style.pointerEvents="auto";


    });
}
