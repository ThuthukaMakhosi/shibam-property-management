const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const adminidentity = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const admins =
        JSON.parse(localStorage.getItem("adminList")) || [];

    const admin = admins.find(function (admin) {

        return admin.username === adminidentity &&
               admin.password === password;

    });

    if (admin) {

        localStorage.setItem(
            "loggedInAdmin",
            JSON.stringify(admin)
        );

        window.location.href = "indexadmin.html";

    } else {

        alert("Invalid password/username.");

    }

});