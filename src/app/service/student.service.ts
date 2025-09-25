import { Injectable } from '@angular/core';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }
  private students: Student[] = [
    { id: 1, firstname: 'Shashank', lastname: 'Morekar', age: 20 },
    { id: 2, firstname: 'Rajat', lastname: 'Pundalik', age: 21 },
    { id: 3, firstname: 'Pratik', lastname: 'Sakte', age: 22 },
    { id: 4, firstname: 'Anjaneya', lastname: 'Sripalli', age: 19 },

  ];

  getStudents() {
    return this.students;
  }
  create(student: any) {
    student.id = this.nextId();
    this.students.push(student);
  }
  deleteStudent(id: number) {
    this.students = this.students.filter(s => s.id !== id);
  }
  getById(id: number) {
    return this.students.find(s => s.id === id);
  }
  updateStudent(s: Student) {

    const student = this.students.find(x => x.id === Number(s.id));
    console.log('Found student:', student);

    if (student){
     console.log("inside if...");

     Object.assign(student, {
      firstname: s.firstname || student.firstname,
      lastname: s.lastname || student.lastname,
      age: s.age != null ? s.age : student.age,
    });// updates the existing object
    }
  }
  private nextId(): number {
    return this.students.length ? Math.max(...this.students.map(s => s.id)) + 1 : 1;
  }

}
