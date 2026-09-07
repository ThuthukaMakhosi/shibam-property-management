document.addEventListener("DOMContentLoaded", function () {

    fetch("http://localhost:3000/users/count")
        .then(response => response.json())
        .then(data => {

            const totalUsers =
                document.getElementById("totalUsers");

            totalUsers.textContent = data.count;

        })
        .catch(error => {
            console.error("Error fetching user count:", error);
        });



 fetch("http://localhost:3000/requests/count")
        .then(response => response.json())
        .then(data => {

            const totalRequests =
                document.getElementById("totalRequests");

            totalRequests.textContent = data.count;

        })
        .catch(error => {
            console.error("Error fetching request count:", error);
        });

});