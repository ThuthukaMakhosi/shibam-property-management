const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const roomNumber = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const users =
        JSON.parse(localStorage.getItem("userList")) || [];

    const user = users.find(function (user) {

        return user.location === roomNumber &&
               user.identity === password;

    });

    if (user) {

        localStorage.setItem(
            "loggedInUser",
            JSON.stringify(user)
        );

        window.location.href = "my-requests.html";

    } else {

        alert("Invalid room number or ID/Passport number.");

    }

});