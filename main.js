window.onscroll = function () {
  stickNavBar();
};
let content = document.getElementById("content");
let navbar = document.getElementById("nav");

let navPos = navbar.getBoundingClientRect().top;

window.addEventListener("scroll", (e) => {
  let scrollPos = window.scrollY;
  if (scrollPos > navPos) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});
