// js/subjects/Teacher.ts
namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
    // Additional properties for specific subjects will be added via declaration merging
  }
}