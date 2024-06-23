import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { ClientTableComponent } from './ClientComps/client-table/client-table.component';
import { AppoinmentTableComponent } from './AppointmentComps/appoinment-table/appoinment-table.component';
import { DoctorTableComponent } from './PersonalComps/doctor-table/doctor-table.component';
import { LoginFormComponent } from './LogReg/login-form/login-form.component';
import { RegistrationFormComponent } from './LogReg/registration-form/registration-form.component';
import { ClientProfileComponent } from './ClientComps/client-profile/client-profile.component';
import { DoctorProfileComponent } from './PersonalComps/doctor-profile/doctor-profile.component';

const routes: Routes = [
  {path:"login", component:LoginFormComponent},
  {path:"register", component:RegistrationFormComponent},
  {path:'',component: MainNavigationComponent,
  children: [
    {path: 'clients',component: ClientTableComponent}, 
    {path: 'doctors',component: DoctorTableComponent},
    {path: 'appointments',component: AppoinmentTableComponent},
    {path: 'clientprofile',component: ClientProfileComponent},
    {path: 'doctorprofile',component: DoctorProfileComponent},
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
