// js/crud.d.ts

// Import types from interface.ts for use in this declaration file
import { RowID, RowElement } from './interface';

// Declare a module for './crud.js' to provide types for its exports
// This allows TypeScript to understand 'import * as CRUD from "./crud.js";'
declare module './crud.js' {
  export function insertRow(row: RowElement): RowID;
  export function deleteRow(rowId: RowID): void;
  export function updateRow(rowId: RowID, row: RowElement): RowID;
}