import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  postData:any;
  // constructor(private httpClient:HttpClient) { }
  constructor(private fb:FormBuilder) { }

  // ngOnInit() {
  //   this.employeeForm = new FormGroup({
  //     name:new FormControl(),
  //     email:new FormControl(),
  //     skills: new FormGroup({
  //     skillName: new FormControl(),
  //     experienceInYears: new FormControl(),
  //     proficiency: new FormControl()
  //     })
     
  //   });
  // }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      name:['',Validators.required,Validators.minLength(2),Validators.maxLength(10)],
      email:[''],
      skills: this.fb.group({
      skillName: [''],
      experienceInYears: [''],
      proficiency: ['']
      })
     
    });
  }

  onSubmit(): void{
    console.log(this.employeeForm.value);
    console.log(this.employeeForm)
    

  }


// onLoadDataClick(): void {
//   this.employeeForm.setValue({
//     name: 'Pragim Technologies',
//     email: 'pragim@pragimtech.com',
//     skills: {
//       skillName: 'C#',
//       experienceInYears: 5,
//       proficiency: 'beginner'
//     }
//   });

  onLoadDataClick(): void {
    this.employeeForm.patchValue({
      name: 'Pragim Technologies',
      email: 'pragim@pragimtech.com',
      // skills: {
      //   skillName: 'C#',
      //   experienceInYears: 5,
      //   proficiency: 'beginner'
      // }
    });
}


}


// this.httpClient.post(`http://127.0.0.1:8000/api_new/portal_category/`,
//     this.employeeForm.value).subscribe(
//       (data:any) => {
//       });