console.log("JS is working!");
firstName = document.getElementById("firstName");
email = document.getElementById("email");
phone = document.getElementById("phone");
message = document.getElementById("message");
sendBtn = document.getElementById("sendBtn");

fullAlert = document.querySelector(".full-alert");
nameAlert = document.querySelector(".name-alert");
phoneAlert = document.querySelector(".phone-alert");
messageAlert = document.querySelector(".message-alert");

successAlert = document.querySelector(".success-alert");
failAlert = document.querySelector(".fail-alert");

review = 0;

function checkName() {
  let firstNameValue = firstName.value.trim();
  firstNameValue == ""
    ? (firstName.style.backgroundColor = "#ffeae8")
    : (firstName.style.backgroundColor = "white");
  if (firstNameValue === "") {
    nameAlert.style.display = "flex";
    review = 1;
    return false;
  }
  review = 0;
  nameAlert.style.display = "none";
  return true;
}

function checkPhone() {
  let phoneValue = phone.value.trim();
  if (phoneValue === "") {
    phoneAlert.style.display = "flex";
    review = 1;
    return false;
  }
  review = 0;
  phoneAlert.style.display = "none";
  return true;
}

function checkMessage() {
  let messageValue = message.value.trim();
  if (messageValue === "") {
    messageAlert.style.display = "flex";
    message.style.backgroundColor = "#ffeae8";
    review = 1;
    return false;
  }
  review = 0;
  messageAlert.style.display = "none";
  message.style.backgroundColor = "white";
  return true;
}

sendBtn.addEventListener("click", () => {
  checkName();
  checkPhone();
  checkMessage();
  if (review === 1) {
    fullAlert.style.display = "flex";
  } else {
    fullAlert.style.display = "none";
    sendMail();
  }
});

function sendMail() {
  let firstNameValue = firstName.value.trim();
  let phoneValue = phone.value.trim();
  let emailValue = email.value.trim();
  let messageValue = message.value.trim();

  emailjs.init("sY4qS-y-TQMNh36dpvK08"); //private key

  const formData = {
    from_name: firstNameValue,
    Email: emailValue,
    Phone: phoneValue,
    Message: messageValue,
  };

  emailjs
    .send("service_5f48dwo", "template_79txwvm", formData, "Ov1mCIQoIdw3CyTSP")
    .then(
      function (response) {
        successAlert.style.display = "flex";
        resetVals();
      },
      function (error) {
        failAlert.style.display = "flex";
        resetVals();
      }
    );
}

function resetVals() {
  firstName.value = "";
  phone.value = "";
  email.value = "";
  message.value = "";
}
