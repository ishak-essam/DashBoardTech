import { PasswordMatch } from './../reactive/PasswordMatch/PasswordMatch';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';
import { first } from 'rxjs/operators';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }


  get email() {
    return this.loginForm.controls['email'].value;
  }
  get password() {
    return this.loginForm.controls['email'].value;
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
          this.router.navigate(['test']);
        },
        error: (err: any) => {
          console.log(err)
          this.error = err;
        },
      });
  }

  logout() {
    this.authenticationService.logout()
  }
}
