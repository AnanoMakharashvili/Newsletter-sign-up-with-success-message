const inputEmail = document.getElementById("email-adress");
const errorMessage = document.getElementById("error-message");
const getSubscrubeButton = document.getElementById("subscribe-button");

let inputText = "";

inputEmail.addEventListener("input", (event) => {
  inputText = event.target.value;
});

getSubscrubeButton.addEventListener("click", () => {
  if (inputText.length > 0) {
    errorMessage.style.display = "block";
  }
});
