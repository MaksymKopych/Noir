const header = document.querySelector(".header");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");
const drops = document.querySelector(".drops");
// const number = document.querySelector(".fone");

setTimeout(() => {
  header.classList.add("glow");
  drops.classList.add("dropsDown");
}, 500);
setTimeout(() => {
  header.style.opacity = 1;
  main.classList.add("glow");
  footer.classList.add("glow");
}, 1500);
setTimeout(() => {
  main.style.opacity = 1;
  footer.style.opacity = 1;
  drops.style.opacity = 0;
}, 3000);
