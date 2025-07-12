// js/interface.ts

export type RowID = number;

export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number; // Optional age property
}