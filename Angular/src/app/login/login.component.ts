import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    signinForm: FormGroup;
    test : any;
    constructor(
      public fb: FormBuilder,
      public authService: AuthService,
      public router: Router
    ) {
      this.signinForm = this.fb.group({
        email: [''],
        password: [''],
      });
    }
    ngOnInit() {}
    loginUser() {
      this.test = this.authService.getToken();
      alert(this.test);
      this.authService.signIn(this.signinForm.value);
      this.test = this.authService.getToken();
      alert(this.test);
    }
}