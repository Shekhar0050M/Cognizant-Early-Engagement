import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditEmpTemplateDrivenComponent } from './edit-emp-template-driven/edit-emp-template-driven.component';
import { QuantityIncrementComponent } from './quantity-increment/quantity-increment.component';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { EditEmpReactiveComponent } from './edit-emp-reactive/edit-emp-reactive.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  {path: 'view-emp', component: ViewEmpComponent},
  {path: 'app-employee-list', component: EmployeeListComponent},
  {path: "edit-emp-template-driven", component: EditEmpTemplateDrivenComponent},
  {path: 'quantity-increment', component: QuantityIncrementComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EditEmpTemplateDrivenComponent,
    QuantityIncrementComponent,
    ViewEmpComponent,
    EmployeeListComponent,
    EmployeeInfoComponent,
    EditEmpReactiveComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
