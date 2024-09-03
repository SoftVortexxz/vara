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
            document.getElementById('error-message').textContent = 'wrong pass or user';
        }
    });
}

// File Editor Logic
if (document.getElementById('saveButton')) {
    checkLogin();

document.getElementById('saveButton').addEventListener('click', function() {
    const filename = document.getElementById('filename').value;
    const filecontent = document.getElementById('filecontent').value;
    const message = document.getElementById('message');
    
    if (filename && filecontent) {
        localStorage.setItem(filename, filecontent);
        message.textContent = "file saved";
    } else {
        message.textContent = "put a name and text";
    }
});

document.getElementById('loadButton').addEventListener('click', function() {
    const filename = document.getElementById('filename').value;
    const filecontent = document.getElementById('filecontent');
    const message = document.getElementById('message');
    
    if (filename) {
        const savedContent = localStorage.getItem(filename);
        if (savedContent) {
            filecontent.value = savedContent;
            message.textContent = "file loaded";
        } else {
            message.textContent = "file X found";
        }
    } else {
        message.textContent = "enter player's username to load";
    }
});
