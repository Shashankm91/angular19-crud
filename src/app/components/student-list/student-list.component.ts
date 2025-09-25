import { Component, inject, OnInit } from '@angular/core';
import { Student } from '../../model/student';
import { StudentService } from '../../service/student.service';
import { Router,NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';


@Component({
  selector: 'app-student-list',
  imports: [],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit{

  studentList:Student[]=[];
  private studentSrv=inject(StudentService);
  private router=inject(Router);
  ngOnInit(): void {
    this.getStudent();
    // this.router.events.pipe(
    //   filter(event => event instanceof NavigationEnd)
    // ).subscribe(() => {
    //   this.getStudent();
    // });
  }
  getStudent(){
    this.studentList=this.studentSrv.getStudents();
  }
  add(){
    this.router.navigate(['/student/new']);
  }
  delete(id:number){
    this.studentSrv.deleteStudent(id);
    alert('Student Deleted');
    this.getStudent();
  }
  edit(id:number){
    this.router.navigate(['/student/edit',id]);
  }
}
