const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const adminidentity = document.getElementById("username").value;

    const password = document.getElementById("password").value;


    fetch(`${API_URL}/admin-login`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            username: adminidentity,
            password: password

        })

    })

    .then(response => {

        if (!response.ok) {
            throw new Error("Invalid password/username.");
        }

        return response.json();

    })

    .then(admin => {

        localStorage.setItem(
            "loggedInAdmin",
            JSON.stringify(admin)
        );

        window.location.href = "indexadmin.html";

    })

    .catch(error => {

        console.error("ADMIN LOGIN ERROR:", error);

        alert(error.message);

    });

});