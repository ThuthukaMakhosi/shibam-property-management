
let existingUser = null;
const params = new URLSearchParams(window.location.search);
const userId = params.get("id");

const submitButton = document.getElementById("submitButton");

if (userId) {
    submitButton.textContent = "Update User";
}




if (userId) {
    

    fetch(`http://localhost:3000/users/${userId}`)
        .then(response => response.json())
        .then(user => {

            existingUser = user;

            document.getElementById("firstname").value = user.firstname;
            document.getElementById("lastname").value = user.lastname;
            document.getElementById("category").value = user.category;
            document.getElementById("identityNo").value = user.identity;
            document.getElementById("gender").value = user.gender;
            document.getElementById("location").value = user.location;

        })
        .catch(error => {
            console.error("Error fetching user:", error);
        });

}


const fileInput = document.getElementById("fileInput");
const imagePreview = document.getElementById("imagePreview");

fileInput.addEventListener("change", function () {

    const file = fileInput.files[0];

    if (file) {

        const imageUrl = URL.createObjectURL(file);

        imagePreview.innerHTML = `
            <img
                src="${imageUrl}"
                class="img-fluid rounded"
                alt="Selected evidence"
            >
        `;
    }

});

document.getElementById("adduserForm").addEventListener("submit", function (event) {
    console.log("FORM SUBMITTED!");

    event.preventDefault();
    const imageFile = fileInput.files[0];


    // If there is an image
    if (imageFile) {

        const reader = new FileReader();


        // When FileReader has finished reading the image
        reader.onload = function () {

            saveRequest(reader.result);

        };


        // Convert image into data that can be stored
        reader.readAsDataURL(imageFile);


    } else {

        // No image selected
        saveRequest(existingUser ? existingUser.image : "");

    }

});

    function saveRequest(imageUrl) {

    const user = {
        id: userId || "SBM-" + document.getElementById("identityNo").value,
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        category: document.getElementById("category").value,
        identity: document.getElementById("identityNo").value,
        gender: document.getElementById("gender").value,
        location: document.getElementById("location").value,
        date: existingUser ? existingUser.date : new Date().toLocaleDateString(),
        image: imageUrl
    };

    const method = userId ? "PUT" : "POST";

    const url = userId
        ? `http://localhost:3000/users/${userId}`
        : "http://localhost:3000/users";

    fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })

   .then(data => {
        console.log("REDIRECT CODE REACHED");
        window.location.href = "userslist.html"
        })

    .catch(error => {
        console.error("ERROR:", error);
        alert("ERROR — check console");
    });
}
