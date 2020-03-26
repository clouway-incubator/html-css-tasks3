var form = document.getElementById('formID');
form.addEventListener('submit', function(event) {
    var isValid = validateForm();
    if (!isValid) {
        event.preventDefault();
    }
    else {
        alert('Data submitted successfully!');
    }
});

function validateForm() {
    var namePatt = /^[a-zA-z]{1,15}$/;
    var egnPatt = /^\d{10}$/;
    var agePatt = /^1[89]|[2-9][0-9]|10[0-9]|11[0-8]$/;
    var addrPatt = /^.{1,100}$/;
    var passPatt = /^[a-zA-z0-9]{6,18}$/;

    var fname = document.getElementById('firstName').value;
    var lname = document.getElementById('lastName').value;
    var egn = document.getElementById('egn').value;
    var age = document.getElementById('age').value;
    var addr = document.getElementById('address').value;
    var pass = document.getElementById('password').value;
    var confirmPass = document.getElementById('confirmPass').value;

    var isFnameMatch = namePatt.test(fname);
    var isLnameMatch = namePatt.test(lname);
    var isEgnMatch = egnPatt.test(egn);
    var isAgeMatch = agePatt.test(age);
    var isAddrMatch = addrPatt.test(addr);
    var isPassMatch = passPatt.test(pass);

    if (!isFnameMatch) {
        setErrorMsg('First name must be 1-15 characters long', 'fnameError');
        return false;
    }
    else {
        setErrorMsg('', 'fnameError');
    }

    if (!isLnameMatch) {
        setErrorMsg('Last name must be 1-15 characters long', 'lnameError');
        return false;
    }
    else {
        setErrorMsg('', 'fnameError');
    }

    if (!isEgnMatch) {
        setErrorMsg('EGN must be exactly 10 digits', 'egnError');
        return false;
    }
    else {
        setErrorMsg('', 'egnError');
    }

    if (!isAgeMatch) {
        setErrorMsg('You have to be 18 or older, but not over 118', 'ageError');
        return false;
    }
    else {
        setErrorMsg('', 'ageError');
    }

    if (!isAddrMatch) {
        setErrorMsg('Address must be 1-100 characters', 'addrError');
        return false;
    }
    else {
        setErrorMsg('', 'addrError');
    }

    if (!isPassMatch) {
        setErrorMsg('Password can contain latin normal or capital leters and numbers and must be between 6 and 16', 'passError');
        return false;
    }
    else {
        setErrorMsg('', 'passError');
    }

    if (confirmPass != pass) {
        setErrorMsg('Passwords do not match', 'confirmPassError');
        return false;
    }
    else {
        setErrorMsg('', 'confirmPassError');
    }

    return true;
}

function setErrorMsg(msg, input){
    var errorMsg = document.getElementById(input);
    errorMsg.innerHTML = msg;
}