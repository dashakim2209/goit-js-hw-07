const LoginForm = document.querySelector(".login-form");
const handleInputsToSubmit = (e) => {
  e.preventDefault();
  const email = e.target.elements.email.value.trim();
  const password = e.target.elements.password.value.trim();

  if (!email || !password) {
    alert("All form fields must be filled in");
    return;
  }

  const formObject = {
    email,
    password,
  };
  console.log(formObject);

  LoginForm.reset();
};
LoginForm.addEventListener("submit", handleInputsToSubmit);
