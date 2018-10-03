import { Employee } from "./models/employee.model";
import { Injectable } from "../../node_modules/@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable} from "rxjs";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';


@Injectable()
export class EmployeeService{

  constructor(private _hhtpClient:HttpClient){}

    private listEmployee:Employee[]=[
       
        {
            id:1,
            name:'Mark',
            gender:'male',
            contactPreference:'email',
            email:'mark@gmail.com',
            dateOfBirth:new Date('04/06/1973'),
            department:'1',
            isActive:true,
            photoPath:'assets/image/Mark.png',
          },
          {
            id:2,
            name:'Serena',
            gender:'female',
            contactPreference:'phone',
            phone:9662825787,
            dateOfBirth:new Date('11/30/1982'),
            department:'2',
            isActive:true,
            photoPath:'assets/image/Serena.png',

          },
          {
            id:3,
            name:'Celina',
            gender:'female',
            contactPreference:'email',
            email:'celina@gmail.com',
            dateOfBirth:new Date('09/28/1994'),
            department:'3',
            isActive:true,
            photoPath:'assets/image/Celina.png',

          },
          {
            id:4,
            name:'Jerry',
            gender:'male',
            contactPreference:'phone',
            phone:9662825787,
            dateOfBirth:new Date('09/12/1981'),
            department:'4',
            isActive:true,
            photoPath:'assets/image/Jerry.png',

          }
    ];

    getEmployee():Observable<Employee[]>{
        return Observable.of(this.listEmployee).delay(2000);
    }

    getEmployees(id:number):Employee{
      return this.listEmployee.find(x=>x.id===id);
  }

    save(employee:Employee){
      if  (employee.id===null){
        const maxid=this.listEmployee.reduce(function(e1,e2){
          return(e1.id > e2.id) ? e1:e2;
        }).id;
        employee.id=maxid+1;
        this.listEmployee.push(employee);
      } else{
       const foundIndex= this.listEmployee.findIndex(x=>x.id===employee.id);
        this.listEmployee[foundIndex]=employee;
      }

    }

    deleteEmployee(id:number){
     const i = this.listEmployee.findIndex(x=>x.id===id);
      if(i !==-1)
      {
        this.listEmployee.splice(i,1);
      }
    }

}

