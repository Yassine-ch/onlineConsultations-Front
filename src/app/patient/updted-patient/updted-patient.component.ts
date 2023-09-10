// // update-patient.component.ts
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

// import { Patient } from '../models/patient';
// import { PatientService } from '../patient.service';

// @Component({
//   selector: 'app-update-patient',
//   templateUrl: '../update-patient.component.html',
//   styleUrls: ['./update-patient.component.css'],
// })
// export class UpdatePatientComponent implements OnInit {
//   patient: Patient;

//   constructor(private route: ActivatedRoute, private patientService: PatientService) {}

//   ngOnInit() {
//     // const id = +this.route.snapshot.paramMap.get('id');
//     // this.patientService.getPatient(id).subscribe((data) => {
//     //   this.patient = data;
//     // });
//   }

//   onSubmit() {
//     this.patientService.updatePatient(this.patient).subscribe(
//       (updatedPatient) => {
//         console.log('Patient updated:', updatedPatient);
//       },
//       (error) => {
//         console.log('Update failed', error);
//       }
//     );
//   }
// }
