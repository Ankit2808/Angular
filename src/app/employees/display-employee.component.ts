import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {

selectedEmployeeId: number;
@Input() employee:Employee;

getNameAndGender():string{
  return this.employee.name+' '+this.employee.gender;
}
  constructor(private _route:ActivatedRoute,private _router:Router,private _employeeService:EmployeeService) { }

  ngOnInit() {
  this.selectedEmployeeId= +this._route.snapshot.paramMap.get('id');
  }
  ViewEmployeeDetail(){
    this._router.navigate(['/employees',this.employee.id]);
      }

      EditEmployeeDetail(){
        this._router.navigate(['/edit',this.employee.id]);
      }
       
      deleteEmployee(){
        this._employeeService.deleteEmployee(this.employee.id);
      }
}
