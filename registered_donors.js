// registered_donors.js

document.addEventListener("DOMContentLoaded", function() {
    const registeredDonorsTable = document.querySelector("#registeredDonorsTable");

    // Retrieve donors from localStorage
    const donors = JSON.parse(localStorage.getItem("donors")) || [];

    // Populate table with only approved donor data
    donors.forEach((donor) => {
        if (donor.approved) { // Only show approved donors
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${donor.firstName} ${donor.lastName}</td>
                <td><img src="donor_photo.png" alt="Donor Photo" width="30"></td>
                <td>${donor.bloodGroup}</td>
                <td>${donor.address}</td>
                <td>${donor.contactNumber}</td>
            `;

            registeredDonorsTable.querySelector("tbody").appendChild(row);
        }
    });
});
