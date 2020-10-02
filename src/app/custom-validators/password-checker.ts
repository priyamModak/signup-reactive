import { FormGroup } from '@angular/forms';

// tslint:disable-next-line:typedef
export function PasswordChecker(controlName: string, compareControlName: string) {

    return (formGroup: FormGroup) => {

        const password = formGroup.controls[controlName];
        const confirmPassword = formGroup.controls[compareControlName];

        if (password.value !== confirmPassword.value){
            confirmPassword.setErrors({mustmatch: true});
        }
    };
}
