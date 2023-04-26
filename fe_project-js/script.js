document.addEventListener('DOMContentLoaded', () => {
    const messageButton = document.getElementById('message-button');
    const messageDialog = document.getElementById('dialog');
    console.log(messageDialog);

    messageButton.addEventListener('click', () => {
        messageDialog.showModal();
    })
})