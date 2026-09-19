const adminContainer = document.getElementById("adminContainer");

fetch(`${API_URL}/admins`)

    .then(response => {

        if (!response.ok) {
            throw new Error("Failed to load admins.");
        }

        return response.json();

    })

    .then(admins => {

        if (admins.length === 0) {

            adminContainer.innerHTML = `
                <p class="text-white">
                    Admins not added.
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

    })

    .catch(error => {

        console.error("ADMIN LIST ERROR:", error);

        adminContainer.innerHTML = `
            <p class="text-white">
                Failed to load admins.
            </p>
        `;

    });