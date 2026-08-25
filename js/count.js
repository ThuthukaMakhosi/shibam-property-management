document.addEventListener("DOMContentLoaded", function () {

    /* User count */

    const users =
        JSON.parse(localStorage.getItem("userList")) || [];

    const totalUsers =
        document.getElementById("totalUsers");

    totalUsers.textContent = users.length;


    /* Request count */

    const requests =
        JSON.parse(localStorage.getItem("maintenanceRequests")) || [];

    const totalRequests =
        document.getElementById("totalRequests");

    totalRequests.textContent = requests.length;

});