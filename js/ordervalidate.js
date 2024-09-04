function validate() {
    var deliveryMethod = document.getElementById("deliveryMethod").value;
    var deliveryAddress = document.getElementById("deliveryAddress").value;
    var sameAddress = document.getElementById("sameAddress").checked;
    var billingAddress = document.getElementById("billingAddress").value;
    var contactNumber = document.getElementById("contactNumber").value;
    var email = document.getElementById("email").value;
    var flavors = document.querySelectorAll('input[type="checkbox"]:checked');
    var paymentMethod = document.getElementById("paymentMethod").value;
    var creditCardType = document.getElementById("creditCardType").value;
    var creditCardNumber = document.getElementById("creditCardNumber").value;
    var errMsg = "";
    var result = true;

    if (deliveryMethod == "") {
        errMsg += "Please select a delivery method.\n";
    }
    if (deliveryMethod === "delivery" && deliveryAddress.trim() === "") {
        errMsg += "Delivery address cannot be empty.\n";
    }
    if (sameAddress && billingAddress.trim() === "") {
        errMsg += "Billing address cannot be empty when same as delivery.\n";
    }
    if (!sameAddress && billingAddress.trim() === "") {
        errMsg += "Billing address cannot be empty.\n";
    }
    if (contactNumber.trim() === "") {
        errMsg += "Contact number cannot be empty.\n";
    }
    if (email.trim() === "") {
        errMsg += "Email for receipt cannot be empty.\n";
    }
    if (flavors.length === 0) {
        errMsg += "Please choose at least one flavor.\n";
    }
    if (paymentMethod === "online" && (creditCardType.trim() === "" || creditCardNumber.trim() === "")) {
        errMsg += "Please provide credit card information for online payment.\n";
    }
    if (errMsg !== "") {
        alert(errMsg);
        result = false;
    }
    return result;
}

function copy(event) {
    if (event.target.checked) {
        var deliveryAddress = document.getElementById("deliveryAddress").value;
        document.getElementById("billingAddress").value = deliveryAddress;
    } else {
        document.getElementById("billingAddress").value = "";
    }
}

function init() {
    var regForm = document.getElementById("form");
    regForm.onsubmit = validate;
}

window.onload = init;
