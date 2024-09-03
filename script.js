document.addEventListener('DOMContentLoaded', function() {
    const initialContent = `Name:\nAge:\nDate of birth:\nCountry of birth:\nCurrent Country:\nJob:\n\nCriminal records:`;
    
    // Set initial content for the textarea
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
        message.textContent = "Put the person's user, info and history";
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
        message.textContent = "Put someone's user to load their info & history";
    }
});
