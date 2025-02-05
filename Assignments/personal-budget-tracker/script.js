document.getElementById('expense-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const income = parseFloat(document.getElementById('income').value) || 0;
    const expense = parseFloat(document.getElementById('expense').value) || 0;
    const category = document.getElementById('category').value;
    const date = document.getElementById('date').value;
    
    // Determine whether it is income or expense
    const type = income > 0 ? 'Income' : 'Expense';
    const amount = income > 0 ? income : expense;

    // Add new row to the table
    const tableBody = document.getElementById('summary-table');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${category}</td>
        <td>$${amount.toFixed(2)}</td>
        <td>${new Date(date).toLocaleDateString()}</td>
        <td>${type}</td>
    `;
    tableBody.appendChild(row);

    // Reset the form
    document.getElementById('expense-form').reset();
});
