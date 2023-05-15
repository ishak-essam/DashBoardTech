import { IUser } from '../iuser';
import { Component } from '@angular/core';
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
import { PasswordMatch } from './PasswordMatch/PasswordMatch';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent {
  UserInfo;
  constructor(private FB: FormBuilder) {
    this.UserInfo = FB.group(
      {
        FullName: [
          '',
          [Validators.required, Validators.pattern('[A-ZA-Z]{3,}')],
        ],
        Email: ['', Validators.required, this.existEmailValitors()],
        MobilleNumber: FB.array(['']),
        Address: FB.group({
          City: ['', Validators.required],
          PostalCode: ['', Validators.required],
          Street: [''],
        }),
        Password: ['', Validators.required],
        ConfirmPassword: ['', Validators.required],
      },
      { validators: PasswordMatch }
    );
    /*
    this.UserInfo = new FormGroup({
      FullName: new FormControl('', [
        Validators.required,
        Validators.pattern('[A-ZA-Z]{3,}'),
      ]),
      Email: new FormControl(),
      MobilleNumber: new FormControl(),
      Address: new FormGroup({
        City: new FormControl(),
        PostalCode: new FormControl(),
        Street: new FormControl(),
      }),
      Password: new FormControl(),
      ConfirmPassword: new FormControl(),
    });*/
  }
  test = {};
  Clicked() {
    this.test = this.UserInfo.value;
    // this.UserInfo.setValue({
    //   FullName: '',
    //   Email: '',
    //   MobilleNumber: '1234',
    //   Address: {
    //     City: "['', Validators.required]",
    //     PostalCode: "['', Validators.required]",
    //     Street: "['']",
    //   },
    //   Password: "['']",
    //   ConfirmPassword: "['']",
    // });
  }
  get FullName() {
    return this.UserInfo.get('FullName');
  }
  get Password() {
    return this.UserInfo.get('Password');
  }
  get ConfirmPassword() {
    return this.UserInfo.get('ConfirmPassword');
  }
  Submit() {
    let User: IUser = this.UserInfo.value as IUser;
    console.log(User);
    let User2: IUser = <IUser>this.UserInfo.value;
    console.log(User2);
    this.UserInfo.patchValue(User);
  }
  get MobilleNumber() {
    return this.UserInfo.get('MobilleNumber') as FormArray;
  }
  add() {
    this.MobilleNumber.push(new FormControl());
  }
  get EmailValid() {
    return this.UserInfo.get('Email');
  }
  existEmailValitors(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let existEmailValue: string = control.value as string;
      let validationError = { EmailError: { value: existEmailValue } };
      if (existEmailValue.length == 0 || control.untouched) {
        return null;
      }
      return existEmailValue.includes('@gmail.com') ? null : validationError;
    };
  }
  /* form: FormGroup = new FormGroup({
     Email: new FormControl('', [
       Validators.required,
       Validators.maxLength(30),
       Validators.minLength(5),
        Ends.EmailEnds,
     ]),
     Password: new FormControl('', [
       Validators.required,
        PasswordKeyWord.PasswordKeyWords,
     ]),
   });

   get emails() {
     return this.form.get('Email');
   }
   get FullName() {
     return this.UserInfo.get('FullName');
   }
   get Passwords() {
     return this.form.get('Password');
   }*/
}
