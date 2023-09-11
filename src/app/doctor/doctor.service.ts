import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Doctor } from './doctor';
import { environment } from 'src/environnement/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private apiServerUrl =environment.apiBaseUrl;
  private apiUrl = 'http://localhost:8080/api/doctors';

  constructor(private http: HttpClient) { }

  public getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${this.apiServerUrl}/api/doctors`);
  }
  //COUNT DOCTORES
  getNumberOfDoctors(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/count`); // Replace with your API endpoint
  }
}
