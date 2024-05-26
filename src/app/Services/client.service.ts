import { Injectable } from "@angular/core";
import { DomSanitizer } from '@angular/platform-browser';
import { Client } from "../Models/Client";

@Injectable({providedIn: 'root' })
export class ClientService
{

    clients: Client[] = [
    {nummedbook: 2, surname: 'Типов', name: 'Тип', middlename: 'Типыч', dob: '01.01.2001', passport: '3316345678', adress: 'example@mail.com'},
    {nummedbook: 3, surname: 'Клиентов', name: 'Клиент', middlename: 'Клиентович', dob: '01.01.2001', passport: '3316345678', adress: 'example@mail.com'},
    {nummedbook: 4, surname: 'Клиентова', name: 'Клиента', middlename: 'Клиентовна', dob: '01.01.2001', passport: '3316345678', adress: 'example@mail.com'},
    {nummedbook: 5, surname: 'Типова', name: 'Типа', middlename: 'Типовна', dob: '01.01.2001', passport: '3316345678', adress: 'example@mail.com'},
    ];

    openClient: Client = {nummedbook: 0, surname: '', name: '', middlename: '', dob: '', passport: '', adress: ''}
    newClient: Client = {nummedbook: 6, surname: '', name: '', middlename: '', dob: '', passport: '', adress: ''}
    emptyClient: Client = {nummedbook: 0, surname: '', name: '', middlename: '', dob: '', passport: '', adress: ''}

    constructor(private sanitizer: DomSanitizer) { }
}