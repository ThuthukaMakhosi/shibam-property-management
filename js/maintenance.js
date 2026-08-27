
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
        id: "MR-" + document.getElementById("location").value + "-" + Date.now(),
        category: document.getElementById("category").value,
        description: document.getElementById("description").value,
        location: loggedInUser.location,
        startDate: document.getElementById("startDate").value,
        priority: document.getElementById("priority").value,
        date: new Date().toLocaleDateString(),
        status: "Submitted",
        image: imageUrl
    };

    let requests =
        JSON.parse(localStorage.getItem("maintenanceRequests")) || [];

    requests.push(request);

    localStorage.setItem(
        "maintenanceRequests",
        JSON.stringify(requests)
    );

    window.location.href = "my-requests.html";


    }

