document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("#donorForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get form data
        const donor = {
            name: document.querySelector("#name").value,
            bloodGroup: document.querySelector("#bloodGroup").value,
            address: document.querySelector("#address").value,
            contact: document.querySelector("#contact").value,
            approved: false // Donor is not approved initially
        };

        // Get existing donors from localStorage
        let donors = JSON.parse(localStorage.getItem("donors")) || [];
        donors.push(donor); // Add new donor to the array

        // Save updated donors array to localStorage
        localStorage.setItem("donors", JSON.stringify(donors));

        // Clear the form fields
        form.reset();
        alert("Donor added successfully! Awaiting approval.");
    });
});
