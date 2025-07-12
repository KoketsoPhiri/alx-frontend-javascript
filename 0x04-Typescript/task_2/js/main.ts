// js/main.ts

// DirectorInterface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// TeacherInterface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director Class
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// Teacher Class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// createEmployee Function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Type predicate function to check if an employee is a Director
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// Function to execute work based on employee type
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// --- New: String Literal Types and teachClass Function ---

// String literal type for Subjects
type Subjects = 'Math' | 'History';

// Function to teach a class based on the subject
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  }
  // This else block is technically unreachable if 'todayClass' strictly adheres to 'Subjects' type,
  // but good practice for completeness if there were other possibilities.
  // For this exact problem, it could be omitted or throw an error.
  return 'Unknown Subject';
}


// --- Example Usage and Console Logs ---

console.log('Employee with salary 200:');
const employee200 = createEmployee(200);
console.log(employee200);
console.log(employee200.workFromHome());
console.log(employee200.getCoffeeBreak());

console.log('\nEmployee with salary 1000:');
const employee1000 = createEmployee(1000);
console.log(employee1000);
console.log(employee1000.workFromHome());
console.log(employee1000.getCoffeeBreak());

console.log('\nEmployee with salary "$500":');
const employee500String = createEmployee('$500');
console.log(employee500String);
console.log(employee500String.workFromHome());
console.log(employee500String.getCoffeeBreak());

console.log('\nExecute work for employee with salary 200:');
console.log(executeWork(createEmployee(200)));

console.log('\nExecute work for employee with salary 1000:');
console.log(executeWork(createEmployee(1000)));

// New: teachClass examples
console.log('\nTeaching Math Class:');
console.log(teachClass('Math')); // Expected: Teaching Math

console.log('\nTeaching History Class:');
console.log(teachClass('History')); // Expected: Teaching History


// --- Webpack-dev-server Display in Browser ---

document.addEventListener('DOMContentLoaded', () => {
  const appElement = document.getElementById('app');
  if (appElement) {
    let outputHtml = '<h2>Employee Creation Examples:</h2>';

    outputHtml += '<h3>Salary: 200 (Expected: Teacher)</h3>';
    const emp200 = createEmployee(200);
    outputHtml += `<p>Type: ${emp200 instanceof Teacher ? 'Teacher' : 'Director'}</p>`;
    outputHtml += `<p>Work from Home: ${emp200.workFromHome()}</p>`;
    outputHtml += `<p>Get Coffee Break: ${emp200.getCoffeeBreak()}</p>`;
    if (emp200 instanceof Teacher) {
      outputHtml += `<p>Teacher Tasks: ${emp200.workTeacherTasks()}</p>`;
    }

    outputHtml += '<h3>Salary: 1000 (Expected: Director)</h3>';
    const emp1000 = createEmployee(1000);
    outputHtml += `<p>Type: ${emp1000 instanceof Teacher ? 'Teacher' : 'Director'}</p>`;
    outputHtml += `<p>Work from Home: ${emp1000.workFromHome()}</p>`;
    outputHtml += `<p>Get Coffee Break: ${emp1000.getCoffeeBreak()}</p>`;
    if (emp1000 instanceof Director) {
      outputHtml += `<p>Director Tasks: ${emp1000.workDirectorTasks()}</p>`;
    }

    outputHtml += '<h3>Salary: "$500" (Expected: Director)</h3>';
    const emp500Str = createEmployee('$500');
    outputHtml += `<p>Type: ${emp500Str instanceof Teacher ? 'Teacher' : 'Director'}</p>`;
    outputHtml += `<p>Work from Home: ${emp500Str.workFromHome()}</p>`;
    outputHtml += `<p>Get Coffee Break: ${emp500Str.getCoffeeBreak()}</p>`;
    if (emp500Str instanceof Director) {
      outputHtml += `<p>Director Tasks: ${emp500Str.workDirectorTasks()}</p>`;
    }

    outputHtml += '<h2>Execute Work Examples:</h2>';
    outputHtml += `<p>Employee (salary 200) work: <strong>${executeWork(createEmployee(200))}</strong></p>`;
    outputHtml += `<p>Employee (salary 1000) work: <strong>${executeWork(createEmployee(1000))}</strong></p>`;

    // New: teachClass results
    outputHtml += '<h2>Teach Class Examples:</h2>';
    outputHtml += `<p>Teaching Math: <strong>${teachClass('Math')}</strong></p>`;
    outputHtml += `<p>Teaching History: <strong>${teachClass('History')}</strong></p>`;


    appElement.innerHTML = outputHtml;
  } else {
    console.error("Element with ID 'app' not found.");
  }
});