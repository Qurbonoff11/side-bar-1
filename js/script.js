/* DOCUMENT VARIABLE */
const $HTML = document;

/* GET ELEMENTS */
let menuBtn = $HTML.querySelector(".burger");
let closeMenuBtn = $HTML.querySelector(".close-btn");
let owerlay = $HTML.querySelector(".owerlay");
let sidebar = $HTML.querySelector(".side-bar");
let switchBtn = $HTML.querySelector(".switch-btn");
let modeText = $HTML.querySelector(".mode-text");
let moon = $HTML.querySelector(".moon");
let sun = $HTML.querySelector(".sun");
let navbar = $HTML.querySelector(".nav");
let section = $HTML.querySelector(".section");

/* OPEN SIDEBAR FUNCTION */
const openMenu = () => {
  sidebar.classList.remove("open-menu");
  owerlay.classList.remove("hidden");
};

/* CLOSE SIDEBAR FUNCTION */
const closeMenu = () => {
  sidebar.classList.add("open-menu");
  owerlay.classList.add("hidden");
};


menuBtn.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);

$HTML.addEventListener("keydown", (event) => {
  // console.log(event.key);

  if (event.key === "e" && sidebar.classList.contains("open-menu") && owerlay.classList.contains("hidden")) {
    openMenu()
  } else if (event.key === "x" && !sidebar.classList.contains("open-menu") && !owerlay.classList.contains("hidden")){
    closeMenu()
  }
})

/* DARK MODE & LIGHT MODE */
switchBtn.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar-light-mode");
  navbar.classList.toggle("nav-light-mode");
  section.classList.toggle("sec-light-mode");

  if (section.classList.contains("sec-light-mode")) {
    modeText.innerHTML = "Dark mode";

  } else {
    modeText.innerHTML = "Light mode";
  }

  if (section.classList.contains("sec-light-mode")) {
    sun.style.opacity = 0
    moon.style.opacity = 1
  } else {
    sun.style.opacity = 1
    moon.style.opacity = 0
  }
});