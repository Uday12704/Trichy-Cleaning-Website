console.log("JS is working!");
firstName = document.getElementById("firstName");
email = document.getElementById("email");
phone = document.getElementById("phone");
message = document.getElementById("message");
sendBtn = document.getElementById("sendBtn");

fullAlert = document.querySelector(".full-alert");
fullString = document.querySelector(".full-string");
nameAlert = document.querySelector(".name-alert");
phoneAlert = document.querySelector(".phone-alert");
messageAlert = document.querySelector(".message-alert");

successAlert = document.querySelector(".success-alert");
failAlert = document.querySelector(".fail-alert");

fullAlertString = "Form submission failed. Review the following information: "
review = [];

function checkName() {
    let firstNameValue = firstName.value.trim();
    firstNameValue == "" ? firstName.style.backgroundColor = "#ffeae8" : firstName.style.backgroundColor = "white";
    if (firstNameValue === "") {
        nameAlert.style.display = "flex";
        if (!("Name" in review)) {
            review.push("Name");
        }
        return false;
    }
    nameAlert.style.display = "none";
    return true;
}

function checkPhone() {
    let phoneValue = phone.value.trim();
    if (phoneValue === "") {
        phoneAlert.style.display = "flex";
        if (!("Phone" in review)) {
            review.push("Phone");
        }
        return false;
    }
    phoneAlert.style.display = "none";
    return true;
}

function checkMessage() {
    let messageValue = message.value.trim();
    if (messageValue === "") {
        messageAlert.style.display = "flex";
        if (!("Message" in review)) {
            review.push("Message");
        }
        message.style.backgroundColor = "#ffeae8";
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
    if (review.length > 0) {
        fullAlert.style.display = "flex";
        fullString.innerText = fullAlertString + review.join(", ") + ".";
        review = [];
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

    emailjs.init("364zyalzO9rVbmoUMvyB5");

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