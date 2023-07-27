document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("input_name");
    const phoneNumberInput = document.getElementById("input_phoneNumber");
    const messageInput = document.getElementById("input_message");
    const nameErrorSpan = document.getElementById("nameError");
    const phoneNumberErrorSpan = document.getElementById("phoneNumberError");
    const messageErrorSpan = document.getElementById("messageError");

    nameInput.addEventListener("input", function () {
        if (nameInput.value.length > 50) {
            nameErrorSpan.textContent = "*The name cannot exceed 50 characters.*";
        } else {
            nameErrorSpan.textContent = "";
        }
    });

    phoneNumberInput.addEventListener("input", function () {
        if (phoneNumberInput.value.length > 10) {
            phoneNumberErrorSpan.textContent = "*The phone number cannot exceed 10 digits.*";
        } else {
            phoneNumberErrorSpan.textContent = "";
        }
    });

    messageInput.addEventListener("input", function () {
        if (messageInput.value.length > 200) {
            messageErrorSpan.textContent = "*The message cannot exceed 200 characters.*";
        } else {
            messageErrorSpan.textContent = "";
        }
    });
});
