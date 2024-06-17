import {Injectable} from "@angular/core";
import {DomSanitizer} from '@angular/platform-browser';
import {Client} from "../Models/Client";

@Injectable({providedIn: 'root'})
export class ClientService {

  clients: Client[] = [
    {
      nummedbook: 2,
      surname: 'Иванов',
      name: 'Иван',
      middlename: 'Василич',
      dob: '12.02.2001',
      passport: '3316345678',
      adress: 'example@mail.com'
    },
    {
      nummedbook: 3,
      surname: 'Шабалин',
      name: 'Павел',
      middlename: 'Олегович',
      dob: '01.01.2001',
      passport: '3316345679',
      adress: 'example@mail.com'
    },
    {
      nummedbook: 4,
      surname: 'Прасков',
      name: 'Кирил',
      middlename: 'Дмитриевич',
      dob: '02.11.2001',
      passport: '3316345676',
      adress: 'example@mail.com'
    },
    {
      nummedbook: 5,
      surname: 'Иванов',
      name: 'Сергей',
      middlename: 'Григорьевич',
      dob: '01.07.2002',
      passport: '3316345675',
      adress: 'example@mail.com'
    },
    {
      nummedbook: 6,
      surname: 'Тухлин',
      name: 'Сергей',
      middlename: 'Юрьевич',
      dob: '01.01.2001',
      passport: '3316345673',
      adress: 'example@mail.com'
    },
    {
      nummedbook: 7,
      surname: 'Иванов',
      name: 'Сергей',
      middlename: 'Григорьевич',
      dob: '31.01.2000',
      passport: '3316345672',
      adress: 'example@mail.com'
    },
    {
      nummedbook: 8,
      surname: 'Иванов',
      name: 'Сергей',
      middlename: 'Григорьевич',
      dob: '01.01.2001',
      passport: '3316345671',
      adress: 'example@mail.com'
    },
  ];

  openClient: Client = {nummedbook: 0, surname: '', name: '', middlename: '', dob: '', passport: '', adress: ''}
  newClient: Client = {nummedbook: 6, surname: '', name: '', middlename: '', dob: '', passport: '', adress: ''}
  emptyClient: Client = {nummedbook: 0, surname: '', name: '', middlename: '', dob: '', passport: '', adress: ''}

  constructor(private sanitizer: DomSanitizer) {
  }
}
