import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  private _searchTerm:string;
  employees:Employee[]=[];
  filteredEmployees: Employee[];

  get searchTerm():string{
    return this._searchTerm;
  }

  set searchTerm(value:string){
    this._searchTerm=value;
    this.filteredEmployees = this.filtereEmployees(value);
  }

  filtereEmployees(searchString:string){
    return this.employees.filter(employee=>employee.name.toLowerCase().indexOf(searchString.toLocaleLowerCase())!==-1);
  }


  constructor(
              private _router:Router,
              private _route:ActivatedRoute) {

                this.employees=this._route.snapshot.data['EmployeeList'];

            if(this._route.snapshot.queryParamMap.has('searchedTerm')){    
            this.searchTerm=this._route.snapshot.queryParamMap.get('searchedTerm');
             }
           else{
            this.filteredEmployees=this.employees;
                  }

               }


  //SnapShot Approach            
  // ngOnInit() {
  //   this.employees=this._employeeService.getEmployee();
  //   if(this._route.snapshot.queryParamMap.has('searchedTerm')){    
  //     this.searchTerm=this._route.snapshot.queryParamMap.get('searchedTerm');
  //   }
  //   else{
  //     this.filteredEmployees=this.employees;
  //   }
  // }

  
  //Obserable Approach 
// ngOnInit(){
// this._employeeService.getEmployee().subscribe(empList=>this.employees=empList);
//   this._route.queryParamMap.subscribe((queryParams)=>{
//     if(queryParams.has('searchedTerm')){
//       this.searchTerm=queryParams.get('searchedTerm');
//     }
//     else{
//       this.filteredEmployees=this.employees;
//     }
//   }); 
// }

// ngOnInit(){
//   this._employeeService.getEmployee().subscribe((empList)=>{
//     this.employees=empList;
//     if(this._route.snapshot.queryParamMap.has('searchedTerm')){    
//           this.searchTerm=this._route.snapshot.queryParamMap.get('searchedTerm');
//         }
//         else{
//           this.filteredEmployees=this.employees;
//         }
//   });
// }
  
ngOnInit(){
    // this._employeeService.getEmployee().subscribe((empList)=>{
    //   this.employees=empList;

    //   this._route.queryParamMap.subscribe((queryParams)=>{
    //         if(queryParams.has('searchedTerm')){
    //           this.searchTerm=queryParams.get('searchedTerm');
    //         } else{
    //           this.filteredEmployees=this.employees;
    //         }
    //       });
    //     }); 
  }



  onClick(employeeId:number){
    this._router.navigate(['/employees',employeeId],{
    queryParams:{'searchedTerm':this._searchTerm,'testValue':'TestValue'}
});
  }

  // ChangeEmployeeName(){
  //   this.filteredEmployees=this.filtereEmployees(this.searchTerm);
  // }

}
