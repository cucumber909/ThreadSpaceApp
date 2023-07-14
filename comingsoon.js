window.addEventListener('DOMContentLoaded', (event) => {
    var username = localStorage.getItem('ThreadSpace-current-user');
    var userType = "";

    if (username === "cucumber9090") {
        userType = " (Developer)";
    }

    document.getElementById('usernameDisplay').textContent = username + userType;

    document.getElementById('themeButton').addEventListener('click', function() {
        var currentTheme = document.getElementById('pagestyle').getAttribute("href");
        
        if (currentTheme.endsWith("styles.css")) {
            document.getElementById('pagestyle').setAttribute("href", "dark.css");
        } else {
            document.getElementById('pagestyle').setAttribute("href", "styles.css");
        }
    });

    document.getElementById('changePasswordButton').addEventListener('click', function() {
        window.location.href = "changepassword.html";
    });

    document.getElementById('logoutButton').addEventListener('click', function() {
        let currentUser = localStorage.getItem('ThreadSpace-current-user');
        let confirmLogout = confirm("Вы точно хотите выйти из учетной записи " + currentUser + "?");
        if (confirmLogout) {
            localStorage.removeItem('ThreadSpace-current-user');
            window.location.href = 'login.html';
        }
    });

    var posts = JSON.parse(localStorage.getItem('posts')) || [];

    function displayPosts() {
        var postsDiv = document.getElementById('posts');
        postsDiv.innerHTML = '';

        for (var i = 0; i < posts.length; i++) {
            (function(i) {
                var postDiv = document.createElement('div');
                var post = posts[i];
                postDiv.textContent = post.username + ': ' + post.text;

                var likeButton = document.createElement('button');
                likeButton.textContent = 'Like (' + post.likes + ')';
                likeButton.addEventListener('click', function() {
                    if(!post.likedBy.includes(username)) {
                        post.likes++;
                        post.likedBy.push(username);
                        localStorage.setItem('posts', JSON.stringify(posts));
                        displayPosts();
                    }
                });

                var deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.classList.add("delete");
                deleteButton.addEventListener('click', function() {
                    if (username === post.username || userType === " (Developer)") {
                        posts.splice(i, 1);
                        localStorage.setItem('posts', JSON.stringify(posts));
                        displayPosts();
                    }
                });

                postDiv.appendChild(likeButton);
                postDiv.appendChild(deleteButton);
                postsDiv.appendChild(postDiv);
            })(i);
        }
    }

    document.getElementById('postForm').addEventListener('submit', function(event) {
        event.preventDefault();

        var postText = document.getElementById('postText').value;
        var username = localStorage.getItem('ThreadSpace-current-user');

        if (postText.trim() === '') {
            alert('Post cannot be empty');
            return;
        }

        var newPost = {
            text: postText,
            username: username,
            likes: 0,
            likedBy: []
        };

        posts.push(newPost);
        localStorage.setItem('posts', JSON.stringify(posts));

        document.getElementById('postText').value = '';

        displayPosts();
    });

    displayPosts();
});
window.addEventListener('DOMContentLoaded', (event) => {
  var userAgent = navigator.userAgent.toLowerCase();

  // Проверяем, является ли устройство мобильным
  var isMobile = /iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(userAgent);

  // Применяем разные стили в зависимости от типа устройства
  if (isMobile) {
    // Мобильное устройство
    document.body.classList.add('mobile');
  } else {
    // Десктопное устройство
    document.body.classList.add('desktop');
  }
});
