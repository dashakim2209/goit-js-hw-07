const nameInput = document.querySelector("#name-input");
const username = document.querySelector("#name-output");

const handleInput = (event) => {
  const input = event.target.value.trim();

  if (input) {
    username.textContent = input;
  } else {
    username.textContent = "Anonymous";
  }
};

nameInput.addEventListener("input", handleInput);
