import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { FormsModule} from '@angular/forms';
import { BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { HttpClientModule} from "@angular/common/http"
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent} from './employees/create-employee.component';
import { EmployeeService} from './employee.service';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import { CreateEmployeeCanDeactivateGuardService} from './employees/create-employee-can-deactivate-guard.service';
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import { EmployeeListResoverService } from './employees/employee-list-resolver.service';
import { PageNotFoundComponent } from './page-not-found.component';
import { EmployeeDetailsGuardService } from './employees/employee-details-guards.service';

const appRoutes:Routes=[
  {path:'list',component:ListEmployeesComponent,resolve:{EmployeeList:EmployeeListResoverService}},
  {path:'edit/:id',component:CreateEmployeeComponent,canDeactivate:[CreateEmployeeCanDeactivateGuardService]},
  {path:'employees/:id',component:EmployeeDetailsComponent,canActivate:[EmployeeDetailsGuardService]},
  {path:'',redirectTo:'/list',pathMatch:'full'},
  {path :'notfound',component:PageNotFoundComponent}
];

@NgModule({
  declarations: [
      AppComponent,
      ListEmployeesComponent,CreateEmployeeComponent,
      DisplayEmployeeComponent, EmployeeDetailsComponent, PageNotFoundComponent,
  ],
  imports: [
      BrowserModule,FormsModule,HttpClientModule,
      BsDatepickerModule.forRoot(),RouterModule.forRoot(appRoutes)
  ],
      providers: [EmployeeService,CreateEmployeeCanDeactivateGuardService,EmployeeListResoverService,EmployeeDetailsGuardService],
      bootstrap: [AppComponent]
})
export class AppModule { }
