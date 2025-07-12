// js/subjects/React.ts
/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

namespace Subjects {
  // Declaration merging: Add experienceTeachingReact to the Teacher interface within this namespace
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      if (this._teacher && this._teacher.experienceTeachingReact !== undefined && this._teacher.experienceTeachingReact > 0) {
        return `Available Teacher: ${this._teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}