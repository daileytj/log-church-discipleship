import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssessmentComponent } from './assessment/assessment.component';
import { CompletedAssessmentComponent } from './completed-assessment/completed-assessment.component';

const routes: Routes = [
  { path: 'assessment', component: AssessmentComponent },
  { path: 'completed-assessment', component: CompletedAssessmentComponent },
  { path: '**', component: AssessmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
