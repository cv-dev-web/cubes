import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { formatDate } from '@angular/common';

@Component({
selector: 'app-register',
templateUrl: './register.component.html',
styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
    currentDate = new Date();
    cValue = formatDate(this.currentDate, 'yyyy-MM-dd', 'en-US');
    @Input() userDetails = { lastName: '', firstName : '', birthDate : '', email : '', 
    password : '', plainPassword : '', avatar : '', isActif: false, firstConnexion: true,
    grade: '/apiPlatform/grades/1', phone : '', userCreationDate : this.cValue};
    constructor(public restApi: ApiService, public router: Router) {}
    ngOnInit() {}
    addUser(dataUser: any) {
        //this.userDetails.birthDate = '2022-06-09T20:14:37.085Z'
      this.restApi.userAdd(this.userDetails).subscribe((data: {}) => {
        this.router.navigate(['/ressources-list']);
      });
    }
}
