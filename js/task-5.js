function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButton = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

const chooseColor = () => {
  document.body.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = document.body.style.backgroundColor;
};

changeColorButton.addEventListener("click", chooseColor);
