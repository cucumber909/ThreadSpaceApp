document.getElementById('changePasswordForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var oldPassword = document.getElementById('oldPassword').value;
  var newPassword = document.getElementById('newPassword').value;
  
  var username = localStorage.getItem('loggedInUser');
  var savedPassword = localStorage.getItem(username);
  
  if (oldPassword === savedPassword) {
    localStorage.setItem(username, newPassword);
    alert('Password changed successfully');
    localStorage.removeItem('loggedInUser'); // Remove the current logged in user
    window.location.href = "login.html";  // Redirect to login page
  } else {
    alert('Incorrect old password');
  }
});
