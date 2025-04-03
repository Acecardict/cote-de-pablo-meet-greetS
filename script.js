document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const userName = document.getElementById("name").value;
    const userEmail = document.getElementById("email").value;
    const userPhone = document.getElementById("phone").value;
    const userAddress = document.getElementById("address").value;
    const userEvent = document.getElementById("event").value;

    // Store user data in LocalStorage (for confirmation page)
    localStorage.setItem("userName", userName);
    localStorage.setItem("userEvent", userEvent);

    // Initialize EmailJS with your public key (API key)
    emailjs.init("EWdPecA2PpaSJj1R1"); // Replace with your actual public key

    // Send email with EmailJS
    emailjs.send("service_t5xo5j9", "template_zrj3h05", {
        user_name: userName,
        user_email: userEmail,
        user_phone: userPhone,
        user_address: userAddress,
        user_event: userEvent
    }).then(
        function(response) {
            console.log("Registration email sent successfully", response);
            // Redirect to confirmation page after successful email send
            window.location.href = "confirmation.html";
        },
        function(error) {
            console.error("EmailJS Error:", error);
            alert("Failed to send registration details. Try again.");
        }
    );
});

// Confirmation Page Script (Runs only on confirmation.html)
if (window.location.pathname.includes("confirmation.html")) {
    document.addEventListener("DOMContentLoaded", function() {
        const name = localStorage.getItem("userName");
        const eventType = localStorage.getItem("userEvent");

        if (name && eventType) {
            document.getElementById("userName").textContent = name;
            document.getElementById("userEvent").textContent = eventType;

            let description = "";
            if (eventType === "meet") {
                description = "You will meet Cote de Pablo in person, have a conversation, take pictures, and receive an autograph.";
            } else if (eventType === "groupCall") {
                description = "Join other fans on an exclusive live video call with Cote de Pablo, where you can interact and ask questions.";
            } else if (eventType === "videoCall") {
                description = "Enjoy a private, one-on-one video chat with Cote de Pablo, making your experience truly personal and unforgettable.";
            }
            document.getElementById("eventDescription").textContent = description;
        } else {
            document.getElementById("confirmation-details").innerHTML = "<h2>Error: No registration details found.</h2>";
        }
    });
}
