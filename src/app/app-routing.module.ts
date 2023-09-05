import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './patient/register/register.component';
import { ConsultationFormComponent } from './consultation/consultation-form.component';
import { DoctorComponent } from './doctor/doctor.component';
import { QuestionnaireComponent } from './patient/questionnaire/questionnaire.component';
import { PaymentComponent } from './patient/payment/payment.component';
import { LoginComponent } from './patient/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'Register',component:RegisterComponent},
  {path:'Consultations',component:ConsultationFormComponent},
  {path:'Doctor',component:DoctorComponent},
  { path: 'questionnaire', component: QuestionnaireComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: DashboardComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
