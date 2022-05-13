import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './accounts/first/first.component';
import { LogoutComponent } from './accounts/logout/logout.component';
import { ProfLoginComponent } from './accounts/prof-login/prof-login.component';
import { StudentLoginComponent } from './accounts/student-login/student-login.component';
import { DefaultComponent } from './admin/lauouts/default/default.component';
import { DashboardComponent } from './admin/modules/dashboard/dashboard.component';
import { DepatementComponent } from './admin/modules/depatement/depatement.component';
import { ProfRolesComponent } from './admin/modules/prof-roles/prof-roles.component';
import { ProfsComponent } from './admin/modules/profs/profs.component';
import { QuestionsComponent } from './admin/modules/questions/questions.component';
import { ResultsComponent } from './admin/modules/results/results.component';
import { StudentsComponent } from './admin/modules/students/students.component';
import { SubjectsComponent } from './admin/modules/subjects/subjects.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DefaultProfComponent } from './professor/layouts/default-prof/default-prof.component';
import { CreateNewExamComponent } from './professor/modules/create-new-exam/create-new-exam.component';
import { ExamsComponent } from './professor/modules/exams/exams.component';
import { QbankComponent } from './professor/modules/qbank/qbank.component';
import { StudentsResultsComponent } from './professor/modules/students-results/students-results.component';
import { SubjectComponent } from './professor/modules/subject/subject.component';
import { ExamComponent } from './student-component/exam/exam.component';
import { StudentAccountComponent } from './student-component/student-account/student-account.component';
import { StudentExamsComponent } from './student-component/student-exams/student-exams.component';
import { StudentHomeComponent } from './student-component/student-home/student-home.component';
import { SubjectDetailsComponent } from './student-component/subject-details/subject-details.component';
import { SubmitComponent } from './student-component/submit/submit.component';

const routes: Routes = [
  {path:'first' , component: FirstComponent},
  {path:'studentLogin' , component:StudentLoginComponent},
  {path:'profLogin', component:ProfLoginComponent},
  {path:'logout' , component:LogoutComponent},
  {path:'studentHome' , component:StudentHomeComponent},
  {path:'notFound' , component:NotFoundComponent},
  {path:'studentAccount' , component:StudentAccountComponent}, 
  {path:'subjectDetails' , component:SubjectDetailsComponent}, 

  {path:'studentExams' , component:StudentExamsComponent},
  {path:'exam' , component:ExamComponent},
  {path:'submit' , component:SubmitComponent},

  {
    path:'',
    component:DefaultComponent,
    children:[{
      path:'' ,
      component:DashboardComponent
    },
  
  {
    path:'students', 
    component:StudentsComponent
  },

  {
    path:'departs', 
    component:DepatementComponent
  },

  {
    path:'profs', 
    component:ProfsComponent
  },

  {
    path:'subjects', 
    component:SubjectsComponent
  },

  {
    path:'questions', 
    component:QuestionsComponent
  },

  {
    path:'results', 
    component:ResultsComponent
  },

  {
    path:'profRoles', 
    component:ProfRolesComponent
  },



]
  },

  {
    path:'df',
    component:DefaultProfComponent,
    children:[{
      path:'subject' ,
      component:SubjectComponent,
      
    },

    {
      path:'exam' ,
      component:ExamsComponent,
      
    },
    {
      path:'Qb' ,
      component:QbankComponent,
      
    },
    {
      path:'SR' ,
      component:StudentsResultsComponent,
      
    },
   
  ],
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
