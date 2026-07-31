document.querySelector(".site-nav__toggle")?.addEventListener("click", (e) => {
  const list = document.querySelector(".site-nav__list");
  const offen = list.classList.toggle("ist-offen");
  e.currentTarget.setAttribute("aria-expanded", offen);
});
