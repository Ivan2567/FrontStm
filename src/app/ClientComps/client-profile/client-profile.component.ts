import {Component, inject} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {DataService} from 'src/app/Services/data.service';
import {ClientService} from 'src/app/Services/client.service';
import {ServicemodelService} from 'src/app/Services/servicemodel.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent {
  constructor(public router: Router,
              public dataService: DataService,
              public clientService: ClientService,
              public servicemodelService: ServicemodelService,
              // public doctorService: DoctorService,
  ) {
  }

  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  unLogin() {
    this.router.navigate([ '/login' ])
  }

  close() {
  }

  openAppointmentDialog(): void {
  }
}
