const slides=document.querySelectorAll(".slide");
let lenOfSlides=slides.length;
let slideIndex=0;
const prevButton=document.getElementById("prev");
const nextButton=document.getElementById("next");
document.addEventListener("DOMContentLoaded",init);
function init(){
    document.addEventListener("keydown",event=>{
        console.log(event);
        if(event.key==="ArrowLeft"){
            prevSlide();
        }
        else if(event.key==="ArrowRight"){
            nextSlide();
        }
    })
    slideIndex=0;
    slides.forEach(slide=>{
        slide.classList.add("hidden");
    });
    slides[slideIndex].classList.replace("hidden","currentVisible");
}


function nextSlide(){
    slides[slideIndex].classList.replace("currentVisible","hidden");
    slideIndex=(slideIndex+1)%lenOfSlides;
    slides[slideIndex].classList.replace("hidden","currentVisible");
    
}
function prevSlide(){
    slides[slideIndex].classList.replace("currentVisible","hidden");
    if(slideIndex==0)slideIndex=lenOfSlides-1;
    else {slideIndex--};
    
    slides[slideIndex].classList.replace("hidden","currentVisible");
}