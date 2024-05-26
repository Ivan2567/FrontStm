import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { ClientTableComponent } from './ClientComps/client-table/client-table.component';
import { AppoinmentTableComponent } from './AppointmentComps/appoinment-table/appoinment-table.component';
import { DoctorTableComponent } from './PersonalComps/doctor-table/doctor-table.component';

const routes: Routes = [
  {path:'',component: MainNavigationComponent,
  children: [
    {path: 'clients',component: ClientTableComponent}, 
    {path: 'doctors',component: DoctorTableComponent},
    {path: 'appointments',component: AppoinmentTableComponent},
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
