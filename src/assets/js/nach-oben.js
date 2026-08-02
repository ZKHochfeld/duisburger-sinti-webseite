const button = document.querySelector(".nach-oben");

if (button) {
  window.addEventListener("scroll", () => {
    button.classList.toggle("ist-sichtbar", window.scrollY > 500);
  });

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
