document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop default form behavior

    const userName = document.getElementById("name").value;
    const userEmail = document.getElementById("email").value;
    const userPhone = document.getElementById("phone").value;
    const userAddress = document.getElementById("address").value;
    const userEvent = document.getElementById("event").value;

    // Save values for confirmation.html
    localStorage.setItem("userName", userName);
    localStorage.setItem("userEvent", userEvent);

    // Send email with EmailJS (optional)
    emailjs.init("EWdPecA2PpaSJj1R1");
    emailjs.send("service_t5xo5j9", "template_zrj3h05", {
        user_name: userName,
        user_email: userEmail,
        user_phone: userPhone,
        user_address: userAddress,
        user_event: userEvent
    }).then(
        function(response) {
            console.log("Email sent:", response.status, response.text);
            window.location.href = "confirmation.html";
        },
        function(error) {
            console.error("Email failed:", error);
            // Still redirect even if email fails
            window.location.href = "confirmation.html";
        }
    );
});

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const userName = document.getElementById("name").value;
    const userEvent = document.getElementById("event").value;

    // Store in localStorage
    localStorage.setItem("userName", userName);
    localStorage.setItem("userEvent", userEvent);

    // Go to confirmation page
    window.location.href = "confirmation.html";
});
