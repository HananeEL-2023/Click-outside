const cardButtons = document.querySelectorAll(".card");
const modalOuter = document.querySelector(".modal-outer");
const modalInner = document.querySelector(".modal-inner");

function handleCardButtonClick(event) {
  const button = event.currentTarget;
  const card = button.closest(".card");
  //Grab the image source
  const imgsrc = card.querySelector("img").src;
  const desc = card.dataset.description;
  const name = card.querySelector("h2").textContent;
  //Populate the modal with the new info
  modalInner.innerHTML = `
  <img width ="500" height="500"src="${imgsrc.replace(
    "200",
    "400"
  )}" alt="${name}"/>
  <p>${desc}</p>`;
  //Show the modal
  modalOuter.classList.add("open");
}

cardButtons.forEach((button) =>
  button.addEventListener("click", handleCardButtonClick)
);

function closeModal() {
  modalOuter.classList.remove("open");
}
modalOuter.addEventListener("click", function (event) {
  const isOutSide = !event.target.closest(".modal-inner");
  if (isOutSide) {
    closeModal();
  }
});
