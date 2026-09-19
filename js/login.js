
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const roomNumber = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch(`${API_URL}/login`, {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            location: roomNumber,
            identity: password
        })
    })

    .then(response => {

        if (!response.ok) {
            throw new Error("Invalid room number or ID/Passport number.");
        }

        return response.json();
    })

    .then(user => {

        localStorage.setItem(
            "loggedInUser",
            JSON.stringify(user)
        );

        window.location.href = "my-requests.html";

    })

    .catch(error => {

        console.error("LOGIN ERROR:", error);

        alert(error.message);
    });

});

