# 0x04-TypeScript Projects
This repository contains solutions to various TypeScript exercises, demonstrating different features and concepts of the language. Each task is a self-contained project within its respective directory.

# Table of Contents
Task 1: Writing a Class

Task 2: Advanced Types Part 1

Task 3: Ambient Namespaces

Task 4: Namespace & Declaration Merging

Task 5: Brand Convention & Nominal Typing

Getting Started
To set up and run any of these projects, navigate into the desired task_N directory in your terminal and follow the instructions specific to that task.

Generally, for tasks involving Webpack (Task 1, 2, 3, 5):

Navigate into the desired task_N directory:

Bash

# cd 0x04-TypeScript/task_N
Install the necessary dependencies:

Bash

npm install
Build the project:

Bash

npm run build
Start the development server:

Bash

npm start
Open your browser to http://localhost:8080 to view the output. Remember to check the browser console (F12) for additional console.log outputs.

For tasks involving pure TypeScript compilation (Task 4):

Navigate into the desired task_N directory:

Bash

# cd 0x04-TypeScript/task_N
Install the necessary dependencies:

Bash

npm install
Compile the TypeScript:

Bash

npm run build
# or simply: tsc
Run the compiled JavaScript:

Bash

node main.js
The output will appear directly in your terminal.

Project Details
Task 1: Writing a Class
Description:
This task introduces fundamental class creation in TypeScript. It demonstrates how to define interfaces for both the class's constructor and its instances, and how to implement methods within a class.

Key Concepts:

interface for specifying object shapes and class structures.

Class implementation using the implements keyword.

Constructor definition and public keyword for concise property declaration.

Basic class methods returning specific string values.

How to Run:
Follow the general "Getting Started" instructions for Webpack projects.

Expected Output:

The web page at http://localhost:8080 will display formatted JSON for Teacher and Director objects, printTeacher function results, and Student details.

The browser's console will show detailed console.log outputs for each object and function call.

Task 2: Advanced Types Part 1
Description:
This task explores more sophisticated TypeScript type features, including union types, class interfaces with specific method signatures, and type predicate functions. It focuses on creating flexible and type-safe functions that can handle different but related object types.

Key Concepts:

Interfaces defining method signatures (e.g., workFromHome()).

Union types (Director | Teacher) for functions that can return multiple object types.

Type predicates (employee is Director) for narrowing down types within conditional blocks, enabling type-specific method calls.

Factory functions (createEmployee) for dynamic object creation based on input.

String Literal Types (Subjects = 'Math' | 'History') for restricting variable values.

How to Run:
Follow the general "Getting Started" instructions for Webpack projects.

Expected Output:

The web page will display the results of createEmployee (indicating whether a Teacher or Director was created), and the outcome of executeWork and teachClass functions for various inputs.

The browser's console will provide detailed logs of object creation and function execution.

Task 3: Ambient Namespaces
Description:
This task demonstrates how to integrate external JavaScript libraries into a TypeScript project using ambient type declaration files (.d.ts). It simulates working with a crud.js library by providing its type definitions, allowing TypeScript to understand its functions and ensure type safety without modifying the original JavaScript code.

Key Concepts:

Ambient modules (declare module './crud.js') for providing types for JavaScript files that use ES module syntax.

Type declaration files (.d.ts) to describe existing JavaScript APIs.

Importing types (RowID, RowElement) from separate interface files.

Using import * as Name from './path.js' to import JavaScript modules with their ambient types.

Triple-slash directives (/// <reference path="..." />) for including global or module declarations (though often handled implicitly by module resolution).

How to Run:
Follow the general "Getting Started" instructions for Webpack projects. After starting the server, open your browser's console (F12) to see the primary output from crud.js functions.

Expected Output:

The web page will indicate that CRUD operations were performed and prompt you to check the console.

The browser's console will display:

Insert row {firstName: "Guillaume", lastName: "Salva"}
Result of insertRow: <a random number>
Update row <the random number> {firstName: "Guillaume", lastName: "Salva", age: 23}
Delete row id <the random number>
Task 4: Namespace & Declaration Merging
Description:
This task dives into more advanced TypeScript organizational patterns: Namespaces and Declaration Merging. It demonstrates how to logically group related code using namespaces and how TypeScript automatically merges declarations (like interfaces) that share the same name within the same namespace across different files. This allows for extending existing types without direct modification.

Key Concepts:

namespace keyword for logical code grouping and preventing global scope pollution.

export within namespaces to make entities accessible outside their defining file but within the namespace.

Declaration Merging: Automatically combining multiple declarations with the same name into a single definition (e.g., extending an interface with new properties in separate files).

Class inheritance within a namespace.

protected class members for access by derived classes.

Direct TypeScript compilation using tsc (no Webpack in this task).

How to Run:
Follow the specific "Getting Started" instructions for pure TypeScript compilation projects.

Expected Output (Console):

C++
Here is the list of requirements for Cpp
Available Teacher: Guillaume

Java
Here is the list of requirements for Java
No available teacher

React
Here is the list of requirements for React
No available teacher
Task 5: Brand Convention & Nominal Typing
Description:
This task introduces a technique to simulate "nominal typing" in TypeScript using a brand convention. While TypeScript is primarily structurally typed (types are compatible if their members are compatible), nominal typing allows you to create types that are distinct, even if they have the same underlying structure, by adding a unique, non-existent "brand" property. This enhances type safety by preventing accidental misuse of values from different conceptual domains.

Key Concepts:

Nominal Typing Simulation: Achieving type distinctions beyond structural compatibility.

Brand Properties: Adding a unique, private property (e.g., __brand: 'TypeName') to an interface. This property exists only at the type level and is stripped away during compilation, having no runtime impact.

Enhanced Type Safety: Preventing assignments or function arguments that are structurally compatible but conceptually different.

How to Run:
Follow the general "Getting Started" instructions for Webpack projects.

Expected Output:

The web page will display the calculated total major and minor credits.

The browser's console will show the raw objects, including their __brand properties.

To demonstrate nominal typing in action:

Find the commented-out line const invalidSum = sumMajorCredits(majorSubject1, minorSubject1); in task_5/js/main.ts.

Uncomment it and save the file.

Run npm run build again. You will observe a TypeScript compilation error, indicating that MinorCredits cannot be assigned to MajorCredits, even though both have a credits: number property. This confirms the brand property successfully enforced nominal distinction.