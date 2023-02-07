let humberger = document.querySelector(".humberger");
let mainHead = document.querySelector(".main-head-desktop");
let spanHide = document.querySelector(".humberger .hide");
let span1 = document.querySelector(".humberger .span-1");
let span2 = document.querySelector(".humberger .span-2");
let links = document.querySelectorAll("nav .flex a");
humberger.addEventListener("click",menu);

Array.from(links).forEach((element) =>
    element.addEventListener("click",menu)
);

//munu function 

function menu (event) {
    humberger.classList.toggle("p-fixed");
    spanHide.classList.toggle("hidden");
    span1.classList.toggle("span-1-j");
    span2.classList.toggle("span-2-j");
    mainHead.classList.toggle("main-head-visible");
}

//humber ger clicked function 

