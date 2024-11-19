document.getElementById("sendButton").addEventListener("click", () => {
    const message = document.getElementById("messageInput").value;

    if (!message.trim()) {
        alert("Please enter a message before sending.");
        return;
    }

    fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                alert("Message sent successfully!");
                document.getElementById("messageInput").value = "";
            } else {
                alert("Failed to send the message.");
            }
        })
        .catch((error) => {
            console.error("Error:", error);
            alert("An error occurred. Please try again later.");
        });
});

