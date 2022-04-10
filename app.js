const header = document.querySelector(".header");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");

setTimeout(() => {
  header.classList.add("glow");
}, 500);
setTimeout(() => {
  header.style.opacity = 1;
  main.classList.add("glow");
  footer.classList.add("glow");
}, 1500);
setTimeout(() => {
  main.style.opacity = 1;
  footer.style.opacity = 1;
}, 3000);
