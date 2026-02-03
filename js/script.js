// Typing effect
const text = ["Python Developer", "Django Developer", "Full Stack Engineer"];
let i = 0, j = 0, deleting = false;
const typing = document.querySelector(".typing");

function type() {
  if (!deleting && j <= text[i].length) {
    typing.textContent = text[i].substring(0, j++);
  }
  if (deleting && j >= 0) {
    typing.textContent = text[i].substring(0, j--);
  }
  if (j === text[i].length) deleting = true;
  if (j === 0 && deleting) {
    deleting = false;
    i = (i + 1) % text.length;
  }
  setTimeout(type, deleting ? 60 : 120);
}
type();

// Scroll reveal
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});
