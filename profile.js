// // profile.js

// document.addEventListener('DOMContentLoaded', function() {
//     // Check if the user has an access token in local storage
//     const accessToken = localStorage.getItem('accessToken');
//     if (!accessToken) {
//         // Redirect to the signup page if the user is not authenticated
//         window.location.href = 'index.html';
//     }

//     // Display user's details on the profile page
//     const username = localStorage.getItem('username');
//     const email = localStorage.getItem('email');
//     document.getElementById('profile-username').textContent = username;
//     document.getElementById('profile-email').textContent = email;

//     // Logout functionality
//     document.getElementById('logout-btn').addEventListener('click', function() {
//         // Clear the local storage
//         localStorage.removeItem('accessToken');
//         localStorage.removeItem('username');
//         localStorage.removeItem('email');

//         // Redirect to the signup page after logout
//         window.location.href = 'index.html';
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    // Check if the user has an access token in local storage
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
        // Redirect to the signup page if the user is not authenticated
        window.location.href = 'index.html';
    } else if (window.location.href.includes('index.html')) {
        // If the user is on the signup page and logged in, redirect to the profile page
        window.location.href = 'profile.html';
    }

    // Display user's details on the profile page
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    document.getElementById('profile-username').textContent = username;
    document.getElementById('profile-email').textContent = email;

    // Logout functionality
    document.getElementById('logout-btn').addEventListener('click', function() {
        // Clear the local storage
        localStorage.removeItem('accessToken');
        localStorage.removeItem('username');
        localStorage.removeItem('email');

        // Redirect to the signup page after logout
        window.location.href = 'index.html';
    });

    // Signup form handling (form validation, submission, and success message)
    const form = document.getElementById('signup-form');
    const errorMessage = 'Error: All fields are mandatory!';

    form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
            event.preventDefault();

            const requiredFields = form.querySelectorAll(':invalid');
            requiredFields.forEach(function(field) {
                field.setCustomValidity(errorMessage);
            });

            form.reportValidity();
        }
    });

    const inputFields = form.querySelectorAll('input[required]');
    inputFields.forEach(function(field) {
        field.addEventListener('input', function() {
            field.setCustomValidity('');
        });
    });
});

// Function to generate a random access token
function generateAccessToken() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < 16; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        token += characters.charAt(randomIndex);
    }
    return token;
}

// Function to handle the signup process
function handleSignup(event) {
    event.preventDefault();

    // Get user details from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Get other user details from the form

    // Check if the user already exists in local storage (optional, you can implement this check)

    // Generate the access token
    const accessToken = generateAccessToken();

    // Save user details and access token to local storage
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('username', username);
    // Save other user details to local storage

    // Display success message
    // Replace this with your actual success message display logic
    alert('Signup successful! Redirecting to your Profile...');

    // Redirect to the Profile page
    window.location.href = 'profile.html';
}

// Function to handle the logout process
function handleLogout() {
    // Clear local storage
    localStorage.clear();

    // Display logout success message (optional)
    // Replace this with your actual logout success message display logic
    alert('You have been logged out. Redirecting to Signup...');

    // Redirect to the Signup page
    window.location.href = 'index.html';
}

// Event listeners for Signup page
const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', handleSignup);

// Event listener for Profile page
const logoutButton = document.getElementById('logout');
logoutButton.addEventListener('click', handleLogout);