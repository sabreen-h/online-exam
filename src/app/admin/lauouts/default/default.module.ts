import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { StudentsComponent } from '../../modules/students/students.component';
import { SharedModule } from '../../shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

import {MatListModule} from '@angular/material/list';
import { DialogComponent } from '../../modules/dialog/dialog.component';
import { DialogEditComponent } from '../../modules/dialog-edit/dialog-edit.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { DepatementComponent } from '../../modules/depatement/depatement.component';
import { DialogDepartComponent } from '../../modules/dialog-depart/dialog-depart.component';
import { ProfsComponent } from '../../modules/profs/profs.component';
import { NewProfDialogComponent } from '../../modules/new-prof-dialog/new-prof-dialog.component';
import { EditProfDialogComponent } from '../../modules/edit-prof-dialog/edit-prof-dialog.component';
import { SubjectsComponent } from '../../modules/subjects/subjects.component';
import { NewsubjectDialogComponent } from '../../modules/newsubject-dialog/newsubject-dialog.component';
import { QuestionsComponent } from '../../modules/questions/questions.component';
import { NewQuestionDialogComponent } from '../../modules/new-question-dialog/new-question-dialog.component';
import { EditQuesDialogComponent } from '../../modules/edit-ques-dialog/edit-ques-dialog.component';
import { ResultsComponent } from '../../modules/results/results.component';
import { NewResultDialogComponent } from '../../modules/new-result-dialog/new-result-dialog.component';
import { EditResultDialogComponent } from '../../modules/edit-result-dialog/edit-result-dialog.component';
import { ProfRolesComponent } from '../../modules/prof-roles/prof-roles.component';



@NgModule({
  declarations: [ 
    DefaultComponent,
    DashboardComponent,
    StudentsComponent,
    DepatementComponent,
    ProfsComponent,
    SubjectsComponent,
    ResultsComponent,
    ProfRolesComponent,
    DialogComponent,
    DialogEditComponent,
    DialogDepartComponent,
    NewProfDialogComponent,
    EditProfDialogComponent,
    NewsubjectDialogComponent,
    QuestionsComponent,
    NewQuestionDialogComponent,
    EditQuesDialogComponent,
    NewResultDialogComponent,
    EditResultDialogComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatButtonModule,
    FlexLayoutModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    HighchartsChartModule,
      
   
  ]
})
export class DefaultModule { }
