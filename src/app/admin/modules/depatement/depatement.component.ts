import { Component, OnInit  , ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
 import {DialogDepartComponent } from '../dialog-depart/dialog-depart.component';



export interface PeriodicElement {
  id:string;
  name?:string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id:'1' , name:'SE'},
  {id:'2' , name:'CS' },

  
];



@Component({
  selector: 'app-depatement',
  templateUrl: './depatement.component.html',
  styleUrls: ['./depatement.component.css']
})
export class DepatementComponent implements OnInit {

  displayedColumns: string[]=['id', 'name' , "action" ]
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(DialogDepartComponent, { width:'30%'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

}
