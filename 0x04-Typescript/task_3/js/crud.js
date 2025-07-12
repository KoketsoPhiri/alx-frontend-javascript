// js/crud.js

export function insertRow(row) {
  console.log('Insert row', row);
  // Simulates generating a random ID for the new row
  return Math.floor(Math.random() * Math.floor(1000));
}

export function deleteRow(rowId) {
  console.log('Delete row id', rowId);
  return;
}

export function updateRow(rowId, row) {
  console.log(`Update row ${rowId}`, row);
  // Simulates returning the updated row ID
  return rowId;
}