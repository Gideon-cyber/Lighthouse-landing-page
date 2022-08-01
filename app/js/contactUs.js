const clientName = document.querySelector("#name");
const clientEmail = document.querySelector("#email");
const subjectMail = document.querySelector("#subject");
const clientMessage = document.querySelector("#message");
const contactBtn = document.querySelector(".contactBtn");
let clientInputData = []; // Array holding clients input
let FullMailMessage; //Formats the clientInputData array into a message that will be sent to company's mail

contactBtn.addEventListener("click", (e) => {
  // e.preventDefault();
  clientInputData.push(
    clientName.value,
    clientEmail.value,
    subjectMail.value,
    clientMessage.value
  );

  let [name, email, subject, message] = clientInputData;

  FullMailMessage = `Name: ${name} \nEmail: ${email}  \nSubject: ${subject} \nMessage: ${message}`;

  console.log(FullMailMessage);
  alert(FullMailMessage);

  clientName.value = "";
  clientEmail.value = "";
  subjectMail.value = "";
  clientMessage.value = "";
});
