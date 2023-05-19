import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { DashboaedComponent } from './dashboaed/dashboaed.component';

const routes: Routes = [
  {
    path: 'dashboard', canActivate: [AuthGuardService],
    loadChildren: () =>
      import('./dashboaed/dashboaed.module').then((m) => m.DashboaedModule), component: DashboaedComponent
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: "full" },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
