
function sendMail() {
    let parms = {
        Name: document.getElementById("name").value,
        Email: document.getElementById("email").value,
        Phone: document.getElementById("phone").value,
        Address: document.getElementById("address").value,
        Event: document.getElementById("event").value,
    };

    emailjs.send("service_t5xo5j9", "template_zrj3h05", parms)
        .then(function(response) {
            console.log("Email sent:", response.status, response.text);
            alert("Email Sent Successfully!");
            window.location.href = "confirmation.html"; // Redirect after success
        })
        .catch(function(error) {
            console.error("Failed to send email:", error);
            alert("Failed to send email.");
        });
}
