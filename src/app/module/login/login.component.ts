import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
      email: [''],
      password: ['']
    })
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
