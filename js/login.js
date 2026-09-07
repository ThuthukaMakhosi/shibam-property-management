const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const roomNumber = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch("http://localhost:3000/users")
        .then(response => response.json())
        .then(users => {

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

        })
        .catch(error => {

            console.error("LOGIN ERROR:", error);

            alert("Unable to connect to the server.");

        });

});