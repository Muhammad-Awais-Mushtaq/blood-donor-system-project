// check_donors.js

document.addEventListener("DOMContentLoaded", function() {
    const donorsTable = document.querySelector("#donorsTable");

    // Retrieve donors from localStorage
    const donors = JSON.parse(localStorage.getItem("donors")) || [];

    // Populate table with only unapproved donor data
    donors.forEach((donor, index) => {
        if (!donor.approved) { // Only show unapproved donors
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${donor.firstName} ${donor.lastName}</td>
                <td><img src="donor_photo.png" alt="Donor Photo" width="30"></td>
                <td>${donor.bloodGroup}</td>
                <td>${donor.address}</td>
                <td>${donor.contactNumber}</td>
                <td class="action-buttons">
                    <button class="approve-btn" onclick="approveDonor(${index})">Approve</button>
                    <button class="delete-btn" onclick="deleteDonor(${index})">Delete</button>
                </td>
            `;

            donorsTable.querySelector("tbody").appendChild(row);
        }
    });
});

// Approve Donor Function
function approveDonor(index) {
    let donors = JSON.parse(localStorage.getItem("donors")) || [];
    donors[index].approved = true; // Set donor as approved

    // Save updated donors list back to localStorage
    localStorage.setItem("donors", JSON.stringify(donors));

    // Update the table (No reload needed)
    document.querySelector("#donorsTable tbody").innerHTML = '';
    populateDonorRequests(); // Re-populate the donor requests table
}

// Delete Donor Function
function deleteDonor(index) {
    let donors = JSON.parse(localStorage.getItem("donors")) || [];
    donors.splice(index, 1); // Remove donor from the array

    // Save updated donors list back to localStorage
    localStorage.setItem("donors", JSON.stringify(donors));

    // Update the table (No reload needed)
    document.querySelector("#donorsTable tbody").innerHTML = '';
    populateDonorRequests(); // Re-populate the donor requests table
}

// Function to repopulate the donor requests table
function populateDonorRequests() {
    const donorsTable = document.querySelector("#donorsTable");
    const donors = JSON.parse(localStorage.getItem("donors")) || [];

    donors.forEach((donor, index) => {
        if (!donor.approved) { // Only show unapproved donors
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${donor.firstName} ${donor.lastName}</td>
                <td><img src="donor_photo.png" alt="Donor Photo" width="30"></td>
                <td>${donor.bloodGroup}</td>
                <td>${donor.address}</td>
                <td>${donor.contactNumber}</td>
                <td class="action-buttons">
                    <button class="approve-btn" onclick="approveDonor(${index})">Approve</button>
                    <button class="delete-btn" onclick="deleteDonor(${index})">Delete</button>
                </td>
            `;

            donorsTable.querySelector("tbody").appendChild(row);
        }
    });
}
