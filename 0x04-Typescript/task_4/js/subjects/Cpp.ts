/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

namespace Subjects {
  // Extend Teacher interface within the same namespace
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      if (this._teacher && this._teacher.experienceTeachingC && this._teacher.experienceTeachingC > 0) {
        return `Available Teacher: ${this._teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}
