const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const icons = document.querySelectorAll(".bars-close");

hamburger.addEventListener("click", function () {
    const isVisible = mobileMenu.getAttribute("data-visible");

    if (isVisible == "true") {
        mobileMenu.setAttribute("data-visible", "false");
        icons[0].setAttribute("data-visible", "true");
        icons[1].setAttribute("data-visible", "false");



    } else {
        mobileMenu.setAttribute("data-visible", "true");
        icons[0].setAttribute("data-visible", "false");
        icons[1].setAttribute("data-visible", "true");


    }



})
const plus = document.querySelector("i.fa-plus");

const par = document.querySelector(".paragraph");
console.log(par)

plus.addEventListener("click", function () {

    const isclicked = par.getAttribute("data-visible");
    console.log(isclicked);
    if (isclicked == "true") {

        par.setAttribute("data-visible", "false");
    } else {
        par.setAttribute("data-visible", "true");

    }


})
