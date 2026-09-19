const logoutLink = document.getElementById("logoutLink");

logoutLink.addEventListener("click", function (event) {

    event.preventDefault();

    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("loggedInAdmin");

    window.location.href = "login-redirect.html";

});