// script.js

// Check if user is logged in
function checkLogin() {
    if (!sessionStorage.getItem('loggedIn')) {
        window.location.href = 'index.html'; // Redirect to login if not logged in
    }
}

// Login Form Logic
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const usernames = ["Vara_City_Police_Dep"];
        const passwords = ["Vara_City_Police_Dep"];

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (usernames.includes(username) && passwords.includes(password)) {
            sessionStorage.setItem('loggedIn', true);
            window.location.href = 'editor.html'; // Redirect to file editor page
        } else {
            document.getElementById('error-message').textContent = 'Invalid username or password';
        }
    });
}

// File Editor Logic
if (document.getElementById('saveButton')) {
    checkLogin();

    // Save file to localStorage
    document.getElementById('saveButton').addEventListener('click', function() {
        const filename = document.getElementById('filename').value;
        const content = document.getElementById('filecontent').value;

        if (filename && content) {
            localStorage.setItem(filename, content);
            document.getElementById('message').textContent = 'File saved';
        } else {
            document.getElementById('message').textContent = 'Please enter both file name and add text in content';
        }
    });

    // Load file from localStorage
    document.getElementById('loadButton').addEventListener('click', function() {
        const filename = document.getElementById('filename').value;

        if (filename) {
            const content = localStorage.getItem(filename);
            if (content) {
                document.getElementById('filecontent').value = content;
                document.getElementById('message').textContent = 'File saved';
            } else {
                document.getElementById('message').textContent = 'File X found';
            }
        } else {
            document.getElementById('message').textContent = 'put a file name to load';
        }
    });
}
