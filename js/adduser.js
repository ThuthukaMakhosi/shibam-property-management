console.log("ADDUSER JS RUNNING");
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
        saveRequest("");

    }

});

    function saveRequest(imageUrl) {
           console.log("saveRequest is running!");
    const user = {
        id: "SBM-" + document.getElementById("identityNo").value,
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,

        category: document.getElementById("category").value,
        identity: document.getElementById("identityNo").value,
        gender: document.getElementById("gender").value,
        location: document.getElementById("location").value,
        date: new Date().toLocaleDateString(),
        image: imageUrl
    };

    fetch("http://localhost:3000/users", {
    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify(user)
})
.then(response => response.json())
.then(data => {

    console.log("User added:", data);

    window.location.href = "userslist.html";

})
.catch(error => {

    console.error("Error adding user:", error);

});


    }



