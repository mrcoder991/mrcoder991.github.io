const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".links");

console.log(hamburger)

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    links.classList.toggle("active");
}


function closeNav() {
    document.getElementById("hamburger").classList.remove("active");
    document.getElementById("links").classList.remove("active");
}

var typed = new Typed(".typing-text", {
    strings: ["Web Developer", "Frontend Developer", "Graphics Designer"],
    loop: true,
    typeSpeed: 60,
    backSpeed: 20,
    backDelay: 600,
  });