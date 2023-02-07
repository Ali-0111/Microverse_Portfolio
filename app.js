let humberger = document.querySelector(".humberger");
let mainHead = document.querySelector(".main-head-desktop");
let spanHide = document.querySelector(".humberger .hide");
let span1 = document.querySelector(".humberger .span-1");
let span2 = document.querySelector(".humberger .span-2");

humberger.addEventListener("click",function(event) {
    humberger.classList.toggle("p-fixed");
    event.stopPropagation();
    spanHide.classList.toggle("hidden");
    span1.classList.toggle("span-1-j");
    span2.classList.toggle("span-2-j");
    mainHead.classList.toggle("main-head-visible");
});