// User table with username:password pairs
const userTable = {
    "matejgamer12": "ebea5efc-9eb4-497b-b402-f0930b582b48",
};

// Handle the login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('error-message');

    if (checkCredentials(username, password)) {
        // Redirect to the editor page
        window.location.href = 'https://softvortexxz.github.io/vara/editor.html';
    } else {
        errorMessage.textContent = 'Invalid username or password.';
    }
});

// Utility function to check user credentials
function checkCredentials(username, password) {
    const storedPassword = userTable[username];
    return storedPassword === password;
}

// Set initial content for the textarea when the document loads
document.addEventListener('DOMContentLoaded', function() {
    const initialContent = `Name:\nAge:\nDate of birth:\nCountry of birth:\nCurrent Country:\nJob:\n\nCriminal records:`;
    
    // Set initial content for the textarea
    document.getElementById('filecontent').value = initialContent;
});

// Save button functionality
document.getElementById('saveButton').addEventListener('click', function() {
    const filename = document.getElementById('filename').value.trim();
    const filecontent = document.getElementById('filecontent').value;
    const message = document.getElementById('message');
    
    if (filename && filecontent) {
        localStorage.setItem(filename, filecontent);
        message.textContent = "File saved";
    } else {
        message.textContent = "Put the person's user, info and history";
    }
});

// Load button functionality
document.getElementById('loadButton').addEventListener('click', function() {
    const filename = document.getElementById('filename').value.trim();
    const filecontent = document.getElementById('filecontent');
    const message = document.getElementById('message');
    
    if (filename) {
        const savedContent = localStorage.getItem(filename);
        if (savedContent) {
            filecontent.value = savedContent;
            message.textContent = "File loaded";
        } else {
            message.textContent = "File not found";
        }
    } else {
        message.textContent = "Put someone's user to load their info & history";
    }
});

// New User button functionality to clear inputs and reset content
document.getElementById('newUserButton').addEventListener('click', function() {
    document.getElementById('filename').value = '';
    document.getElementById('filecontent').value = `Name:\nAge:\nDate of birth:\nCountry of birth:\nCurrent Country:\nJob:\n\nCriminal records:`;
    document.getElementById('message').textContent = '';
});
