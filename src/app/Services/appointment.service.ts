import {Injectable} from "@angular/core";
import {DomSanitizer} from '@angular/platform-browser';
import {ServiceModel} from "../Models/ServiceModel";
import {Appointment} from "../Models/Appointment";

@Injectable({providedIn: 'root'})
export class AppointmentService {


  servicelist: ServiceModel[] = []

  appointmentlist: Appointment[] = [
    {
      id: 1,
      clientname: "Иванов",
      clientsurname: "Иван",
      clientmiddlename: "Васильевич",
      doctorsurname: "Заболотская",
      date: "2024-05-14",
      time: "10:40",
      servicelist: this.servicelist,
      cost: 0
    }
  ]

  openAppointment: Appointment = {
    id: 0,
    clientname: "",
    clientsurname: "",
    clientmiddlename: "",
    doctorsurname: "",
    date: "",
    time: "",
    servicelist: [],
    cost: 0
  }
  newAppointment: Appointment = {
    id: 0,
    clientname: "",
    clientsurname: "",
    clientmiddlename: "",
    doctorsurname: "",
    date: "",
    time: "",
    servicelist: [],
    cost: 0
  }
  emptyAppointment: Appointment = {
    id: 0,
    clientname: "",
    clientsurname: "",
    clientmiddlename: "",
    doctorsurname: "",
    date: "",
    time: "",
    servicelist: [],
    cost: 0
  }

  constructor(private sanitizer: DomSanitizer) {
  }
}
