import { CanDeactivate } from "../../../node_modules/@angular/router";
import { CreateEmployeeComponent } from "./create-employee.component";
import { Injectable } from "../../../node_modules/@angular/core";

@Injectable()
export class CreateEmployeeCanDeactivateGuardService implements CanDeactivate<CreateEmployeeComponent>{
    canDeactivate(component: CreateEmployeeComponent): boolean{
        if (component.createEmployeeForm.dirty){
            return confirm("Are you sure to discart the changes?");
        }
        return true;
    }
}