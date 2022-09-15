let subscribeInput = document.querySelector("#subscribe");
let subscribeBTN = document.querySelector(".subscribeButton");

subscribeBTN.addEventListener("click", (e) => {
  e.preventDefault();
  let mailToSubscribe = subscribeInput.value;

  if (mailToSubscribe && mailToSubscribe.includes("@")) {
    console.log(mailToSubscribe);
    alert(mailToSubscribe);
  } else {
    console.log(`Not a valid mail`);
    alert(`Not a valid mail`);
  }

  subscribeInput.value = "";
});

///// Elasticemail login details
//  password: 123lighthouse

///// SMTP server
// Username: newsletter@lighthousehrcompany.com.ng
// password: 2B23BE83E202765B559B664C762F7AA72772

//// Authentication Back up code: 599386
