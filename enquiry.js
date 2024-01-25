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
    firstNameValue == "" ? firstName.style.backgroundColor = "#ffeae8" : firstName.style.backgroundColor = "white";
    if (firstNameValue === "") {
        nameAlert.style.display = "flex";
        review = 1;
        return false;
    }
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
    }
    else {
        fullAlert.style.display = "none";
        sendMail();
    }
});

function sendMail() {
    let firstNameValue = firstName.value.trim();
    let phoneValue = phone.value.trim();
    let emailValue = email.value.trim();
    let messageValue = message.value.trim();

    emailjs.init("364zyalzO9rVbmoUMvyB5"); //private key

    const formData = {
        name: firstNameValue,
        email: emailValue,
        phone: phoneValue,
        message: messageValue
    };

    emailjs.send("service_eay6c5q", "template_x7ddo8r", formData,"NnhSdAb1IoHTWFN-Z")
        .then(function (response) {
            successAlert.style.display = "flex";
            resetVals();
        }, function (error) {
            failAlert.style.display = "flex";
            resetVals();
        });
}

function resetVals() {
    firstName.value = "";
    phone.value = "";
    email.value = "";
    message.value = "";
}