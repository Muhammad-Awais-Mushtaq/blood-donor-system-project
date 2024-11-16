// Function to open modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

// Function to close modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Function to handle adding donor or patient
function addDetails(type) {
    let name, bloodGroup, address, contact, image;
    if (type === 'donor') {
        name = document.getElementById('donorName').value;
        bloodGroup = document.getElementById('donorBloodGroup').value;
        address = document.getElementById('donorAddress').value;
        contact = document.getElementById('donorContact').value;
        image = document.getElementById('donorImage').files[0];  // Get donor photo
    } else if (type === 'patient') {
        name = document.getElementById('patientName').value;
        bloodGroup = document.getElementById('patientBloodGroup').value;
        address = document.getElementById('patientAddress').value;
        contact = document.getElementById('patientContact').value;
        image = null;  // Patients may not have a photo upload, or handle accordingly
    }

    // Create a new row in the table
    const table = document.querySelector(`.${type}-table tbody`);
    const row = document.createElement('tr');
    
    let photoUrl = image ? URL.createObjectURL(image) : "default_photo.png"; // If no image, use default photo
    row.innerHTML = `
        <td>${name}</td>
        <td><img src="${photoUrl}" alt="${type} Photo" width="30"></td>
        <td>${bloodGroup}</td>
        <td>${address}</td>
        <td>${contact}</td>
        <td class="action-buttons">
            <button class="edit-btn" onclick="editDetails(this, '${type}')">Edit</button>
            <button class="delete-btn" onclick="deleteDetails(this, '${type}')">Delete</button>
        </td>
    `;
    table.appendChild(row);

    closeModal(`${type}Modal`);
    document.getElementById(`${type}Form`).reset();
}

// Function to delete details (donor or patient)
function deleteDetails(button, type) {
    if (confirm(`Are you sure you want to delete this ${type}?`)) {
        const row = button.closest('tr');
        row.remove();
    }
}

// Function to edit donor or patient details
function editDetails(button, type) {
    const row = button.closest('tr');
    const cells = row.querySelectorAll('td');

    const name = cells[0].textContent;
    const bloodGroup = cells[2].textContent;
    const address = cells[3].textContent;
    const contact = cells[4].textContent;

    // Open modal for editing
    openModal(`${type}Modal`);

    // Pre-fill the form with existing data
    document.getElementById(`${type}Name`).value = name;
    document.getElementById(`${type}BloodGroup`).value = bloodGroup;
    document.getElementById(`${type}Address`).value = address;
    document.getElementById(`${type}Contact`).value = contact;

    // Optionally, you can add functionality to allow image preview for editing
    document.getElementById(`${type}Form`).onsubmit = function(e) {
        e.preventDefault();
        // After editing, update the table row
        cells[0].textContent = document.getElementById(`${type}Name`).value;
        cells[2].textContent = document.getElementById(`${type}BloodGroup`).value;
        cells[3].textContent = document.getElementById(`${type}Address`).value;
        cells[4].textContent = document.getElementById(`${type}Contact`).value;

        // Close the modal and reset form
        closeModal(`${type}Modal`);
        document.getElementById(`${type}Form`).reset();
    };
}
