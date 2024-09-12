const email = document.querySelector('#email');
const password = document.querySelector('#password');
const emailErr = document.querySelector('#emailErr');
const passwordErr = document.querySelector('#passwordErr');
const formSuccess = document.querySelector('#formSuccess');

email.addEventListener('input', validateEmail);
password.addEventListener('input', validatePassword);

function validateEmail() {
    const emailValue = email.value;
    if (emailValue.length > 3 && emailValue.includes('@') && emailValue.includes('.')) {
        emailErr.style.display = 'none';
        checkFormStatus();
    } else {
        emailErr.style.display = 'inline';
        formSuccess.style.display = 'none';
    }
}

function validatePassword() {
    const passwordValue = password.value;
    if (passwordValue.length > 8) {
        passwordErr.style.display = 'none';
        checkFormStatus();
    } else {
        passwordErr.style.display = 'inline';
        formSuccess.style.display = 'none';
    }
}

function checkFormStatus() {
    if (emailErr.style.display === 'none' && passwordErr.style.display === 'none') {
        formSuccess.style.display = 'inline';
    }
}

function submitForm() {
    if (formSuccess.style.display === 'inline') {
        if (confirm('Do you want to submit the form?')) {
            alert('Signup successful!');
        } else {
            email.value = '';
            password.value = '';
            emailErr.style.display = 'inline';
            passwordErr.style.display = 'inline';
            formSuccess.style.display = 'none';
        }
    }
}
