const clientName = document.querySelector("#name");
const clientEmail = document.querySelector("#email");
const subjectMail = document.querySelector("#subject");
const clientMessage = document.querySelector("#message");
const contactBtn = document.querySelector(".contactBtn");
const formSubmit = document.querySelector("#form");

let clientInputData = []; // Array holding clients input
let FullMailMessage; //Formats the clientInputData array into a message that will be sent to company's mail

formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  clientInputData.push(
    clientName.value,
    clientEmail.value,
    subjectMail.value,
    clientMessage.value
  );

  let [name, email, subject, message] = clientInputData;

  FullMailMessage = `Name: ${name} <br /> Email: ${email} <br /> Subject: ${subject}  <br /> Message: ${message}`;

  console.log(FullMailMessage);
  // alert(FullMailMessage);

  function sendEmail() {
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "lighthousehrcompany@gmail.com",
      Password: "BE7518EB74B5519AC5F660DB2F15FF12F22A",
      To: "gideonjohnson70@gmail.com",
      From: "lighthousehrcompany@gmail.com",
      Subject: "Contact",
      Body: FullMailMessage,
    }).then((message) => alert(message));
  }

  sendEmail();

  clientName.value = "";
  clientEmail.value = "";
  subjectMail.value = "";
  clientMessage.value = "";

  reset();
  return false;
});

//// SMTP server
// username: enquiries@lighthousehrcompany.com.ng
// password: BEC22CDE1F5C70A63A9EB55DA1BDBCD470CA

// Authentication Backup code: 760061

// contactBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   clientInputData.push(
//     clientName.value,
//     clientEmail.value,
//     subjectMail.value,
//     clientMessage.value
//   );

//   let [name, email, subject, message] = clientInputData;

//   FullMailMessage = `Name: ${name} \nEmail: ${email}  \nSubject: ${subject} \nMessage: ${message}`;

//   console.log(FullMailMessage);
//   alert(FullMailMessage);

//   clientName.value = "";
//   clientEmail.value = "";
//   subjectMail.value = "";
//   clientMessage.value = "";
// });

// 560398
