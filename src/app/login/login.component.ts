import { Component, OnInit } from '@angular/core';
import { Router,  } from '@angular/router';
import { first } from 'rxjs/operators';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  error: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthService,
  ) { }

  ngOnInit() {
    // window.location.reload();
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.authenticationService.logout()
  }
  get email() {
    return this.loginForm.controls['email'].value;
  }
  get password() {
    return this.loginForm.controls['password'].value;
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.authenticationService
      .login(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.router.navigate(['dashboard']);
        },
        error: (err: any) => {
          console.log(err)
          console.log(err.error.errors);
          this.error = err.error;
        },
      });
  }
  // This function is called when the user clicks on the submit buttoasdzxn.
}
