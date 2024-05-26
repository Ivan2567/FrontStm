import { ServiceModel } from "../Models/ServiceModel";
export interface Appointment {
    id: number
    clientname: string;
    clientsurname: string;
    clientmiddlename: string;
    doctorsurname: string;
    date: string;
    time: string;
    cost: number
    servicelist: ServiceModel[]
  }