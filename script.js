const inputEmail = document.getElementById("email-adress");
const errorMessage = document.getElementById("error-message");
const getSubscrubeButton = document.getElementById("subscribe-button");
const getEmailValidate = document.getElementById("container-one-style");
const mainContainer = document.getElementById("container");

let inputText = "";

inputEmail.addEventListener("input", (event) => {
  inputText = event.target.value;
});

getSubscrubeButton.addEventListener("click", () => {
  if (validateEmail(inputText)) {
    getEmailValidate.style.display = "block";
    mainContainer.style.display = "none";
  } else {
    errorMessage.style.display = "block";
  }
});

const validateEmail = (email) => {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};
