window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();  // это предотвратит обновление страницы

        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;

        let user = JSON.parse(localStorage.getItem('ThreadSpace-' + username));
        
        if(user && user.password === password) {
            localStorage.setItem('ThreadSpace-current-user', username); 
            window.location.href = 'comingsoon.html';
        } else {
            alert('Неправильные данные');
        }
    });
});

document.getElementById('createAccount').addEventListener('click', function() {
    // Redirect to register page
    window.location.href = "register.html";
});
