function logout() {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("loggedInAdmin");

    window.location.href = "login-redirect.html";
}