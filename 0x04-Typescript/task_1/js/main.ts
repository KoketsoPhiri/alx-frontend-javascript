// js/main.ts

// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the printTeacher function
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};


// --- New: StudentClass Interfaces and Class ---

// Interface for the StudentClass instance
interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// Interface for the StudentClass constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Implement the StudentClass
const StudentClass: StudentConstructor = class StudentClass_ implements StudentClassInterface {
  // Using 'public' keyword in constructor parameters is a TypeScript shortcut
  // for declaring and initializing properties with the same name and type.
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
};


// --- Example Usage and Console Logs ---

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};
console.log('Teacher 3:', teacher3);

const teacher4: Teacher = {
  firstName: 'Emily',
  lastName: 'Clark',
  fullTimeEmployee: true,
  yearsOfExperience: 5,
  location: 'New York',
};
console.log('Teacher 4:', teacher4);

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log('Director 1:', director1);

const printedTeacherName = printTeacher("John", "Doe");
console.log('Printed Teacher Name (John Doe):', printedTeacherName);

const printedTeacherName2 = printTeacher("Alice", "Smith");
console.log('Printed Teacher Name (Alice Smith):', printedTeacherName2);

// New: StudentClass Example
const student1: StudentClassInterface = new StudentClass("Alice", "Johnson");
console.log('Student 1 First Name:', student1.firstName);
console.log('Student 1 Last Name:', student1.lastName);
console.log('Student 1 Work:', student1.workOnHomework());
console.log('Student 1 Display Name:', student1.displayName());

const student2: StudentClassInterface = new StudentClass("Bob", "Williams");
console.log('Student 2 Display Name:', student2.displayName());


// --- Webpack-dev-server Display in Browser ---

document.addEventListener('DOMContentLoaded', () => {
  const appElement = document.getElementById('app');
  if (appElement) {
    appElement.innerHTML = `
      <h2>Teacher Details:</h2>
      <h3>Teacher 3:</h3>
      <pre>${JSON.stringify(teacher3, null, 2)}</pre>
      <h3>Teacher 4:</h3>
      <pre>${JSON.stringify(teacher4, null, 2)}</pre>
      <h2>Director Details:</h2>
      <h3>Director 1:</h3>
      <pre>${JSON.stringify(director1, null, 2)}</pre>
      <h2>Printed Teacher Names:</h2>
      <p>John Doe: <strong>${printedTeacherName}</strong></p>
      <p>Alice Smith: <strong>${printedTeacherName2}</strong></p>
      <h2>Student Details:</h2>
      <p>Student 1: <strong>${student1.displayName()}</strong> - ${student1.workOnHomework()}</p>
      <p>Student 2: <strong>${student2.displayName()}</strong> - ${student2.workOnHomework()}</p>
    `;
  } else {
    console.error("Element with ID 'app' not found.");
  }
});