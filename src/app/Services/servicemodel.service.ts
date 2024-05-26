import { Injectable } from "@angular/core";
import { DomSanitizer } from '@angular/platform-browser';
import { ServiceModel } from "../Models/ServiceModel";

@Injectable({providedIn: 'root' })
export class ServicemodelService
{

    servicemenu: ServiceModel[] = [
    {code: 1, name: 'Консультация', price: 200, count: 1, toothlist: [], tooths: false},
    {code: 2, name: 'Рентген-снимок', price: 300, count: 1, toothlist: [], tooths: false},
    {code: 3, name: 'Чистка-снятие налёта', price: 2500, count: 1, toothlist: [], tooths: false},  
    {code: 4, name: 'Отбеливание', price: 3000, count: 1, toothlist: [], tooths: false},     
    {code: 5, name: 'Анастезия', price: 200, count: 1, toothlist: [], tooths: true},
    {code: 6, name: 'Лазеротерапия', price: 200, count: 1, toothlist: [], tooths: true},
    {code: 7, name: 'Покрытие эмаль-лаком', price: 300, count: 1, toothlist: [], tooths: true},
    {code: 8, name: 'Лечение кариеса', price: 1500, count: 1, toothlist: [], tooths: true},
    {code: 9, name: 'Пломбирование', price: 1000, count: 1, toothlist: [], tooths: true},
    {code: 10, name: 'Лечение парадонтита', price: 600, count: 1, toothlist: [], tooths: true},
    ];

    servicelist: ServiceModel[] = []
    

    // openClient: ServiceModel = {nummedbook: 0, surname: '', name: '', middlename: '', dob: '', passport: '', adress: ''}
    // newClient: ServiceModel = {nummedbook: 0, surname: '', name: '', middlename: '', dob: '', passport: '', adress: ''}
    // emptyClient: ServiceModel = {nummedbook: 0, surname: '', name: '', middlename: '', dob: '', passport: '', adress: ''}

    constructor(private sanitizer: DomSanitizer) { }
}