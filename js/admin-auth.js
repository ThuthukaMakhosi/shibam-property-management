console.log("ADMIN AUTH RUNNING");

const loggedInAdmin = JSON.parse(
    localStorage.getItem("loggedInAdmin")
);

if (!loggedInAdmin) {
    window.location.href = "login-redirect.html";
}