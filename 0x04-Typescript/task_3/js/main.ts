/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js';

console.log('--- CRUD Operations ---');

// Create an object called row with the type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insert the row and get the new RowID
const newRowID = CRUD.insertRow(row); // Type RowID is inferred correctly

// Update the row with an age property
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);

// Delete the row
CRUD.deleteRow(newRowID);

// --- Webpack-dev-server Display in Browser ---
document.addEventListener('DOMContentLoaded', () => {
  const appElement = document.getElementById('app');
  if (appElement) {
    appElement.innerHTML = `
      <h2>Task 3: Ambient Namespaces</h2>
      <p>CRUD operations were executed. Please check your <strong>browser's console</strong> for the expected output from <code>crud.js</code> functions.</p>
      <h3>Operation Details:</h3>
      <ul>
        <li>Initial Row: <code>${JSON.stringify(row)}</code></li>
        <li>New Row ID (generated): <code>${newRowID}</code></li>
        <li>Updated Row: <code>${JSON.stringify(updatedRow)}</code></li>
      </ul>
    `;
  } else {
    console.error("Element with ID 'app' not found.");
  }
});
