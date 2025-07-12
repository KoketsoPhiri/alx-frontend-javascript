// task_0/js/main.ts

/**
 * @interface Student
 * Defines the structure for a student object.
 */
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two student instances adhering to the Student interface
const student1: Student = {
    firstName: "Koketso",
    lastName: "Phiri",
    age: 27,
    location: "South Africa"
};

const student2: Student = {
    firstName: "Bob",
        lastName: "Johnson",
    age: 22,
    location: "Los Angeles"
};

// Create an array named studentsList containing the two student variables
const studentsList: Student[] = [student1, student2];

/**
 * Renders a table of students to the DOM.
 * Each row contains the first name and location of the student.
 */
function renderStudentsTable(students: Student[]): void {
    const tableContainer = document.getElementById('student-table-container');

    if (!tableContainer) {
        console.error("Error: Element with ID 'student-table-container' not found.");
        return;
    }

    // Create table elements using semantic HTML
    const table: HTMLTableElement = document.createElement('table');
    const thead: HTMLTableSectionElement = document.createElement('thead');
    const tbody: HTMLTableSectionElement = document.createElement('tbody');

    // Create table header row
    const headerRow: HTMLTableRowElement = document.createElement('tr');
    const thFirstName: HTMLTableCellElement = document.createElement('th');
    thFirstName.textContent = 'First Name';
    const thLocation: HTMLTableCellElement = document.createElement('th');
    thLocation.textContent = 'Location';

    headerRow.appendChild(thFirstName);
    headerRow.appendChild(thLocation);
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Populate table body with student data
    students.forEach((student: Student) => {
        const row: HTMLTableRowElement = document.createElement('tr');

        const tdFirstName: HTMLTableCellElement = document.createElement('td');
        tdFirstName.textContent = student.firstName;

        const tdLocation: HTMLTableCellElement = document.createElement('td');
        tdLocation.textContent = student.location;

        row.appendChild(tdFirstName);
        row.appendChild(tdLocation);
        tbody.appendChild(row);
    });

    table.appendChild(tbody);

    // Clear any existing content and append the new table
    tableContainer.innerHTML = '';
    tableContainer.appendChild(table);
}

// Call the function to render the students table when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    renderStudentsTable(studentsList);
});