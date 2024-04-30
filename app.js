document.addEventListener('DOMContentLoaded', function() {
    // Simulate fetching data from a server
    const employees = [
        { id: 1, name: 'Akalnka Liyanage', rating: 7 },
        { id: 2, name: 'Ranshinhe', rating: 8 },
        { id: 3, name: 'Nishadi Karunarathne', rating: 9 }
    ];

    const employeesContainer = document.getElementById('employees');
    employees.forEach(employee => {
        const employeeCard = document.createElement('div');
        employeeCard.className = 'employee-card';
        employeeCard.innerHTML = `
            <h3>${employee.name}</h3>
            <p>Current Rating: <strong>${employee.rating}</strong></p>
            <input type="number" min="1" max="10" value="${employee.rating}" id="rating-${employee.id}">
            <button onclick="updateRating(${employee.id})">Update Rating</button>
        `;
        employeesContainer.appendChild(employeeCard);
    });

    window.updateRating = function(employeeId) {
        const newRating = document.getElementById(`rating-${employeeId}`).value;
        alert(`Rating for employee ${employeeId} updated to ${newRating}`);
       
    }
});
