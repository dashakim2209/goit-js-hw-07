const NameInput = document.querySelector("#name-input");
const Username = document.querySelector("#name-output");

const handleInput = (event) => {
  const input = event.target.value.trim();

  if (input) {
    Username.textContent = input;
  } else {
    Username.textContent = Anonymous;
  }
};

NameInput.addEventListener("input", handleInput);
