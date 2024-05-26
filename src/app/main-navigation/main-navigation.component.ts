import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AsyncPipe, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.css']
})
export class MainNavigationComponent {
  constructor( public router: Router, public dataService: DataService ) { }
  private breakpointObserver = inject(BreakpointObserver);

  selectDoc() {
    this.router.navigate([ '/doctors' ])
	}
  selectCli() {
    this.router.navigate([ '/clients' ])
	}
  selectApp() {
    this.router.navigate([ '/appointments' ])
	}

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
