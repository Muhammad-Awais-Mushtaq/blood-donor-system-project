document.getElementById("patientForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    // Create patient object
    let patient = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        contact: document.getElementById("contact").value,
        email: document.getElementById("email").value,
        bloodGroup: document.getElementById("bloodGroup").value,
        address: document.getElementById("address").value
    };

    // Retrieve existing patients from localStorage or create empty array if none exist
    let patients = JSON.parse(localStorage.getItem("patients")) || [];
    
    // Add new patient to the list
    patients.push(patient);

    // Save updated patients list back to localStorage
    localStorage.setItem("patients", JSON.stringify(patients));

    // Reset the form after successful submission
    this.reset();
    
    // Display updated patient list
    displayPatients();
});

function displayPatients() {
    // Retrieve patient data from localStorage
    let patients = JSON.parse(localStorage.getItem("patients")) || [];
    
    // Get the UL element where patients will be displayed
    const patientList = document.getElementById("patients");
    
    // Clear the current list before displaying the updated one
    patientList.innerHTML = "";
    
    // Populate the patient list
    patients.forEach(patient => {
        const li = document.createElement("li");
        li.textContent = `${patient.firstName} ${patient.lastName}, ${patient.bloodGroup}, ${patient.contact}`;
        patientList.appendChild(li);
    });
}

// Call displayPatients when the page loads to show existing patients
document.addEventListener("DOMContentLoaded", displayPatients);
