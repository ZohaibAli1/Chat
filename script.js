document.addEventListener("DOMContentLoaded", function () {
    const chatMessages = document.getElementById("chat-messages");
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-btn");
    const closeButton = document.getElementById("close-btn");
    const chatWidget = document.querySelector(".chat-widget");

    // Event listener to close the chat widget
    closeButton.addEventListener("click", function () {
        chatWidget.style.display = "none";
    });

    // Event listener to send a message
    sendButton.addEventListener("click", function () {
        const message = messageInput.value;
        if (message.trim() !== "") {
            appendMessage("You", message);
            // You can send the message to the server here for processing
            messageInput.value = "";
        }
    });

    // Function to append a message to the chat
    function appendMessage(sender, text) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message");
        messageDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
        chatMessages.appendChild(messageDiv);

        // Scroll to the bottom of the chat messages
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});
