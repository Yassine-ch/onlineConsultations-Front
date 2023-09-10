import { Component } from '@angular/core';
import { PatientService } from './patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {
  patientCount!: number;

  constructor(private patientService: PatientService) { }

}
