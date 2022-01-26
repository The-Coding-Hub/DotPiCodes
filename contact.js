// Function to check if Email is Valid or not!
function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return (true)
  }
  else {
    return (false)
  }
}

// Function to show alert after contact form is submitted
const showAlert = (alert_json) => {
  const alert = `<div class="alert alert-${alert_json.status}" role="alert"><strong class="font-normal">${alert_json.status.charAt(0).toUpperCase() + alert_json.status.slice(1)}</strong>: ${alert_json.message}</div>`;
  document.getElementById('alert').innerHTML = alert;
  setTimeout(() => {
    location.reload();
  }, 2000);
}

// Function to send response email to admin after submitting form
function sendEmail(subject, message) {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "prameyamohanty14@gmail.com",
    Password: "PRAMEYA@1425",
    To: 'prameyamohanty14@gmail.com',
    From: "prameyamohanty14@gmail.com",
    Subject: subject,
    Body: message,
  })
    .then(function (message) {
      showAlert({
        "status": "success",
        "message": "Message has been sent successfully!"
      })
    });
}

const fname = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const subBtn = document.getElementById('sub-btn');
var mail_format = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

// All logic applied after user clicks on submit button
subBtn.addEventListener('click', () => {
  if (fname.value !== "" && email.value !== "" && subject.value !== "" & message.value !== "" && ValidateEmail(email.value)) {
    const body = "Email from DotPiCodes Customer:\nName: " + fname.value + "\nEmail: " + email.value + "\nMessage: " + message.value
    sendEmail(subject.value, body)
  }
  else {
    showAlert({
      "status": "danger",
      "message": "Failed to sendy your message! Please try again!"
    })
  }
})