import {Component, inject} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {AsyncPipe, NgIf} from '@angular/common';
import {Router} from "@angular/router";
import {DataService} from "../../Services/data.service";
import {ClientService} from "../../Services/client.service";
import {ServicemodelService} from "../../Services/servicemodel.service";

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent {
  private breakpointObserver = inject(BreakpointObserver);

  constructor(public router: Router,
              public dataService: DataService,
              public clientService: ClientService,
              public servicemodelService: ServicemodelService,) {
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
