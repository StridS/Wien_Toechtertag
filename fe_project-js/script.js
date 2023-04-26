document.addEventListener("DOMContentLoaded", () => {
  const messageButton = document.getElementById("message-button");
  const sendButton = document.getElementById("send-button");
  const cancelButton = document.getElementById("cancel-button");
  const messageDialog = document.getElementById("dialog");
  const messageInput = document.getElementById("message-input");

  console.log(messageDialog);

  messageButton.addEventListener("click", () => {
    messageDialog.showModal();
  });

  sendButton.addEventListener("click", () => {
    console.log(messageInput.value.length);
  });
});
