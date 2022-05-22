import { Component, OnInit, Input } from '@angular/core';
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

  back(): void {
    this.location.back()
  }

  // @Input() resourceDetails = { title: '', 
  // category : '', type : '', text : '', contents : ['', ''], visibility : true,
  // modoValid: true,
  // status: '1',user: ''};
  @Input() resourceDetails = { title: '', 
  category : '', type : '', text : '', visibility : true,
  modoValid: true,
  status: '1',user: ''};
  constructor(public restApi: ApiService, public router: Router, private location: Location) {}
  ngOnInit() {}
  addResource(dataResource: any) {
    this.resourceDetails.category = '/apiPlatform/categories/'+this.resourceDetails.category
    this.resourceDetails.type = '/apiPlatform/types/'+this.resourceDetails.type
    this.resourceDetails.status = '/apiPlatform/statuses/'+this.resourceDetails.status
    this.restApi.resourceAdd(this.resourceDetails).subscribe((data: {}) => {
      this.router.navigate(['/ressourcesList']);
    });
  }
}
