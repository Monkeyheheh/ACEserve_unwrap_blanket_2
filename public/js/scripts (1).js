function signUp() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const message = document.getElementById('message');

    if (!username || !password) {
        message.textContent = "Both fields are required.";
        return;
    }

    if (localStorage.getItem(username)) {
        message.textContent = "Username already exists.";
        return;
    }

    localStorage.setItem(username, password);
    message.style.color = "green";
    message.textContent = "Sign up successful. You can now log in.";
}

function logIn() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const message = document.getElementById('message');

    if (!username || !password) {
        message.textContent = "Both fields are required.";
        return;
    }

    const storedPassword = localStorage.getItem(username);

    if (storedPassword === password) {
        localStorage.setItem('currentUser', username);
        window.location.href = 'dashboard.html';
    } else {
        message.style.color = "red";
        message.textContent = "Invalid username or password.";
    }
}