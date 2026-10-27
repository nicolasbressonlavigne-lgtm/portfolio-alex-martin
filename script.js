const toggle = document.querySelector(".details-toggle");
const panel = document.getElementById("details-realisation");

if (toggle && panel) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";

    toggle.setAttribute("aria-expanded", String(!isOpen));
    panel.hidden = isOpen;
    toggle.textContent = isOpen ? "Voir les détails" : "Masquer les détails";
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !panel.hidden) {
      panel.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "Voir les détails";
      toggle.focus();
    }
  });
}
