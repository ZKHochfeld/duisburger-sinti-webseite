document.querySelectorAll(".video-einbettung__play").forEach((button) => {
  button.addEventListener("click", () => {
    const wrapper = button.closest(".video-einbettung");
    const id = wrapper.dataset.youtubeId;
    const titel = wrapper.dataset.titel || "";
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1`;
    iframe.title = titel;
    iframe.allow = "autoplay; encrypted-media; fullscreen";
    iframe.allowFullscreen = true;
    iframe.loading = "lazy";
    wrapper.classList.remove("video-einbettung--platzhalter");
    wrapper.replaceChildren(iframe);
  });
});
