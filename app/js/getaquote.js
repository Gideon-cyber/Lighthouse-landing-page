let userInput = []; //Array that holds user inputs
let mailMessage; //Formats the user Input array into a message that will be sent to company's mail
let userName = document.querySelector("#name");
let userEmail = document.querySelector("#email");
let userNumber = document.querySelector("#number");

let checkboxes = document.querySelectorAll('input[name="cb"]');
let userMessage = document.querySelector("#message");
const getquoteBtn = document.querySelector(".getquoteBtn");
const getquoteForm = document.querySelector("#getaquote-form");

const check = function () {
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      userInput.push(checkbox.value);
    }

    checkbox.checked = false;
  });
};

getquoteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  userInput.push(
    userName.value,
    userEmail.value,
    userNumber.value,
    userMessage.value
  );
  // loop through the names of the checkboxes and store clicked value in userInput array
  check();

  let [name, email, number, message, ...service] = userInput;

  mailMessage = `Name: ${name} <br/> Email: ${email}  <br /> Number: ${number}<br /> Services: ${service} <br /> Message: ${message}`;

  console.log(mailMessage);
  // alert(mailMessage);

  function sendEmail() {
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "lighthousehrcompany@gmail.com",
      Password: "BE7518EB74B5519AC5F660DB2F15FF12F22A",
      // Username: "gideonjohnson70@gmail.com",
      // Password: "E18F8EA2A4C867FE6F55365049BA480398B3",
      // To: "quote@lighthousehrcompany.com.ng",
      To: "gideonjohnson70@gmail.com",
      From: "lighthousehrcompany@gmail.com",
      Subject: "Quote",
      Body: mailMessage,
    }).then((message) => alert(message));
  }

  sendEmail();

  // Input fields will be returned to blank fields
  userName.value = "";
  userEmail.value = "";
  userNumber.value = "";
  userMessage.value = "";
  reset();
  return false;
});

// getquoteBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   userInput.push(
//     userName.value,
//     userEmail.value,
//     userNumber.value,
//     userMessage.value
//   );
//   // loop through the names of the checkboxes and store clicked value in userInput array
//   check();

//   let [name, email, number, message, ...service] = userInput;

//   mailMessage = `Name: ${name} \nEmail: ${email}  \nNumber: ${number}\nServices: ${service} \nMessage: ${message}`;

//   console.log(mailMessage);
//   alert(mailMessage);

//   // Input fields will be returned to blank fields
//   userName.value = "";
//   userEmail.value = "";
//   userMessage.value = "";
// });

// Authentication backup code: 847760
