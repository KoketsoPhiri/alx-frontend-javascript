interface Student {
  firstName : string;
  lastName : string;
  age : number;
  location : string;
}

let student1 : Student = {
  firstName : "Koketso",
  lastName : "Phiri",
  age : 27,
  location : "South Africa"
};

let student2 : Student = {
  firstName : "John",
  lastName : "Doe",
  age : 30,
  location : "USA"
};

let studentsList : Array<Student>;
studentsList = [student1, student2];

//Using Vanilla Javascrip, render a table

document.addEventListener('DOMContentLoaded', () => {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');

  // Create table header
  const headerRow = document.createElement('tr');
  const thFirstName = document.createElement('th');
  thFirstName.textContent = 'First Name';
  const thLocation = document.createElement('th');
  thLocation.textContent = 'Location';
  const thLastName = document.createElement('th');
  thLastName.textContent = 'Last Name';
  const thAge = document.createElement('th');
  thAge.textContent = 'Age';

  headerRow.appendChild(thFirstName);
  headerRow.appendChild(thLastName);
  headerRow.appendChild(thLocation);
  headerRow.appendChild(thAge);
  tbody.appendChild(headerRow);

  // Append a new row for each student
  studentsList.forEach((student) => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = student.lastName;
    const ageCell = document.createElement('td');
    ageCell.textContent = student.age.toString();
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(lastNameCell);
    row.appendChild(locationCell);
    row.appendChild(ageCell);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
});