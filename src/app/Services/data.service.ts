import { Injectable } from "@angular/core";
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({providedIn: 'root' })
export class DataService{
    sidenavOpenFlag: boolean = false
    toothmap1 : number[] = [18,17,16,15,14,13,12,11]
    toothmap2 : number[] = [21,22,23,24,25,26,27,28]
    toothmap3 : number[] = [31,32,33,34,35,36,37,38]
    toothmap4 : number[] = [48,47,46,45,44,43,42,41]

    // clientbutton: boolean = false
    // appointmentbutton: boolean = false
    // doctorbutton: boolean = false
    constructor(private sanitizer: DomSanitizer) { }
}