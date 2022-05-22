import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { RessourcesViewComponent } from '../ressources-view/ressources-view.component';


export interface UserElement {
  name: string;
  position: number;
  email: string;
}

const ELEMENT_DATA: UserElement[] = [
  { position: 1, name: 'John', email: 'john@gmail.com' },
  { position: 2, name: 'Herry', email: 'herry@gmail.com' },
  { position: 3, name: 'Ann', email: 'ann@gmail.com' },
  { position: 4, name: 'Johnny', email: 'johnny@gmail.com' },
  { position: 5, name: 'Roy', email: 'roy@gmail.com' },
  { position: 6, name: 'Kia', email: 'kia@gmail.com' },
  { position: 7, name: 'Merry', email: 'merry@gmail.com' },
  { position: 8, name: 'William', email: 'william@gmail.com' },
  { position: 9, name: 'Shia', email: 'shia@gmail.com' },
  { position: 10, name: 'Kane', email: 'kane@gmail.com' },
];

@Component({
  selector: 'app-ressources-list',
  templateUrl: './ressources-list.component.html',
  styleUrls: ['./ressources-list.component.css']
})
export class RessourcesListComponent{

  displayedColumns: string[] = ['position', 'name', 'email'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
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
