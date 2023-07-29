// JavaScript for Signup and Profile pages

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const errorMessage = 'Error: All fields are mandatory!';
})
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
    window.location.href = 'signup.html';
}

// Event listeners for Signup page
const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', handleSignup);

// Event listener for Profile page
const logoutButton = document.getElementById('logout');
logoutButton.addEventListener('click', handleLogout);

// Check if the user is logged in, and redirect accordingly
if (window.location.href.includes('profile.html')) {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
        // User is not logged in, redirect to Signup page
        window.location.href = 'signup.html';
    } else {
        // User is logged in, display user details (optional)
        // Replace this with your actual code to display user details
        const username = localStorage.getItem('username');
        // Display the username on the Profile page
    }
} else if (window.location.href.includes('signup.html')) {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
        // User is logged in, redirect to Profile page
        window.location.href = 'profile.html';
    }
}