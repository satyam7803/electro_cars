JavaScript (app.js)
const buttons = document.querySelectorAll('button');
const introButton = buttons[0];
const ctaButton = buttons[1];

introButton.addEventListener('click', () => {
window.location.href = '#features';
});

ctaButton.addEventListener('click', () => {
window.location.href = '#features';
});

