// JavaScript for form validation
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const subjectInput = document.querySelector('#subject');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let message = '';
    if (nameInput.value === '') {
        message += 'Please enter your name.\n';
    }
    if (emailInput.value === '') {
        message += 'Please enter your email address.\n';
    } else if (!isValidEmail(emailInput.value)) {
        message += 'Please enter a valid email address.\n';
    }
    if (subjectInput.value === '') {
        message += 'Please enter a subject.\n';
    }
    if (messageInput.value === '') {
        message += 'Please enter a message.\n';
    }

    if (message === '') {
        alert('Thank you for your message!');
        form.reset();
    } else {
        alert(message);
    }
});

function isValidEmail(email) {
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
