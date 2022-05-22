import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-ressources-view',
  templateUrl: './ressources-view.component.html',
  styleUrls: ['./ressources-view.component.css']
})
export class RessourcesViewComponent implements OnInit {

  @Input() postLike: number;
  @Input() postDisabledLike: number;
  @Input() postDisabledDislike: number;
  @Input() postDisabled: number;

  id: any;
  post: any;
  constructor(private location: Location, private route: ActivatedRoute, private dataService: ApiService) { 
    this.postLike = 0;
    this.postDisabledLike = 0;
    this.postDisabledDislike = 0;
    this.postDisabled = 0;
    // this.route.queryParams.subscribe((params => {
    //   this.id = params['id'];
    //   //L'attribut prenom contient "Jean"
    // });
    this.id = this.route.snapshot.paramMap.get('id');

    this.post = this.dataService.ressourcesView(this.id)
    .pipe(first())
    .subscribe(
    data => {
      this.post = data ;
      console.log("Post : ")
      console.log(this.post)
    },
    error => {
    });
  }


  ngOnInit(): void {
    
  }

  getColorLike() {
    if(this.postDisabledLike == 1) {
      return 'green';
    } else if(this.postDisabledDislike == 1) {
      return 'black';
    } else {
      return 'black';
    }
  }
  getColorDislike() {
    if(this.postDisabledLike == 1) {
      return 'black';
    } else if(this.postDisabledDislike == 1) {
      return 'red';
    } else {
      return 'black';
    }
  }
  dislike() {
    this.postLike = this.postLike - 1
    this.postDisabledDislike = 1;
    this.postDisabled = 1;
  }
  like() {
    this.postLike = this.postLike + 1
    this.postDisabledLike = 1;
    this.postDisabled = 1;
  }

  back(): void {
    this.location.back()
  }




}
