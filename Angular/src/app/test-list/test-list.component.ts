import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataSource } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent{

  displayedColumns = ['user', 'title', 'id'];
  post : any;

  //dataSource:any;
  dataSource: MatTableDataSource<any>;
  
  constructor(private http: HttpClient){
    
    // this.http.get('http://localhost:8000/apiPlatform/resources?page=1').subscribe(data => {
      
      
    //   this.post = data ; 
    //   this.dataSource = new MatTableDataSource(this.post);
    //   alert(this.getConfig)
    // }, error => console.error(error));

    
    const headers= new HttpHeaders()
      .set('content-type', 'application/json');

    this.http.get<any>('https://projetcube.cv-dev-web.fr/apiPlatform/resources?page=1', { 'headers': {'content-type': 'application/json'} }).subscribe(data => {
      this.post = data['hydra:member']; 
      this.dataSource = new MatTableDataSource(this.post);
      console.log(data)
      console.log(this.post)
    }, error => console.error(error));
  

  }
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  

  
  ngOnInit() {
 
  }


  @ViewChild(MatSort) sort: MatSort;



  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
export interface PeriodicElement {
  user: any;
  title: any;
  id: any;
 
}