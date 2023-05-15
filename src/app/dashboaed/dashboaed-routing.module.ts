import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboaedComponent } from './dashboaed.component';

import { TestComponent } from './test/test.component';
import { DegreeOfStudentsComponent } from './degree-of-students/components/degree-of-students.component';
import { ExamsComponent } from './exams/components/exams.component';
import { HomePageComponent } from './home-page/components/home-page.component';
import { InstructionalMaterialsComponent } from './instructional-materials/components/instructional-materials.component';
import { LecturesComponent } from './lectures/components/lectures.component';
import { LevelsComponent } from './levels/components/levels.component';
import { ReopenLectureComponent } from './reopen-lecture/components/reopen-lecture.component';
import { RescheduleExamsComponent } from './reschedule-exams/components/reschedule-exams.component';
import { ReviewsComponent } from './reviews/components/reviews.component';
import { StudentsComponent } from './students/components/students.component';
import { SubscriptionsComponent } from './subscriptions/components/subscriptions.component';

const routes: Routes = [
  { path: '', component: DashboaedComponent },
  { path: 'Degrees', component: DegreeOfStudentsComponent },
  { path: 'Exams', component: ExamsComponent },
  { path: 'Home', component: HomePageComponent },
  { path: 'Instructional', component: InstructionalMaterialsComponent },
  { path: 'Lectures', component: LecturesComponent },
  { path: 'Levels', component: LevelsComponent },
  { path: 'ReopenLecture', component: ReopenLectureComponent },
  { path: 'RescheduleExams', component: RescheduleExamsComponent },
  { path: 'Reviews', component: ReviewsComponent },
  { path: 'Students', component: StudentsComponent },
  { path: 'Subscriptions', component: SubscriptionsComponent },
  { path: 'test', component: TestComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboaedRoutingModule { }
