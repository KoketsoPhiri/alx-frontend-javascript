// js/subjects/Java.ts
/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

namespace Subjects {
  // Declaration merging: Add experienceTeachingJava to the Teacher interface within this namespace
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      if (this._teacher && this._teacher.experienceTeachingJava !== undefined && this._teacher.experienceTeachingJava > 0) {
        return `Available Teacher: ${this._teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}