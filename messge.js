document.getElementById('sendButton').addEventListener('click', sendMessage);
document.getElementById('messageInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const input = document.getElementById('messageInput');
    const message = input.value.trim();

    if (message) {
        const chatBox = document.getElementById('chatBox');
        const messageDiv = document.createElement('div');
        messageDiv.textContent = message;
        chatBox.appendChild(messageDiv);
        input.value = '';
        chatBox.scrollTop = chatBox.scrollHeight; // Auto scroll to the bottom
    }
}
