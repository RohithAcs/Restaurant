import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(private formBuiler: FormBuilder, private _http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuiler.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$') //this is for the letters (both uppercase and lowercase) and numbers validation
      ]))
    })
  }

  isEmail() {
    if (this.loginForm.get('email')?.value != '') {
      return false;
    } else {
      return true;
    }
  }

  isPassword() {
    if (this.loginForm.get('password')?.value != '') {
      return false;
    } else {
      return true;
    }
  }

  logIn() {
    this._http.get<any>("http://localhost:3000/signup").subscribe({
      next: (res: any) => {
        const user = res.find((a: any) => {
          return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password;
        });

        if (user) {
          alert("Login Successfull");
          this.router.navigate(["restaurant"])
        } else {
          alert("User Not Found");
        }
      },
      error: (err: any) => {
        alert(err.message);
      }
    })
  }

}
