import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordChecker } from './custom-validators/password-checker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // tslint:disable-next-line:member-ordering
  title = 'signup-reactive';
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTandC: [false, Validators.required]
    },
    {
      validators: PasswordChecker('password', 'confirmPassword')
    });
  }

  // tslint:disable-next-line:typedef
  get h() {
    return this.registerForm.controls;
  }

  // tslint:disable-next-line:typedef
  onSubmit(){

    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
  }

  // tslint:disable-next-line:typedef
  onReset(){

    this.submitted = false;
    this.registerForm.reset();
  }
}
