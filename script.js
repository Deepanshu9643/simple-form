
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const emailErr = document.querySelector('#emailError');
const passwordErr = document.querySelector('#passwordError');
const successMsg = document.querySelector('#successMessage');

email.addEventListener('input', validateEmail);
password.addEventListener('input', validatePassword);

function validateEmail() {
    const emailVal = email.value;
    if (emailVal.length > 3 && emailVal.includes('@') && emailVal.includes('.')) {
        emailErr.style.display = 'none';
        checkAllValid();
    } else {
        emailErr.style.display = 'inline';
        successMsg.style.display = 'none';
    }
}

function validatePassword() {
    const passwordVal = password.value;
    if (passwordVal.length > 8) {
        passwordErr.style.display = 'none';
        checkAllValid();
    } else {
        passwordErr.style.display = 'inline';
        successMsg.style.display = 'none';
    }
}

function checkAllValid() {
    if (emailErr.style.display === 'none' && passwordErr.style.display === 'none') {
        successMsg.style.display = 'inline';
    }
}

function submitForm() {
    if (successMsg.style.display === 'inline') {
        if (confirm('Are you sure you want to submit?')) {
            alert('Successful signup!');
        } else {
            email.value = '';
            password.value = '';
            emailErr.style.display = 'inline';
            passwordErr.style.display = 'inline';
            successMsg.style.display = 'none';
        }
    }
}
