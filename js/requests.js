const loggedInUser =
    JSON.parse(localStorage.getItem("loggedInUser"));

const requestsContainer =
    document.getElementById("requestsContainer");

fetch(`http://localhost:3000/requests/${loggedInUser.id}`)
    .then(response => response.json())
    .then(myRequests => {

        if (myRequests.length === 0) {

            requestsContainer.innerHTML = `
                <p class="text-white">
                    You have no maintenance requests.
                </p>
            `;

        } else {

            myRequests.forEach(function(request) {

                requestsContainer.innerHTML += `
                    <div class="border rounded p-4 mb-3">
                        <div class="row align-items-center">

                            <div class="col-12 col-lg-8">

                                <img
                                    src="${request.image}"
                                    class="img-fluid rounded mb-3"
                                    alt="Maintenance evidence"
                                >

                                <h4 class="text-white mb-3">
                                    ${request.description}
                                </h4>

                                <p class="text-white mb-2">
                                    <i class="fas fa-hashtag me-2"></i>
                                    ${request.id}
                                </p>

                                <p class="text-white mb-2">
                                    <i class="fas fa-wrench me-2"></i>
                                    ${request.category}
                                </p>

                                <p class="text-white mb-2">
                                    <i class="fas fa-home me-2"></i>
                                    ${request.location}
                                </p>

                                <p class="text-white mb-2">
                                    <i class="fas fa-clock me-2"></i>
                                    Priority: ${request.priority}
                                </p>

                                <p class="text-white mb-2">
                                    <i class="fas fa-calendar me-2"></i>
                                    Date problem started: ${request.start_date}
                                </p>

                                <p class="text-white mb-2">
                                    <i class="fas fa-calendar me-2"></i>
                                    Submitted: ${request.date}
                                </p>

                            </div>

                            <div class="col-12 col-lg-4 mt-4 mt-lg-0">

                                <span class="badge bg-warning text-dark mb-3">
                                    ${request.status}
                                </span>

                                <br>
                                <div class="py-4">
                                <a
                                    href="request-details.html?id=${request.id}"
                                    class="btn btn-primary text-uppercase mt-2"
                                >
                                    <i class="fas fa-eye me-2"></i>
                                    View Details
                                </a>
                                </div>
                                                               

                                <button
                                    class="btn btn-primary text-uppercase mark-done "
                                    data-request-id="${request.id}"
                                >
                                    <i class="fas fa-check me-2"></i>
                                    Mark as Done
                                </button>

                            </div>

                        </div>
                    </div>
                `;
            });
        }
    })
    .catch(error => {
        console.error("ERROR LOADING REQUESTS:", error);
    });
/* LISTEN FOR MARK AS DONE */

requestsContainer.addEventListener("click", function (event) {

    const button = event.target.closest(".mark-done");

    if (button) {

        const requestId = button.dataset.requestId;

        markAsDone(requestId);

    }

});

function markAsDone(requestId) {

    fetch(`http://localhost:3000/requests/${requestId}`, {
        method: "DELETE"
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        location.reload();
    })
    .catch(error => {
        console.error("ERROR DELETING REQUEST:", error);
    });
}