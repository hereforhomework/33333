document.addEventListener("DOMContentLoaded", function() {
    var deliveryMethodSelect = document.getElementById("deliveryMethod");
    var deliveryAddressInput = document.getElementById("deliveryAddressInput");
    var deliveryAddress = document.getElementById("deliveryAddress");
    var paymentMethodSelect = document.getElementById("paymentMethod");
    var creditCardInfoDiv = document.getElementById("creditCardFields");
    var sameAddressCheckbox = document.getElementById("sameAddressCheckbox");
    var billingAddressInput = document.getElementById("billingAddressInput");
    var contactNumberInput = document.getElementById("contactNumber");
    var emailInput = document.getElementById("email");
    var ic1Checkbox = document.getElementById("ic1");
    var ic2Checkbox = document.getElementById("ic2");
    var ic3Checkbox = document.getElementById("ic3");
    var creditCardNumberInput = document.getElementById("creditCardNumber");
    var creditCardTypeSelect = document.getElementById("creditCardType");

    function validateForm() {
        var errors = [];

        if (deliveryMethodSelect.value === "") {
            errors.push("Please select delivery method.");
        }

        if (deliveryMethodSelect.value === "delivery" && deliveryAddressInput.value.trim() === "") {
            errors.push("Please enter delivery address.");
        }

        if (!sameAddressCheckbox.checked && billingAddressInput.value.trim() === "") {
            errors.push("Please enter billing address.");
        }

        if (contactNumberInput.value.trim() === "") {
            errors.push("Please enter contact number.");
        }

        if (emailInput.value.trim() === "") {
            errors.push("Please enter email.");
        } else if (!isValidEmail(emailInput.value.trim())) {
            errors.push("Please enter a valid email address.");
        }

        if (!ic1Checkbox.checked && !ic2Checkbox.checked && !ic3Checkbox.checked) {
            errors.push("Please choose at least one flavor.");
        }

        if (paymentMethodSelect.value === "") {
            errors.push("Please select payment method.");
        }

        if (paymentMethodSelect.value === "online" && creditCardInfoDiv.style.display === "block") {
            if (creditCardNumberInput.value.trim() === "") {
                errors.push("Please enter credit card number.");
            } else if (!isValidCreditCardNumber(creditCardNumberInput.value.trim(), creditCardTypeSelect.value)) {
                errors.push("Please enter a valid credit card number.");
            }
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



    var orderForm = document.querySelector('form');
    orderForm.addEventListener('submit', function(event) {
        if (!validateForm()) {
            event.preventDefault(); 
        }
    });

    deliveryMethodSelect.addEventListener("change", function() {
        if (deliveryMethodSelect.value === "delivery") {
            deliveryAddress.style.display = "block";
            sameAddress.style.display = "block";
        } else {
            deliveryAddress.style.display = "none";
            sameAddress.style.display = "none";
        }
    });

    paymentMethodSelect.addEventListener("change", function() {
        if (paymentMethodSelect.value === "online") {
            creditCardInfoDiv.style.display = "block";
        } else {
            creditCardInfoDiv.style.display = "none";
        }
    });

    sameAddressCheckbox.addEventListener("change", function() {
        if (sameAddressCheckbox.checked) {
            if (deliveryAddressInput.value.trim() === "") {
                alert("Please enter your delivery address first.");
                sameAddressCheckbox.checked = false;
            } else {
                billingAddressInput.value = deliveryAddressInput.value;
            }
        } else {
            billingAddressInput.value = "";
        }
    });

    creditCardTypeSelect.addEventListener("change", function() {
        var maxLength = 16;
        if (creditCardTypeSelect.value === "amex") {
            maxLength = 15;
        }
        creditCardNumberInput.maxLength = maxLength;
    });
});
