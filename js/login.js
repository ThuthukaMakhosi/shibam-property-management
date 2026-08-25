const users = JSON.parse(localStorage.getItem("userList")) || [];
const urlParams = new URLSearchParams(window.location.search);

document.getElementById("loginForm").addEventListener("submit", function (event) {

  

    const login = {
        username: document.getElementById("username").value,
        password: document.getElementById("passoword").value,        
    };
});


   