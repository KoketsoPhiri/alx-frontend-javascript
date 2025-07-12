// js/main.ts
/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />

// Create and export a constant 'cpp' for Cpp Subjects
export const cpp = new Subjects.Cpp();

// Create and export a constant 'java' for Java Subjects
export const java = new Subjects.Java();

// Create and export a constant 'react' for React Subjects
export const react = new Subjects.React();

// Create and export one Teacher object 'cTeacher' with experienceTeachingC = 10
// Note: Due to declaration merging, 'cTeacher' can now include
// experienceTeachingC, experienceTeachingReact, and experienceTeachingJava.
// For this specific teacher, we only explicitly set experienceTeachingC.
export const cTeacher: Subjects.Teacher = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  experienceTeachingC: 10,
  // experienceTeachingReact and experienceTeachingJava are optional and thus undefined/0 by default here
};

// --- C++ Subject ---
console.log('C++');
// Set cTeacher as the teacher for Cpp subject
cpp.setTeacher(cTeacher);
// Call the two methods getRequirements and getAvailableTeacher and print the strings they return
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher()); // Expected: Available Teacher: Guillaume (due to experienceTeachingC: 10)

// --- Java Subject ---
console.log('\nJava');
// Set cTeacher as the teacher for Java subject
java.setTeacher(cTeacher);
// Call the two methods getRequirements and getAvailableTeacher and print the strings they return
console.log(java.getRequirements());
console.log(java.getAvailableTeacher()); // Expected: No available teacher (experienceTeachingJava is undefined/0)

// --- React Subject ---
console.log('\nReact');
// Set cTeacher as the teacher for React subject
react.setTeacher(cTeacher);
// Call the two methods getRequirements and getAvailableTeacher and print the strings they return
console.log(react.getRequirements());
console.log(react.getAvailableTeacher()); // Expected: No available teacher (experienceTeachingReact is undefined/0)