import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboaedRoutingModule } from './dashboaed-routing.module';
import { DashboaedComponent } from './dashboaed.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StudentsComponent } from './students/students.component';
import { DegreeOfStudentsComponent } from './degree-of-students/degree-of-students.component';
import { InstructionalMaterialsComponent } from './instructional-materials/instructional-materials.component';
import { LevelsComponent } from './levels/levels.component';
import { LecturesComponent } from './lectures/lectures.component';
import { ExamsComponent } from './exams/exams.component';
import { RescheduleExamsComponent } from './reschedule-exams/reschedule-exams.component';
import { ReopenLectureComponent } from './reopen-lecture/reopen-lecture.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@NgModule({
  declarations: [
    DashboaedComponent,
    HomePageComponent,
    StudentsComponent,
    DegreeOfStudentsComponent,
    InstructionalMaterialsComponent,
    LevelsComponent,
    LecturesComponent,
    ExamsComponent,
    RescheduleExamsComponent,
    ReopenLectureComponent,
    ReviewsComponent,
    SubscriptionsComponent,
    TestComponent,
  ],
  imports: [
    CommonModule,
    DashboaedRoutingModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSortModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  exports: [MatTableModule],
})
export class DashboaedModule {}
