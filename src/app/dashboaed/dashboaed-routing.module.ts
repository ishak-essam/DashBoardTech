import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboaedComponent } from './dashboaed.component';

import { TestComponent } from './test/test.component';
import { DegreeOfStudentsComponent } from './degree-of-students/components/degree-of-students.component';
import { ExamsComponent } from './exams/components/exams.component';
import { HomePageComponent } from './home-page/components/home-page.component';
import { LecturesComponent } from './lectures/components/lectures.component';
import { LevelsComponent } from './levels/components/levels.component';
import { ReopenLectureComponent } from './reopen-lecture/components/reopen-lecture.component';
import { RescheduleExamsComponent } from './reschedule-exams/components/reschedule-exams.component';
import { ReviewsComponent } from './reviews/components/reviews.component';
import { StudentsComponent } from './students/components/students.component';
import { SubscriptionsComponent } from './subscriptions/components/subscriptions.component';
import { SettingsComponent } from './settings/components/settings/settings.component';
import { SubjectsComponent } from './subjects/components/subjects/subjects.component';

const routes: Routes = [
  // { path: '', component: DashboaedComponent },
  { path: 'degrees', component: DegreeOfStudentsComponent },
  { path: 'exams', component: ExamsComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'lectures', component: LecturesComponent },
  { path: 'levels', component: LevelsComponent },
  { path: 'reopenLecture', component: ReopenLectureComponent },
  { path: 'rescheduleExams', component: RescheduleExamsComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'subscriptions', component: SubscriptionsComponent },
  { path: 'setting', component: SettingsComponent },
  { path: 'subjects', component: SubjectsComponent },
  { path: 'test', component: TestComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboaedRoutingModule { }
