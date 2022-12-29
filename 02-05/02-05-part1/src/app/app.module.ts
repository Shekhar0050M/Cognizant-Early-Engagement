import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { RouterModule, Routes } from '@angular/router';
import { QuantityIncrementComponent } from './quantity-increment/quantity-increment.component';
import { FormsModule } from '@angular/forms';
import { QuantitySelectorComponent } from './quantity-selector/quantity-selector.component';

const appRoutes: Routes = [
  {path: 'view-emp', component: ViewEmpComponent},
  {path: 'edit-emp', component: EditEmpComponent},
  {path: 'quantity-increment', component: QuantityIncrementComponent},
  {path: 'quantity-selector', component: QuantitySelectorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ViewEmpComponent,
    EditEmpComponent,
    QuantityIncrementComponent,
    QuantitySelectorComponent
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
