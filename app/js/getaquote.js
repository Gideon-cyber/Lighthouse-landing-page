let userInput = []; //Array that holds user inputs
let mailMessage; //Formats the user Input array into a message that will be sent to company's mail
let userName = document.querySelector("#name");
let userEmail = document.querySelector("#email");

let checkboxes = document.querySelectorAll('input[name="cb"]');
let userMessage = document.querySelector("#message");
const getquoteBtn = document.querySelector(".getquoteBtn");

const check = function () {
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      userInput.push(checkbox.value);
    }

    checkbox.checked = false;
  });
};

getquoteBtn.addEventListener("click", (e) => {
  e.preventDefault();
  userInput.push(userName.value, userEmail.value, userMessage.value);
  // loop through the names of the checkboxes and store clicked value in userInput array
  check();

  let [name, email, message, ...service] = userInput;

  mailMessage = `Name: ${name} \nEmail: ${email}  \nServices: ${service} \nMessage: ${message}`;

  console.log(mailMessage);
  alert(mailMessage);

  // Input fields will be returned to blank fields
  userName.value = "";
  userEmail.value = "";
  userMessage.value = "";
});
