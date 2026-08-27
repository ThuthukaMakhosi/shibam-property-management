const userContainer = document.getElementById("adminContainer");

const admins = JSON.parse(localStorage.getItem("adminList")) || [];



if (admins.length === 0) {

    userContainer.innerHTML = `
        <p class="text-white">
            Users not added.
        </p>
    `;

} else {

    admins.forEach(function (admin) {

        adminContainer.innerHTML += `

            <div class="border rounded p-4 mb-3">

                <div class="row align-items-center">
                   

                    <div class="col-12 col-lg-8">

                   
                        <h4 class="text-white mb-3">
                            ${admin.firstname} ${admin.lastname}
                        </h4>

                        <p class="text-white mb-2">
                            <i class="fas fa-wrench me-2"></i>
                            ${admin.category}
                        </p>

                        
                        <p class="text-white mb-2">
                            <i class="fas fa-clock me-2"></i>
                            ID/ Passport No.: ${admin.password}
                        </p>

                        <p class="text-white mb-2">
                            <i class="fas fa-transgender me-2"></i>
                            Gender: ${admin.gender}
                        </p>

                    </div>


                </div>

            </div>

        `;
    });
}