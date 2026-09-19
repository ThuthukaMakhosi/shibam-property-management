
    document.getElementById("addadminForm").addEventListener("submit", function(event) {

    event.preventDefault();

    saveAdmin();

});
    
   function saveAdmin() {

    const user = {

        id: "ADMIN-" +
            document.getElementById("firstname").value +
            document.getElementById("lastname").value,

        firstname: document.getElementById("firstname").value,

        lastname: document.getElementById("lastname").value,

        category: document.getElementById("category").value,

        password: document.getElementById("identityNo").value,

        gender: document.getElementById("gender").value,

        username: document.getElementById("firstname").value + document.getElementById("lastname").value

    };

    fetch(`${API_URL}/admins`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(user)

    })

    .then(response => {

        if (!response.ok) {
            throw new Error("Failed to add admin.");
        }

        return response.json();

    })

    .then(data => {

        console.log(data);

        window.location.href = "adminlist.html";

    })

    .catch(error => {

        console.error("ADD ADMIN ERROR:", error);

        alert(error.message);

    });

}