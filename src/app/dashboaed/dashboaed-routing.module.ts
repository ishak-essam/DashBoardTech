import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboaedComponent } from './dashboaed.component';
import { ExamsComponent } from './exams/exams.component';
import { DegreeOfStudentsComponent } from './degree-of-students/degree-of-students.component';
import { HomePageComponent } from './home-page/home-page.component';
import { InstructionalMaterialsComponent } from './instructional-materials/instructional-materials.component';
import { LecturesComponent } from './lectures/lectures.component';
import { LevelsComponent } from './levels/levels.component';
import { ReopenLectureComponent } from './reopen-lecture/reopen-lecture.component';
import { RescheduleExamsComponent } from './reschedule-exams/reschedule-exams.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { StudentsComponent } from './students/students.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { TestComponent } from './test/test.component';

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
export class DashboaedRoutingModule {}
