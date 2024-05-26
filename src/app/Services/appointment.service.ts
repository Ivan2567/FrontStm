import { Injectable } from "@angular/core";
import { DomSanitizer } from '@angular/platform-browser';
import { ServiceModel } from "../Models/ServiceModel";
import { Appointment } from "../Models/Appointment";

@Injectable({providedIn: 'root' })
export class AppointmentService
{


    servicelist: ServiceModel[] = []

    appointmentlist: Appointment[] = [
    {id: 1, clientname: "test", clientsurname: "test", clientmiddlename: "test", doctorsurname: "test", date: "0001-01-01", time: "00:00", servicelist: this.servicelist, cost: 0 }
    ]
    

    openAppointment: Appointment = {id: 0, clientname: "", clientsurname: "", clientmiddlename: "", doctorsurname: "", date: "", time: "", servicelist: [], cost: 0 }
    newAppointment: Appointment = {id: 0, clientname: "", clientsurname: "", clientmiddlename: "", doctorsurname: "", date: "", time: "", servicelist: [], cost: 0  }
    emptyAppointment: Appointment = {id: 0, clientname: "", clientsurname: "", clientmiddlename: "", doctorsurname: "", date: "", time: "", servicelist: [], cost: 0  }

    constructor(private sanitizer: DomSanitizer) { }
}