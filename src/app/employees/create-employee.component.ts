import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  @ViewChild('employeeForm') public createEmployeeForm:NgForm;
   previewPhoto=false;
   panelTitle:string;

   employee:Employee={
    id  :null,
    name:null,
    gender:null,
    email:'',
    phone:null,
    contactPreference:null,
    dateOfBirth:null,
    department:null,
    isActive:null,
    photoPath:null,
  };

  departments:Department[]=[
    {id:1,name:'Help Desk'},
    {id:2,name:'HR'},
    {id:3,name:'IT'},
    {id:4,name:'PayRoll'},
  ];

  constructor(private _employeeService:EmployeeService,
              private _router:Router,
              private _route:ActivatedRoute) { }

  togglePhotoPreview(){
    this.previewPhoto=!this.previewPhoto;
  }

  ngOnInit() {
    this._route.paramMap.subscribe(parameterMap =>{const id =+parameterMap.get('id');
    this.getEmployee(id);    
  })
  }

  private getEmployee(id:number){
    if (id===0){
      this.employee={
        id  :null,
        name:null,
        gender:null,
        email:'',
        phone:null,
        contactPreference:null,
        dateOfBirth:null,
        department:null,
        isActive:null,
        photoPath:null,
      };
      
      this.panelTitle = 'Create Employee';
      this.createEmployeeForm.reset();
    }
    else{
      this.panelTitle='Edit Employee';
      this.employee=  Object.assign({},this._employeeService.getEmployees(id));
    }
  }
  saveEmployee():void{
    const newEmployee:Employee=Object.assign({},this.employee);
    this._employeeService.save(newEmployee);
    this._router.navigate(['list']);
  }
  
}
