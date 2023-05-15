import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const PasswordMatch: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  let PasswordForm = control.get('Password');
  let ComfirmPasswordForm = control.get('ConfirmPassword');
  console.log(PasswordForm);
  console.log( PasswordForm?.value == ComfirmPasswordForm?.value );

  let ValErr = {
    UnMatchPassword: { pass: PasswordForm, comfirm: ComfirmPasswordForm },
  };
  if (
    !PasswordForm ||
    !ComfirmPasswordForm ||
    !PasswordForm.value ||
    !ComfirmPasswordForm.value
  )
    return null;
  return PasswordForm.value == ComfirmPasswordForm.value ? null : ValErr;
};
