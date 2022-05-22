import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
selector: 'app-register',
templateUrl: './register.component.html',
styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
angForm: FormGroup;
constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
this.angForm = this.fb.group({
email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
password: ['', Validators.required],
cpassword: ['', Validators.required],
name: ['', Validators.required],
prenom: ['', Validators.required],
date: ['', Validators.required],
mobile: ['', Validators.required]
});
}

ngOnInit() {
}

postdata(angForm1: { value: {
     name: any; 
     prenom: any; 
     password: any; 
     cpassword: any; 
     email: any; 
     date: any;}; })
{
this.dataService.userregistration(
    angForm1.value.name,
    angForm1.value.prenom,
    angForm1.value.password,
    angForm1.value.cpassword,
    angForm1.value.email,
    angForm1.value.date)
.pipe(first())
.subscribe(
data => {
this.router.navigate(['login']);
},

error => {
});
}

get email() { return this.angForm.get('email'); }
get password() { return this.angForm.get('password'); }
get cpassword() { return this.angForm.get('cpassword'); }
get date() { return this.angForm.get('date'); }
get prenom() { return this.angForm.get('prenom'); }
get name() { return this.angForm.get('name'); }
}