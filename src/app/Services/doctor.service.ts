import {Injectable} from "@angular/core";
import {DomSanitizer} from '@angular/platform-browser';
import {Doctor} from "../Models/Doctor";

@Injectable({providedIn: 'root'})
export class DoctorService {

  doctors: Doctor[] = [
    {
      id: 2,
      surname: 'Заболотская',
      name: 'Светлана',
      middlename: 'Егоровна',
      dob: '25.01.1969',
      exp: '31',
      post: 'Врач'
    },
    {
      id: 3,
      surname: 'Лоскутова',
      name: 'Алевтина',
      middlename: 'Николаевна',
      dob: '21.04.1994',
      exp: '16',
      post: 'Врач'
    },
    {id: 4, surname: 'Иванова', name: 'Иоанна', middlename: 'Ивановна', dob: '11.03.1999', exp: '1', post: 'Стажер'},
  ];


  currentDoctor: Doctor = {
    id: 2,
    surname: 'Заболотская',
    name: 'Светлана',
    middlename: 'Егоровна',
    dob: '25.01.1969',
    exp: '31',
    post: 'Врач'
  }
  openDoctor: Doctor = {id: 0, surname: '', name: '', middlename: '', dob: '', exp: '', post: ''}
  newDoctor: Doctor = {id: 0, surname: '', name: '', middlename: '', dob: '', exp: '', post: ''}
  emptyDoctor: Doctor = {id: 0, surname: '', name: '', middlename: '', dob: '', exp: '', post: ''}

  constructor(private sanitizer: DomSanitizer) {
  }
}
