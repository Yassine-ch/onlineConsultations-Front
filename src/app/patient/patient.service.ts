import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from './patient';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  
  private apiUrl: string = 'http://localhost:8080/api/patient'; // adjust this to your backend URL

  constructor(private http: HttpClient) { }

  register(patient: Patient) {
    return this.http.post<Patient>(`${this.apiUrl}/register`, patient);
  }
  updatePatient(patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(`${this.apiUrl}/patients/${patient.id}`, patient);
  }
    //Get all patient 
    getPatients(): Observable<Patient[]> {
      return this.http.get<Patient[]>(this.apiUrl + '/allPatients');
    }
    //COUNT PATINT
    getNumberOfPatients(): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/patients/count`); // Replace with your API endpoint
    }
}