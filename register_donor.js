document.getElementById("donorForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    // Create donor object
    let donor = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        contact: document.getElementById("contact").value,
        email: document.getElementById("email").value,
        cnic: document.getElementById("cnic").value,
        age: document.getElementById("age").value,
        bloodGroup: document.getElementById("bloodGroup").value,
        address: document.getElementById("address").value
    };

    // Retrieve existing donors from localStorage or create empty array if none exist
    let donors = JSON.parse(localStorage.getItem("donors")) || [];
    
    // Add new donor to the list
    donors.push(donor);

    // Save updated donors list back to localStorage
    localStorage.setItem("donors", JSON.stringify(donors));

    // Reset the form after successful submission
    this.reset();
    
    // Display updated donor list
    displayDonors();
});

function displayDonors() {
    // Retrieve donor data from localStorage
    let donors = JSON.parse(localStorage.getItem("donors")) || [];
    
    // Get the UL element where donors will be displayed
    const donorList = document.getElementById("donors");
    
    // Clear the current list before displaying the updated one
    donorList.innerHTML = "";
    
    // Populate the donor list
    donors.forEach(donor => {
        const li = document.createElement("li");
        li.textContent = `${donor.firstName} ${donor.lastName}, ${donor.bloodGroup}, ${donor.contact}`;
        donorList.appendChild(li);
    });
}

// Call displayDonors when the page loads to show existing donors
document.addEventListener("DOMContentLoaded", displayDonors);
