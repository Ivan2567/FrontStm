import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
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
import { Appointment } from 'src/app/Models/Appointment';
import { Doctor } from 'src/app/Models/Doctor';
import { Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-doctor-table',
  templateUrl: './doctor-table.component.html',
  styleUrls: ['./doctor-table.component.css'],
})
export class DoctorTableComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['name', 'dob', 'exp', 'post'];

  dataSource: MatTableDataSource<Doctor>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  spinner:boolean = true


  constructor(public dataService: DataService, public dialog: MatDialog, public doctorService: DoctorService,) {
    this.dataSource = new MatTableDataSource(this.doctorService.doctors);
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

  opencard(row:Doctor): void {
    console.log(row)
    this.doctorService.openDoctor = row;
    console.log(this.doctorService.openDoctor)
    this.dataService.sidenavOpenFlag = !this.dataService.sidenavOpenFlag;
  }
  close(){
    this.dataService.sidenavOpenFlag = !this.dataService.sidenavOpenFlag;
  }


  add(): void {
    this.doctorService.doctors.push(this.doctorService.newDoctor)
    this.dataSource = new MatTableDataSource(this.doctorService.doctors);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    // window.location.reload() 
  }
  openClientDialog(): void {
    const dialogRef = this.dialog.open(AddDoctorDialog, {
      data: this.doctorService.newDoctor,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result != undefined)
      {
        this.doctorService.newDoctor = result;
        console.log(this.doctorService.newDoctor)
        this.add()
        this.doctorService.newDoctor = this.doctorService.emptyDoctor
      }

    });
  }
}
@Component({
  selector: 'add-doctor-dialog',
  templateUrl: 'add-doctor-dialog.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule 
  ],
})
export class AddDoctorDialog {
  constructor(
    public dialogRef: MatDialogRef<AddDoctorDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Doctor,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}