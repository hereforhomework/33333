document.addEventListener("DOMContentLoaded", function() {
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
    var password2Input = document.getElementById("password2");
    var emailInput = document.getElementById("email");
    var maleInput = document.getElementById("male");
    var femaleInput = document.getElementById("female");
    var otherInput = document.getElementById("other");

    function validateForm() {
        var errors = [];

        if (usernameInput.value === "") {
            errors.push("Username cannot be empty.");
        }

        if (passwordInput.value.length < 9) {
            errors.push("Password has to be at least 9 characters long.");
        }

        if (password2Input.value === "") {
            errors.push("Retype Password cannot be empty.");
        }

        if (passwordInput.value !== password2Input.value) {
            errors.push("Passwords do not match.");
        }

        if (emailInput.value === "") {
            errors.push("Email cannot be empty.");
        } else if (!isValidEmail(emailInput.value)) {
            errors.push("Please enter a valid email address.");
        }

        if (!(maleInput.checked || femaleInput.checked || otherInput.checked)) {
            errors.push("You have to choose a gender.");
        }

        if (errors.length > 0) {
            alert("Errors:\n" + errors.join("\n"));
            return false;
        }

        return true;
    }

    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    var regForm = document.getElementById("regform");
    regForm.addEventListener('submit', function(event) {
        if (!validateForm()) {
            event.preventDefault();
        }
    });
});
