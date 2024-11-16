// registered_patients.js

document.addEventListener("DOMContentLoaded", function() {
    const registeredPatientsTable = document.querySelector("#registeredPatientsTable");

    // Retrieve patients from localStorage (Assuming similar structure to donors)
    const patients = JSON.parse(localStorage.getItem("patients")) || [];

    // Populate table with only registered patients data
    patients.forEach((patient) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${patient.firstName} ${patient.lastName}</td>
            <td><img src="patient_photo.png" alt="Patient Photo" width="30"></td>
            <td>${patient.bloodGroup}</td>
            <td>${patient.address}</td>
            <td>${patient.contactNumber}</td>
        `;

        registeredPatientsTable.querySelector("tbody").appendChild(row);
    });
});
