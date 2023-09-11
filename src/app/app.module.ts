import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ConsultationFormComponent } from './consultation/consultation-form.component';
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { RouterOutlet } from "@angular/router";
import { RegisterComponent } from './patient/register/register.component';
import { QuestionnaireComponent } from './patient/questionnaire/questionnaire.component';


import { LoginComponent } from './patient/login/login.component';
import { DiscussionComponent } from './patient/discussion/discussion.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaymentComponent } from './patient/payment/payment.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SidebarAdminComponent } from './admin-dashboard/sidebar-admin/sidebar-admin.component';
import { StatsComponent } from './admin-dashboard/stats/stats.component';
import { CreateDoctorComponent } from './admin-dashboard/create-doctor/create-doctor.component';




@NgModule({
    declarations: [
        AppComponent,
        DoctorComponent,
        ConsultationFormComponent,
        PatientComponent,
        RegisterComponent,
        QuestionnaireComponent,
        DiscussionComponent,
        LoginComponent,
        DashboardComponent,
        NavbarComponent,
        FooterComponent,
        PaymentComponent,
        SidebarComponent,
       SidebarAdminComponent,
        AdminDashboardComponent,
StatsComponent,
CreateDoctorComponent,

    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        RouterOutlet,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        
        
      
   
        
    
    ]
})
export class AppModule { }
