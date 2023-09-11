import { Consultation } from "../consultation/consultation";

export interface Doctor {
    id: number;
    firstName:string;
    lastName: string;
    proficiency: string;
    price: number;
    email: string;
    password: string;
    confirmPassword: string;
    createdAt:Date;
    updatedAt:Date;
    doctorConsultations: Consultation [];
}
//
// doctor.ts
export class Doctor {
    id: number=0;
    firstName: string = '';
    lastName: string = '';
    proficiency: string = '';
    price: number = 0;
    email: string = '';
    password: string = '';
    confirmPassword: string = '';
  }