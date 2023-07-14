var captchaValue = Math.floor(Math.random() * 9000) + 1000;
document.getElementById('captcha').textContent = captchaValue;

document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var captchaInput = document.getElementById('captchaInput').value;
  
  if (captchaInput != captchaValue) {
    alert('Incorrect CAPTCHA');
    return;
  }
  
  let existingUser = JSON.parse(localStorage.getItem('ThreadSpace-' + username));
  if (existingUser) {
    alert('Этот никнейм уже занят. Пожалуйста, выберите другой.');
    return;
  }

  let user = {
    username: username,
    password: password
  };

  localStorage.setItem('ThreadSpace-' + username, JSON.stringify(user));
  alert('Registration successful');
  
  // Redirect to login page
  window.location.href = "login.html";
});

