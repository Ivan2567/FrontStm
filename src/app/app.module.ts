import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ClientTableComponent } from './ClientComps/client-table/client-table.component';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {AsyncPipe,NgFor} from '@angular/common';
import {ProgressSpinnerMode, MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {CurrencyPipe} from '@angular/common';

import { DataService } from './Services/data.service';
import { ClientService } from './Services/client.service';
import { AppointmentService } from 'src/app/Services/appointment.service';
import { AppoinmentTableComponent } from './AppointmentComps/appoinment-table/appoinment-table.component';
import { DoctorTableComponent } from './PersonalComps/doctor-table/doctor-table.component';
import { DoctorService } from './Services/doctor.service';

@NgModule({
  declarations: [
    AppComponent,
    MainNavigationComponent,
    ClientTableComponent,
    AppoinmentTableComponent,
    DoctorTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatButtonToggleModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatFormFieldModule,
    CurrencyPipe,
    // MatPaginator,
    // MatSort,
    // MatTableDataSource,
    MatInputModule,
    MatDialogModule,
    AsyncPipe,NgFor,
    // MatDialog,
    // // MAT_DIALOG_DATA,
    // MatDialogRef,
    // MatDialogTitle,
    // MatDialogContent,
    // MatDialogActions,
    // MatDialogClose,
  ],
  providers: [DataService,ClientService,DoctorService,AppointmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
