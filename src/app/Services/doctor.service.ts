import { Injectable } from "@angular/core";
import { DomSanitizer } from '@angular/platform-browser';
import { Doctor } from "../Models/Doctor";

@Injectable({providedIn: 'root' })
export class DoctorService
{

    doctors: Doctor[] = [
    {id: 2, surname: 'Докторова', name: 'Докторра', middlename: 'Докторвна', dob: '01.01.2001', exp: '3', post: 'Стажер'},
    {id: 3, surname: 'Докторов', name: 'Доктор', middlename: 'Докторович', dob: '01.01.2001', exp: '16', post: 'Врач'},
    {id: 4, surname: 'Иванов', name: 'Иван', middlename: 'Иванович', dob: '01.01.2001', exp: '4', post: 'Стажер'},
    {id: 5, surname: 'Иванова', name: 'Инна', middlename: 'Ивановна', dob: '01.01.2001', exp: '34', post: 'Врач'},
    ];

    openDoctor: Doctor = {id: 0, surname: '', name: '', middlename: '', dob: '', exp: '', post: ''}
    newDoctor: Doctor = {id: 0, surname: '', name: '', middlename: '', dob: '', exp: '', post: ''}
    emptyDoctor: Doctor = {id: 0, surname: '', name: '', middlename: '', dob: '', exp: '', post: ''}

    constructor(private sanitizer: DomSanitizer) { }
}