function validatedForm() {
    var email = document.getElementById('validateEmail').value;

    var errorMessages = '';

    if (email === '') {
        errorMessages += 'Valid email required.';
    }

    var errorContainer = document.getElementById('invalid-feedback');
    var errorInputContainer = document.getElementById('validateEmail');

    if (errorMessages !== '') {
        errorContainer.innerHTML = errorMessages;
        errorContainer.style.display = 'block';
        errorContainer.style.color = 'red';
        errorInputContainer.style.backgroundColor = '#fee9e6';
        errorInputContainer.style.border = '1px solid red';
        errorInputContainer.classList.add('invalid');
    } else {
        // Si todos los campos están llenos, redirigir a success.html
        window.location.href = './confirmation.html';
    }
}
