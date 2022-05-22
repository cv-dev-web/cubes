import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { RessourcesViewComponent } from '../ressources-view/ressources-view.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-ressources-list',
  templateUrl: './ressources-list.component.html',
  styleUrls: ['./ressources-list.component.css']
})
export class RessourcesListComponent{
  displayedColumns = ['user', 'title', 'id'];
  post : any;

  //dataSource:any;
  dataSource: MatTableDataSource<any>;
  
  constructor(private http: HttpClient, private cdr: ChangeDetectorRef){
    
    // this.http.get('http://localhost:8000/apiPlatform/resources?page=1').subscribe(data => {
      
      
    //   this.post = data ; 
    //   this.dataSource = new MatTableDataSource(this.post);
    //   alert(this.getConfig)
    // }, error => console.error(error));

    
    const headers= new HttpHeaders()
      .set('content-type', 'application/json');

    this.http.get<any>('https://projetcube.cv-dev-web.fr/apiPlatform/resources', { 'headers': {'content-type': 'application/json'} }).subscribe(data => {
      this.post = data['hydra:member']; 
      this.dataSource = new MatTableDataSource(this.post);
      this.cdr.detectChanges();
      console.log(data)
      console.log(this.post)
    }, error => console.error(error));
  

  }
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
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