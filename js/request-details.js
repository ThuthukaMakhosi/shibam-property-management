
const requestDetails =
    document.getElementById("requestDetails");


const urlParams =
    new URLSearchParams(window.location.search);


const requestId =
    urlParams.get("id");


const requests =
    JSON.parse(localStorage.getItem("maintenanceRequests")) || [];


const request =
    requests.find(function (item) {

        return item.id === requestId;

    });


if (request) {

    requestDetails.innerHTML = `

        <div class="tm-bg-primary-dark border rounded p-4 mb-3">

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
                            Date problem started: ${request.startDate}
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

                </div>

            </div>

        </div>

    `;

}

document.addEventListener("DOMContentLoaded", function () {

    

    const requestDetails =
        document.getElementById("requestDetails");


    // Get the ID from the URL

    const urlParams =
        new URLSearchParams(window.location.search);


    const requestId =
        urlParams.get("id");


    console.log("Request ID:", requestId);

     const pdfButton =
        document.getElementById("pdfButton");

    pdfButton.addEventListener("click", function () {

    const { jsPDF } = window.jspdf;

    const pdf = new jsPDF();

    pdf.text("SHIBAM PROPERTIES", 70, 10);

    pdf.text("MAINTENANCE REPORT", 20, 20);

    pdf.text(`Request ID: ${request.id}`, 20, 40);

    pdf.text(`Description: ${request.description}`, 20, 50);

    pdf.text(`Category: ${request.category}`, 20, 60);

    pdf.text(`Location: ${request.location}`, 20, 70);

    pdf.text(`Priority: ${request.priority}`, 20, 80);

    pdf.text(`Status: ${request.status}`, 20, 90);

    pdf.text(`Submitted: ${request.date}`, 20, 100);
    pdf.addImage(
    request.image,
    "JPEG",
    50,
    120,
    120,
    90
);


    pdf.save(`Maintenance-${request.id}.pdf`);
        });
});