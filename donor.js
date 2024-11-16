// JavaScript to handle donor edit and delete actions

// Function to handle edit donor action
function editDonor(button) {
    // Find the table row (tr) containing this button
    const row = button.closest('tr');
    
    // Extract donor details from the row
    const name = row.cells[0].innerText;
    const bloodGroup = row.cells[2].innerText;
    const address = row.cells[3].innerText;
    const contact = row.cells[4].innerText;

    // Show an alert with donor details (this can be replaced by an edit form)
    alert(`Edit Donor: \nName: ${name}\nBlood Group: ${bloodGroup}\nAddress: ${address}\nContact: ${contact}`);

    // Logic for editing can be implemented here
}

// Function to handle delete donor action
function deleteDonor(button) {
    // Confirm if the user wants to delete the donor
    if (confirm('Are you sure you want to delete this donor?')) {
        // Find the table row (tr) containing this button
        const row = button.closest('tr');
        
        // Remove the row from the table
        row.remove();
    }
}
