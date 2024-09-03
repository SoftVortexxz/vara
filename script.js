document.addEventListener('DOMContentLoaded', function() {
    const initialContent = `User:
Age:
Date of birth:
Country of birth:
Current Country:
Job:
Crimes committed:`;

    document.getElementById('filecontent').value = initialContent;
});

document.getElementById('saveButton').addEventListener('click', function() {
    const filename = document.getElementById('filename').value;
    const filecontent = document.getElementById('filecontent').value;
    const message = document.getElementById('message');
    
    if (filename && filecontent) {
        localStorage.setItem(filename, filecontent);
        message.textContent = "File saved";
    } else {
        message.textContent = "put the person's user and put text inside the textbox";
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
            message.textContent = "File loaded";
        } else {
            message.textContent = "File not found";
        }
    } else {
        message.textContent = "Please enter a filename to load.";
    }
});
