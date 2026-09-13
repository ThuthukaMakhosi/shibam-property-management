const requestsDashboard = document.getElementById("requestsDashboard");

fetch(`${API_URL}/requests`) .then(response => response.json()) .then(requests => {

if (requests.length === 0) {

    requestsDashboard.innerHTML = `
        <p class="text-white">
            You have no maintenance requests.
        </p>
    `;

} else {


    requests.forEach(function (request) {


        requestsDashboard.innerHTML += `

            <div class="border rounded col-12 md-3 p-4 tm-bg-primary-dark  ">

                <div class="row align-items-center">
                   

                    <div class="col-12 col-lg-8">

                
                        <h4 class="text-white mb-3">
                            ${request.description}
                        </h4>

                       

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
                            Submitted: ${request.date}
                        </p>

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
