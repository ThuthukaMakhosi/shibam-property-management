
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
const fileInput = document.getElementById("fileInput");
const imagePreview = document.getElementById("imagePreview");
document.getElementById("location").textContent = loggedInUser.location;

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

document.getElementById("maintenanceForm").addEventListener("submit", function (event) {

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
    const request = {
        id: "MR-" + loggedInUser.location + "-" + Date.now(),
        user_id: loggedInUser.id,
        category: document.getElementById("category").value,
        description: document.getElementById("description").value,
        location: loggedInUser.location,
        start_date: document.getElementById("startDate").value,
        priority: document.getElementById("priority").value,
        date: new Date().toLocaleDateString(),
        status: "Submitted",
        image: imageUrl
    };

    fetch("http://localhost:3000/requests", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(request)
    })
    .then(response => response.json())
    .then(data => {

        console.log(data);
        window.location.href = "my-requests.html";

    })
    .catch(error => {

        console.error("Error saving request:", error);
        alert("Failed to submit maintenance request.");

    });
}