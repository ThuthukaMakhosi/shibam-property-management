
    document.getElementById("addadminForm").addEventListener("submit", function(event) {

    event.preventDefault();

    saveAdmin();

});
    
    function saveAdmin() {
    const user = {
        id: "ADMIN-" + document.getElementById("firstname").value + document.getElementById("lastname").value,
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,

        category: document.getElementById("category").value,
        password: document.getElementById("identityNo").value,
        gender: document.getElementById("gender").value,
        username: document.getElementById("firstname").value + document.getElementById("lastname").value,
        
    };

    let users =
        JSON.parse(localStorage.getItem("adminList")) || [];

    users.push(user);

    localStorage.setItem(
        "adminList",
        JSON.stringify(users)
    );

    window.location.href = "admin-login.html";


    }



