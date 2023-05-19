import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboaedRoutingModule } from './dashboaed-routing.module';
import { DashboaedComponent } from './dashboaed.component';
import { HomePageComponent } from './home-page/components/home-page.component';
import { StudentsComponent } from './students/components/students.component';
import { DegreeOfStudentsComponent } from './degree-of-students/components/degree-of-students.component';
import { LevelsComponent } from './levels/components/levels.component';
import { LecturesComponent } from './lectures/components/lectures.component';
import { ExamsComponent } from './exams/components/exams.component';
import { RescheduleExamsComponent } from './reschedule-exams/components/reschedule-exams.component';
import { ReopenLectureComponent } from './reopen-lecture/components/reopen-lecture.component';
import { ReviewsComponent } from './reviews/components/reviews.component';
import { SubscriptionsComponent } from './subscriptions/components/subscriptions.component';
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
import { MainLayoutComponent } from '../main-layout/main-layout.component';
import { SidebarComponent } from '../main-layout/sidebar/sidebar.component';
import { NavbarComponent } from '../main-layout/navbar/navbar.component';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { SubjectsComponent } from './subjects/components/subjects/subjects.component';
import { SettingsComponent } from './settings/components/settings/settings.component';
@NgModule({
  declarations: [
    DashboaedComponent,
    HomePageComponent,
    StudentsComponent,
    DegreeOfStudentsComponent,
    LevelsComponent,
    LecturesComponent,
    ExamsComponent,
    RescheduleExamsComponent,
    ReopenLectureComponent,
    ReviewsComponent,
    SubscriptionsComponent,
    TestComponent,
    MainLayoutComponent,
    SidebarComponent,
    NavbarComponent,
    SubjectsComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    DashboaedRoutingModule,
    MatTableModule,
    HttpClientModule,
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
    MatToolbarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    RouterModule
  ],
  exports: [MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatIconModule,
    MatListModule,
    RouterModule,],
})
export class DashboaedModule { }
