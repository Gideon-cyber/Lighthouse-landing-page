let subscribeInput = document.querySelector("#subscribe");
let subscribeBTN = document.querySelector("#subscribe-form");

subscribeBTN.addEventListener("submit", (e) => {
  e.preventDefault();
  let mailToSubscribe = subscribeInput.value;

  if (mailToSubscribe && mailToSubscribe.includes("@")) {
    console.log(mailToSubscribe);

    function sendEmail() {
      Email.send({
        Host: "smtp.elasticemail.com",
        Username: "lighthousehrcompany@gmail.com",
        Password: "BE7518EB74B5519AC5F660DB2F15FF12F22A",
        // Username: "gideonjohnson70@gmail.com",
        // Password: "E18F8EA2A4C867FE6F55365049BA480398B3",
        To: "newsletter@lighthousehrcompany.com.ng",
        From: "lighthousehrcompany@gmail.com",
        Subject: "Subscribe",
        Body: mailToSubscribe,
      }).then((message) => alert(message));
    }

    sendEmail();
    subscribeInput.value = "";
    reset();
    return false;
  } else {
    console.log(`Not a valid mail`);
    alert(`Not a valid mail`);
  }
});

///// Elasticemail login details
//  password: 123lighthouse

///// SMTP server
// Username: newsletter@lighthousehrcompany.com.ng
// password: 2B23BE83E202765B559B664C762F7AA72772

//// Authentication Back up code: 599386
