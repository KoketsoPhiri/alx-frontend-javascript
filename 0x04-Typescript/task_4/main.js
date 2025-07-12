"use strict";
// js/main.ts
/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
exports.cTeacher = exports.react = exports.java = exports.cpp = void 0;
// Create and export a constant 'cpp' for Cpp Subjects
exports.cpp = new Subjects.Cpp();
// Create and export a constant 'java' for Java Subjects
exports.java = new Subjects.Java();
// Create and export a constant 'react' for React Subjects
exports.react = new Subjects.React();
// Create and export one Teacher object 'cTeacher' with experienceTeachingC = 10
// Note: Due to declaration merging, 'cTeacher' can now include
// experienceTeachingC, experienceTeachingReact, and experienceTeachingJava.
// For this specific teacher, we only explicitly set experienceTeachingC.
exports.cTeacher = {
    firstName: 'Guillaume',
    lastName: 'Salva',
    experienceTeachingC: 10,
};
// --- C++ Subject ---
console.log('C++');
// Set cTeacher as the teacher for Cpp subject
exports.cpp.setTeacher(exports.cTeacher);
// Call the two methods getRequirements and getAvailableTeacher and print the strings they return
console.log(exports.cpp.getRequirements());
console.log(exports.cpp.getAvailableTeacher()); // Expected: Available Teacher: Guillaume (due to experienceTeachingC: 10)
// --- Java Subject ---
console.log('\nJava');
// Set cTeacher as the teacher for Java subject
exports.java.setTeacher(exports.cTeacher);
// Call the two methods getRequirements and getAvailableTeacher and print the strings they return
console.log(exports.java.getRequirements());
console.log(exports.java.getAvailableTeacher()); // Expected: No available teacher (experienceTeachingJava is undefined/0)
// --- React Subject ---
console.log('\nReact');
// Set cTeacher as the teacher for React subject
exports.react.setTeacher(exports.cTeacher);
// Call the two methods getRequirements and getAvailableTeacher and print the strings they return
console.log(exports.react.getRequirements());
console.log(exports.react.getAvailableTeacher()); // Expected: No available teacher (experienceTeachingReact is undefined/0)
