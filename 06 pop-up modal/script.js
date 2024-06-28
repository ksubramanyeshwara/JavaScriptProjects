const modal = document.querySelector("#modal");
const openPopupButton = document.querySelector("#open-popup-button");
const closePopupButton = document.querySelector("#close-popup-button");
const overlay = document.querySelector("#overlay");

openPopupButton.addEventListener("click", () => {
  setTimeout(() => {
    modal.classList.add("open");
    overlay.classList.add("open");
  }, 2000);
});

closePopupButton.addEventListener("click", () => {
  modal.classList.remove("open");
  overlay.classList.remove("open");
});

overlay.addEventListener("click", () => {
  modal.classList.remove("open");
  overlay.classList.remove("open");
});
