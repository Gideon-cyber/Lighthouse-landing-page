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
