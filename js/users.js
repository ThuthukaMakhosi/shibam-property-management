const userContainer = document.getElementById("userContainer");

fetch("http://localhost:3000/users")
    .then(response => response.json())
    .then(users => {



if (users.length === 0) {

    userContainer.innerHTML = `
        <p class="text-white">
            Users not added.
        </p>
    `;

} else {

    users.forEach(function (user) {

        userContainer.innerHTML += `

            <div class="border rounded p-4 mb-3">

                <div class="row align-items-center">
                   

                    <div class="col-12 col-lg-8">

                    <img
                        src="${user.image}"
                        class="img-fluid rounded mb-3"
                        alt="Maintenance evidence"
                    >
                        <h4 class="text-white mb-3">
                            ${user.firstname} ${user.lastname}
                        </h4>

                        <p class="text-white mb-2">
                            <i class="fas fa-wrench me-2"></i>
                            ${user.category}
                        </p>

                        <p class="text-white mb-2">
                            <i class="fas fa-home me-2"></i>
                           Room: ${user.location}
                        </p>
                        
                        <p class="text-white mb-2">
                            <i class="fas fa-clock me-2"></i>
                            ID/ Passport No.: ${user.identity}
                        </p>

                        <p class="text-white mb-2">
                            <i class="fas fa-transgender me-2"></i>
                            Gender: ${user.gender}
                        </p>

                        <p class="text-white mb-2">
                            <i class="fas fa-calendar me-2"></i>
                            Date: ${user.date}
                        </p>

                        

                    </div>

                    

                </div>

            </div>

        `;
    });
}

 })
.catch(error => {
        console.error("Error getting users:", error);
});
