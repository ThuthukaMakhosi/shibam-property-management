const requestsDashboard = document.getElementById("requestsDashboard");

const requests =
    JSON.parse(localStorage.getItem("maintenanceRequests")) || [];


document.getElementById("adminName").textContent = "Welcome, " + loggedInAdmin.firstname;
if (requests.length === 0) {

    requestsDashboard.innerHTML = `
        <p class="text-white">
            You have no maintenance requests.
        </p>
    `;

} else {

    requests.forEach(function (request) {

        requestsDashboard.innerHTML += `

            <div class="border rounded p-4 mb-3 col-12 tm-bg-primary-dark">

                <div class="row align-items-center">
                   

                    <div class="col-12 col-lg-8">

                    
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
                            Date problem started: ${request.startDate}
                        </p>

                        <p class="text-white mb-2">
                            <i class="fas fa-calendar me-2"></i>
                            Submitted: ${request.date}
                        </p>

                    </div>

                </div>

            </div>

        `;
    });
}