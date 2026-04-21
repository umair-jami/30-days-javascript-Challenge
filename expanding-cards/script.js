const cards = document.querySelectorAll(".card");
// Remove the active class
function removeActiveClass() {
  cards.forEach((card) => {
    card.classList.remove("active");
  });
}
// Remove the active class from previous card and add to the current card
cards.forEach((card) => {
  card.addEventListener("click", () => {
    removeActiveClass();
    card.classList.add("active");
  });
});
