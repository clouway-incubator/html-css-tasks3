// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var name = document.contactForm.name.value;
    var last = document.contactForm.last.value;
    var egn = document.contactForm.egn.value;
    var age = document.contactForm.age.value;
    var address = document.contactForm.address.value;
    var pass = document.contactForm.pass.value;

    var nameRegex = /^[a-zA-Z\s]{1,15}$/;
    var lastRegex = /^[a-zA-Z\s]{1,15}$/;
    var egnRegex = /^[1-9]\d{9}$/;
    var ageRegex = /^1[89]|[2-9][0-9]|10[0-9]|11[0-8]$/
    var addressRegex = /^[a-zA-Z-._0-9\s]{1,100}$/;
    var passRegex = /^[a-zA-Z-._0-9\s]{6,18}$/;

    var nameJoining = nameRegex.test(name);
    var lastJoining = lastRegex.test(last);
    var egnJoining = egnRegex.test(egn);
    var ageJoining = ageRegex.test(age);
    var addressJoining = addressRegex.test(address);
    var passJoining = passRegex.test(pass);

    // Defining error variables with a default value
    var nameErr = lastErr = egnErr = emailegn = ageErr = addressErr = passErr = true;

    if (!nameJoining) {
        printError("nameErr", "Please enter a valid firstname(only alphabeths) and length max 15");
        return false;
    } else {
        printError("nameErr", "");
        nameErr = false;

    }

    if (!lastJoining) {
        printError("lastErr", "Please enter a valid lastname(only alphabets) and length max 15");
        return false;
    } else {
        printError("lastErr", "");

    }

    if (!egnJoining) {
        printError("egnErr", "Please enter a valid EGN - only 10 digits");
        return false;
    } else {
        printError("egnErr", "");

    }

    if (!ageJoining) {
        printError("ageErr", "Please enter a valid age - between 18 and 118");
        return false;
    } else {
        printError("ageErr", "");

    }

    if (!addressJoining) {
        printError("addressErr", "Please enter a valid address - max length is 100 symbols(digits and alphabets)");
        return false;
    } else {
        printError("addressErr", "");

    }

    if (!passJoining) {
        printError("passErr", "Please enter a valid password - length is between 6 and 18, symbols(digits and alphabets)");
        return false;
    } else {
        printError("passErr", "");

    }


    // Prevent the form from being submitted if there are any errors
    if ((nameErr || lastErr || egnErr || ageErr || passErr) == true) {
        return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
            "Name: " + name + "\n" +
            "Last Name: " + last + "\n" +
            "egn : " + egn + "\n" +
            "Age: " + age + "\n" +
            "Address: " + address + "\n" +
            "Password: " + pass + "\n"

        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
    }
}
