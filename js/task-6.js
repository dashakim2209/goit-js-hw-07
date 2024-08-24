function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("#controls input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const divBoxes = document.querySelector("#boxes");

const createButtonFn = () => {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  }
};

const createBoxes = (amount) => {
  divBoxes.innerHTML = "";

  const boxes = [];
  let boxesSize = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${boxesSize}px`;
    box.style.height = `${boxesSize}px`;
    boxesSize += 10;
    boxes.push(box);
  }

  divBoxes.append(...boxes);
};

const destroyButtonFn = () => {
  divBoxes.innerHTML = "";
};

createButton.addEventListener("click", createButtonFn);
destroyButton.addEventListener("click", destroyButtonFn);
