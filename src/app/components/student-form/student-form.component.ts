import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../../model/student';
import { StudentService } from '../../service/student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-form',
  imports: [FormsModule],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent implements OnInit{

newStudent:Student={
  id:0,
  firstname:'',
  lastname:'',
  age:10
};
formValue:any;
private studentSrv=inject(StudentService);
private router=inject(Router);
private route=inject(ActivatedRoute);
id:any;
ngOnInit(): void {
   this.id=this.route.snapshot.paramMap.get('id');
}
store(){
  if(this.id){
    // this.formValue=this.newStudent;
    this.formValue = { ...this.newStudent, id: this.id };
    this.studentSrv.updateStudent(this.formValue);
    //  debugger;
     this.router.navigate(['/student-list']);
  }else{
    this.formValue=this.newStudent;
    this.studentSrv.create(this.formValue);
    this.router.navigate(['/student-list']);
  }
}

}
