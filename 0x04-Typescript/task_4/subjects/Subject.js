"use strict";
var Subjects;
(function (Subjects) {
    class Subject {
        setTeacher(teacher) {
            this._teacher = teacher;
        }
    }
    Subjects.Subject = Subject;
})(Subjects || (Subjects = {}));
