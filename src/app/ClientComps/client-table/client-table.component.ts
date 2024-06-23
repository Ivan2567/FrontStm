import {AfterViewInit, Component, inject, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {delay, map, Observable, shareReplay, startWith} from 'rxjs';
import {Breakpoints, BreakpointObserver} from '@angular/cdk/layout';
import {DataService} from 'src/app/Services/data.service';
import {ClientService} from 'src/app/Services/client.service';
import {ServicemodelService} from 'src/app/Services/servicemodel.service';
import {Client} from 'src/app/Models/Client';
import {ServiceModel} from 'src/app/Models/ServiceModel';
import {MatSnackBar, MatSnackBarRef, MatSnackBarModule} from '@angular/material/snack-bar';

import {Inject} from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {SelectionModel} from '@angular/cdk/collections';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {CurrencyPipe, NgIf} from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {AsyncPipe, NgFor} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {DoctorService} from 'src/app/Services/doctor.service';
import {Doctor} from 'src/app/Models/Doctor';
import {AppointmentService} from 'src/app/Services/appointment.service';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {Appointment} from 'src/app/Models/Appointment';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.css'],
})
export class ClientTableComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = [/*'nummedbook',*/  'name', 'dob', 'passport', 'adress'];

  dataSource: MatTableDataSource<Client>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  spinner: boolean = true;


  constructor(public dataService: DataService,
              public dialog: MatDialog,
              public clientService: ClientService,
              public servicemodelService: ServicemodelService,
              public doctorService: DoctorService,
              public appointmentService: AppointmentService,) {
    this.dataSource = new MatTableDataSource(this.clientService.clients);
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

  opencard(row: Client): void {
    console.log(row)
    this.clientService.openClient = row;
    console.log(this.clientService.openClient)
    this.dataService.sidenavOpenFlag = !this.dataService.sidenavOpenFlag;
  }

  close() {
    this.dataService.sidenavOpenFlag = !this.dataService.sidenavOpenFlag;
  }

  addClient(): void {
    this.clientService.clients.push(this.clientService.newClient)
    this.dataSource = new MatTableDataSource(this.clientService.clients);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    // window.location.reload()
  }

  addAppointment(): void {
    this.appointmentService.appointmentlist.push(this.appointmentService.newAppointment)
    console.log(this.appointmentService.appointmentlist)
    // window.location.reload()
  }

  openClientDialog(): void {
    const dialogRef = this.dialog.open(AddClientDialog, {
      data: this.clientService.newClient,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result != undefined) {
        this.clientService.newClient = result;
        console.log(this.clientService.newClient)
        this.addClient()
        this.clientService.openClient = result
        this.clientService.newClient = this.clientService.emptyClient
        this.dataService.sidenavOpenFlag = !this.dataService.sidenavOpenFlag;
      }

    });
  }
  openHistoryDialog(): void {
    const dialogRef = this.dialog.open(TothHistoryDialog, {
      data: this.clientService.newClient,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result != undefined) {
      }

    });
  }

  openAppointmentDialog(): void {
    const dialogRef = this.dialog.open(AddAppointmentDialog, {
      data: this.appointmentService.newAppointment,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result != undefined) {
        console.log(result)
        this.appointmentService.newAppointment = result;

        this.appointmentService.newAppointment.clientsurname = this.clientService.openClient.surname;
        this.appointmentService.newAppointment.clientname = this.clientService.openClient.name;
        this.appointmentService.newAppointment.clientmiddlename = this.clientService.openClient.middlename;
        console.log(this.appointmentService.newAppointment)
        this.addAppointment()
        this.appointmentService.newAppointment = this.appointmentService.emptyAppointment
      }

    });
  }
}

@Component({
  selector: 'add-client-dialog',
  templateUrl: 'add-client-dialog.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatCheckboxModule,
    MatTableModule
  ],
})
export class AddClientDialog {
  constructor(
    public dialogRef1: MatDialogRef<AddClientDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Client,
    public servicemodelService: ServicemodelService,
  ) {
  }

  onNoClick(): void {
    this.dialogRef1.close();
  }
}
@Component({
  selector: 'tooth-history-dialog',
  templateUrl: 'tooth-history-dialog.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatTableModule
  ],
})
export class TothHistoryDialog {
  constructor(
    public dialogRef1: MatDialogRef<TothHistoryDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Client,
    public servicemodelService: ServicemodelService,
  ) {
  }

  onNoClick(): void {
    this.dialogRef1.close();
  }
}

@Component({
  selector: 'add-appointment-dialog',
  templateUrl: 'add-appointment-dialog.html',
  standalone: true,
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),],
  imports: [
    MatDividerModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatCheckboxModule,
    MatTableModule,
    CurrencyPipe,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    AsyncPipe,
    NgFor,
    NgIf
  ],
})
export class AddAppointmentDialog {
  constructor(
    public dialogRef2: MatDialogRef<AddAppointmentDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Appointment,
    public servicemodelService: ServicemodelService, public doctorService: DoctorService, public appointmentService: AppointmentService, public dataService: DataService,
    private _snackBar: MatSnackBar,
  ) {
    this.filteredDoctors = this.doctorCtrl.valueChanges.pipe(
      startWith('Заболотская'),
      map(doctor => (doctor ? this._filteredDoctors(doctor) : this.doctors.slice())),
    );
  }

  doctorCtrl = new FormControl('');
  filteredDoctors: Observable<Doctor[]>;
  doctors: Doctor[] = this.doctorService.doctors


  displayedColumns: string[] = ['select', 'code', 'name', 'price'];
  dataSource = new MatTableDataSource<ServiceModel>(this.servicemodelService.servicemenu);
  selection = new SelectionModel<ServiceModel>(true, []);
  expandedElement!: ServiceModel | null;
  expandedElements: ServiceModel[] = [];
  arr1: number[] = []
  arr2: number[] = []
  arr3: number[] = []
  arr4: boolean[] = []
  summ: number = 0
  dellid: number = 0

  private _filteredDoctors(value: string): Doctor[] {
    console.log(value)
    const filterValue = value.toLowerCase();

    return this.doctors.filter(doctor => doctor.surname.toLowerCase().includes(filterValue));
  }

  exprows(element: ServiceModel) {
    console.log(element)
    if (this.expandedElements.includes(element)) {
      this.dellid = this.expandedElements.findIndex(deleteelement => deleteelement === element);
      this.expandedElements.splice(this.dellid, 1);
    } else {
      this.expandedElements.push(element);
      console.log(this.expandedElements)
    }
  }

  selecttooth(element: ServiceModel, tooth: number) {
    if (element.toothlist.includes(tooth)) {
      this.dellid = element.toothlist.findIndex(deleteelement => deleteelement === tooth);
      element.toothlist.splice(this.dellid, 1);
    } else {
      element.toothlist.push(tooth);
      console.log(element)
    }

  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: ServiceModel): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }

    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.code + 1}`;
  }

  getTotalCost() {

    this.data.servicelist = this.selection.selected
    this.arr1 = this.selection.selected.map(t => t.price)
    this.arr2 = this.selection.selected.map(t => t.count)
    this.arr3 = this.selection.selected.map(t => t.toothlist.length)
    this.arr4 = this.selection.selected.map(t => t.tooths)

    //this.data.cost = this.selection.selected.map(t => t.count).reduce((acc, value) => acc + value, 0);

    // this.data.cost = this.arr1.reduce(function(r,a,i){return r+a*arr2[i]},0));
    // console.log(this.data)
    for (var i = 0; i < this.arr1.length; i++) {
      if (this.arr4[i]) {
        this.summ += this.arr1[i] * this.arr2[i] * this.arr3[i];
      } else {
        this.summ += this.arr1[i] * this.arr2[i];
      }

    }
    this.data.cost = this.summ
    this.summ = 0
    return this.data.cost
  }

  openSnackBar() {
    this._snackBar.openFromComponent(PizzaPartyAnnotatedComponent, {
      duration: 2000,
    });
  }

  onNoClick(): void {
    this.dialogRef2.close();
  }
}

@Component({
  selector: 'snack-bar-annotated-component-example-snack',
  template: '<span class="example-pizza-party" matSnackBarLabel>Приём добавлен.</span><span matSnackBarActions><button mat-button matSnackBarAction (click)="snackBarRef.dismissWithAction()">Закрыть</button></span>',
  styles: [
    `
      :host {
        display: flex;
      }

      .example-pizza-party {
        color: primary;
      }
    `,
  ],
  standalone: true,
  imports: [MatButtonModule, MatSnackBarModule],
})
export class PizzaPartyAnnotatedComponent {
  snackBarRef = inject(MatSnackBarRef);
}
