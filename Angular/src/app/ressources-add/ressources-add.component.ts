import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { first } from 'rxjs';
@Component({
  selector: 'app-ressources-add',
  templateUrl: './ressources-add.component.html',
  styleUrls: ['./ressources-add.component.css']
})
export class RessourcesAddComponent implements OnInit {


  ngOnInit(): void {
  }

  back(): void {
    this.location.back()
  }

  angForm: FormGroup;
  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router, private location: Location) {
  this.angForm = this.fb.group({
  titre: ['', Validators.required],
  categorie: ['', Validators.required],
  type: ['', Validators.required],
  description: ['', Validators.required],
  image: ['', Validators.required],
  video: ['', Validators.required],
  visibilite: ['', Validators.required],
  mobile: ['', Validators.required]
  });
  }

postdata(angForm1: { value: {
    titre: any; 
    categorie: any; 
    type: any; 
    description: any; 
    image: any; 
    video: any;
    visibilite: any;}; })
{
this.dataService.ressourcesAdd(
    angForm1.value.titre,
    angForm1.value.categorie,
    angForm1.value.type,
    angForm1.value.description,
    angForm1.value.image,
    angForm1.value.video,
    angForm1.value.visibilite)
.pipe(first())
.subscribe(
data => {
this.router.navigate(['ressourceList']);
},

error => {
});
}

get titre() { return this.angForm.get('titre'); }
get categorie() { return this.angForm.get('categorie'); }
get type() { return this.angForm.get('type'); }
get description() { return this.angForm.get('description'); }
get image() { return this.angForm.get('image'); }
get video() { return this.angForm.get('video'); }
get visibilite() { return this.angForm.get('visibilite'); }
}
