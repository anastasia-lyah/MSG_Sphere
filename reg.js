document.getElementById('phone').addEventListener('input', function(e) {
    let input = e.target.value.replace(/\D/g, '').substring(0, 12);
    let formatted = '+380';
    if (input.length > 3) {
        formatted += '-' + input.substring(3, 5);
    }
    if (input.length > 5) {
        formatted += '-' + input.substring(5, 8);
    }
    if (input.length > 8) {
        formatted += '-' + input.substring(8, 12);
    }
    e.target.value = formatted;
});

function validateForm(event) {
    event.preventDefault();
    let isValid = true;
    document.getElementById('surname_error').textContent = '';
    document.getElementById('name_error').textContent = '';
    document.getElementById('birthdate_error').textContent = '';
    document.getElementById('phone_error').textContent = '';
    document.getElementById('email_error').textContent = '';
    document.getElementById('password_error').textContent = '';
    document.getElementById('gender_error').textContent = '';
    document.getElementById('consent_error').textContent = '';

    const surname = document.getElementById('surname').value;
    if (surname === '') {
        document.getElementById('surname_error').textContent = 'Введіть, будь ласка, Ваше прізвище.';
        isValid = false;
    }
    const name = document.getElementById('name').value;
    if (name === '') {
        document.getElementById('name_error').textContent = 'Введіть, будь ласка, Ваше ім\'я.';
        isValid = false;
    }
    const birthdate = document.getElementById('birthdate').value;
    if (birthdate === '') {
        document.getElementById('birthdate_error').textContent = 'Введіть, будь ласка, дату народження.';
        isValid = false;
    }
    const phone = document.getElementById('phone').value;
    const phonePattern = /^\+380-\d{2}-\d{3}-\d{4}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById('phone_error').textContent = 'Введіть номер телефону у форматі +380-00-000-0000.';
        isValid = false;
    }
    const email = document.getElementById('email').value;
    if (email === '') {
        document.getElementById('email_error').textContent = 'Введіть, будь ласка, електронну адресу.';
        isValid = false;
    }
    const password = document.getElementById('password').value;
    if (password === '') {
        document.getElementById('password_error').textContent = 'Введіть, будь ласка, пароль.';
        isValid = false;
    }
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        document.getElementById('gender_error').textContent = 'Виберіть, будь ласка, стать.';
        isValid = false;
    }
    const consent = document.getElementById('consent').checked;
    if (!consent) {
        document.getElementById('consent_error').textContent = 'Підтвердіть згоду на обробку персональних даних.';
        isValid = false;
    }
    if (isValid) {
        saveFormData(surname, name, birthdate, phone, email, password, gender.value);
    }
}

function saveFormData(surname, name, birthdate, phone, email, password, gender) {
    const formData = {
        surname: surname,
        name: name,
        birthdate: birthdate,
        phone: phone,
        email: email,
        password: password,
        gender: gender
    };

    console.log('Збережені дані форми:', formData);
    document.getElementById('successMessage').style.display = 'block';

    document.title = 'Реєстрація успішна'; 
}

function submitForm() {
    validateForm(event);
}