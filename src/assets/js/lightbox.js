(function () {
  const overlay = document.createElement("div");
  overlay.className = "lightbox";
  overlay.setAttribute("aria-hidden", "true");
  overlay.innerHTML = `
    <button class="lightbox__schliessen" aria-label="Schließen">&times;</button>
    <button class="lightbox__pfeil lightbox__pfeil--zurueck" aria-label="Vorheriges Foto">&#8249;</button>
    <img class="lightbox__bild" alt="">
    <button class="lightbox__pfeil lightbox__pfeil--vor" aria-label="Nächstes Foto">&#8250;</button>
    <p class="lightbox__zaehler"></p>
  `;
  document.body.appendChild(overlay);

  const bildEl = overlay.querySelector(".lightbox__bild");
  const zaehlerEl = overlay.querySelector(".lightbox__zaehler");
  const btnSchliessen = overlay.querySelector(".lightbox__schliessen");
  const btnZurueck = overlay.querySelector(".lightbox__pfeil--zurueck");
  const btnVor = overlay.querySelector(".lightbox__pfeil--vor");

  let bilder = [];
  let index = 0;
  let letzterFokus = null;

  function zeige(i) {
    index = (i + bilder.length) % bilder.length;
    const img = bilder[index];
    bildEl.src = img.src;
    bildEl.alt = img.alt || "";
    zaehlerEl.textContent = bilder.length > 1 ? (index + 1) + " / " + bilder.length : "";
    btnZurueck.style.display = bilder.length > 1 ? "" : "none";
    btnVor.style.display = bilder.length > 1 ? "" : "none";
  }

  function oeffnen(galerieBilder, startIndex) {
    bilder = galerieBilder;
    letzterFokus = document.activeElement;
    zeige(startIndex);
    overlay.classList.add("ist-offen");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    btnSchliessen.focus();
  }

  function schliessen() {
    overlay.classList.remove("ist-offen");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (letzterFokus) letzterFokus.focus();
  }

  document.querySelectorAll(".foto-galerie").forEach((galerie) => {
    const imgs = Array.from(galerie.querySelectorAll("img"));
    imgs.forEach((img, i) => {
      img.setAttribute("role", "button");
      img.setAttribute("tabindex", "0");
      const oeffneDiese = () => oeffnen(imgs, i);
      img.addEventListener("click", oeffneDiese);
      img.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          oeffneDiese();
        }
      });
    });
  });

  btnSchliessen.addEventListener("click", schliessen);
  btnVor.addEventListener("click", () => zeige(index + 1));
  btnZurueck.addEventListener("click", () => zeige(index - 1));
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) schliessen();
  });
  document.addEventListener("keydown", (e) => {
    if (!overlay.classList.contains("ist-offen")) return;
    if (e.key === "Escape") schliessen();
    if (e.key === "ArrowRight") zeige(index + 1);
    if (e.key === "ArrowLeft") zeige(index - 1);
  });
})();
