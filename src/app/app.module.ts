import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTableModule} from '@angular/material/table';
import {MatSliderModule} from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatCardModule} from '@angular/material/card';


import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './accounts/first/first.component';
import { StudentLoginComponent } from './accounts/student-login/student-login.component';
import { ProfLoginComponent } from './accounts/prof-login/prof-login.component';
import { LogoutComponent } from './accounts/logout/logout.component';
import { StudentHomeComponent } from './student-component/student-home/student-home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StudentAccountComponent } from './student-component/student-account/student-account.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './admin/lauouts/default/default.module';
import { DefaultProfModule } from './professor/layouts/default-prof/default-prof.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { StudentExamsComponent } from './student-component/student-exams/student-exams.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { ExamComponent } from './student-component/exam/exam.component';
import { MatDividerModule } from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';
import { SubmitComponent } from './student-component/submit/submit.component';
import { SubjectDetailsComponent } from './student-component/subject-details/subject-details.component';



@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    StudentLoginComponent,
    ProfLoginComponent,
    LogoutComponent,
    StudentHomeComponent,
    NotFoundComponent,
    StudentAccountComponent,
    StudentExamsComponent,
    ExamComponent,
    SubmitComponent,
    SubjectDetailsComponent,
    
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    DefaultModule,
    DefaultProfModule,
    MatDatepickerModule,
    MatTabsModule,
    MatBadgeModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatDividerModule,
    MatRadioModule,
    HttpClientModule,
    MatSliderModule,
    MatCardModule,
    MatFormFieldModule,
  
    
   
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
