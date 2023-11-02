const loginForm = document.querySelector('.login-form');
const signUpForm = document.querySelector('.signup-form');

// Handles the login feature
const loginFormHandler = async (event) => {
    event.preventDefault();

    // Collects username and password from the form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        // sends the POST request to the Login API
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type' : 'application/json' },
        });

        // Once the user is confirmed, redirect them to the dashboard
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

//Handles the signup form 
const signupFormHandler = async (event) => {
    event.preventDefault();

    // Collects the user information from the form
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (name && email && password) {
        // Sends the POST request to the new user API
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type' : 'application/json' },
        });

        // Once successful, redirects to the dashboard
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

// Event Handlers
loginForm.addEventListener('submit', loginFormHandler);
signUpForm.addEventListener('submit', signupFormHandler);
