import { Component, ErrorHandler, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/users/user';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private router: Router,
    private authService: AuthService,
    private fb: FormBuilder,
    provide: ErrorHandler) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  submit() {
    const val = this.form.value;

    if (val.email && val.password) {
      try {
        this.authService.login(val.email, val.password)
        .subscribe(
          (user) => {
            delete user.password;
            window.sessionStorage.setItem('loggedInUser', JSON.stringify(user));
            console.log("User is logged in");
            this.router.navigateByUrl('/');
          }
        );
      } catch (err) {
        alert(err)
      }
    }
  }
}
