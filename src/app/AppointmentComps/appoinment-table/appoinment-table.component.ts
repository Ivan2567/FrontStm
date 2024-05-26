import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { map, Observable, shareReplay } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { DataService } from 'src/app/Services/data.service';
import { DoctorService } from 'src/app/Services/doctor.service';
import { AppointmentService } from 'src/app/Services/appointment.service';
import { Doctor } from 'src/app/Models/Doctor';
import { Appointment } from 'src/app/Models/Appointment';
import { ServiceModel } from 'src/app/Models/ServiceModel';
import { Inject} from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-appoinment-table',
  templateUrl: './appoinment-table.component.html',
  styleUrls: ['./appoinment-table.component.css'],
})
export class AppoinmentTableComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['clientname', 'doctorname', 'date', 'time', 'cost'];

  dataSource: MatTableDataSource<Appointment>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  spinner:boolean = true

  displayedColumns2: string[] = ['code', 'name', 'price'];
  dataSource2: MatTableDataSource<ServiceModel>;


  constructor(public dataService: DataService, public dialog: MatDialog, public appointmentService: AppointmentService,) {
    this.dataSource = new MatTableDataSource(this.appointmentService.appointmentlist);
    this.dataSource2 = new MatTableDataSource(this.appointmentService.openAppointment.servicelist);
  }

  async ngOnInit() {
  }
  async ngAfterViewInit() {
    await new Promise(f => setTimeout(f, 200));
    this.spinner = false
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  opencard(row:Appointment): void {
    console.log(row)
    this.appointmentService.openAppointment = row;
    console.log(this.appointmentService.openAppointment)
    this.dataSource2 = new MatTableDataSource(this.appointmentService.openAppointment.servicelist);
    this.dataService.sidenavOpenFlag = !this.dataService.sidenavOpenFlag;
  }
  close(){
    this.dataService.sidenavOpenFlag = !this.dataService.sidenavOpenFlag;
  }


  add(): void {
    // window.location.reload() 
  }
}
