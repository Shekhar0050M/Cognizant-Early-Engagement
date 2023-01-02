import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEmpReactiveComponent } from './edit-emp-reactive/edit-emp-reactive.component';

const routes: Routes = [
  { path: 'edit-emp-reactive/:id', component:EditEmpReactiveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
