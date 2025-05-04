/**
 * ToDO: validations for the signup form
 * 1. Name: required, min length 3, max length 20, only letters and spaces allowed
 * 2. Email: required, valid email format
 * 3. Mobile: required, valid mobile number format (10 digits)
 * 4. Password: required, min length 5, max length 20, at least one uppercase letter, one lowercase letter, one number
 * 5. Confirm Password: required, must match password
 */

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$') //this is for the letters (both uppercase and lowercase) and numbers validation
      ]))
    })
  }

  signUp() {
    this._http.post<any>("http://localhost:3000/signup", this.signupForm.value).subscribe({
      next: (res: any) => {
        alert("Registration Successfull");
        this.signupForm.reset();
        this.router.navigate(['login']);
      },
      error: (err: any) => {
        alert(err.message);
      }
    })
  }

}
