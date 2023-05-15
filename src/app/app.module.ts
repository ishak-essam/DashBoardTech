import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
// import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NavbarComponent } from './main-layout/navbar/navbar.component';
import { SidebarComponent } from './main-layout/sidebar/sidebar.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveComponent } from './reactive/reactive.component';
import { LoginComponent } from './login/login.component';
import { TokenInterceptorService } from './interceptors/token-interceptor.service';
import { MainLayoutComponent } from './main-layout/main-layout.component';
@NgModule({
  declarations: [
    AppComponent,
    // MainLayoutComponent,
    NavbarComponent,
    SidebarComponent,
    ReactiveComponent,
    LoginComponent, MainLayoutComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatTableModule,
    HttpClientModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule, RouterModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
