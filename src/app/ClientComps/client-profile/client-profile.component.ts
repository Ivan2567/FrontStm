import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AsyncPipe, NgIf } from '@angular/common';
import {DataService} from 'src/app/Services/data.service';
import {ClientService} from 'src/app/Services/client.service';
import {ServicemodelService} from 'src/app/Services/servicemodel.service';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent {
  constructor(public dataService: DataService,
    public clientService: ClientService,
    public servicemodelService: ServicemodelService,
    // public doctorService: DoctorService,
) {}
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    close() {}
    openAppointmentDialog(): void {}
}
