const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('open');
}); 

const LogButton = document.getElementById('LogButton');
const LogPage = document.getElementById('LogPage');
const LogPageX = document.getElementById('LogPageX');

LogButton.addEventListener('click', () => {
  LogPage.classList.toggle('open');
});

LogPageX.addEventListener('click', () => {
  LogPage.classList.remove('open');
});

// JavaScript code for login functionality
const form = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform login validation and authentication here
    if (username === 'admin' && password === 'password') {
        // Successful login, redirect to another page or perform other actions
        window.location.href = 'dashboard.html';
    } else {
        errorMessage.textContent = 'Invalid username or password.';
    }
});