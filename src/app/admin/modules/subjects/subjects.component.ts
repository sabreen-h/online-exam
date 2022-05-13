import { Component, OnInit , ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { NewsubjectDialogComponent } from '../newsubject-dialog/newsubject-dialog.component';

export interface PeriodicElement {
  id:string;
  name?:string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id:'1' , name:'vb'},
  {id:'2' , name:'Math' },

  
];


@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  displayedColumns: string[]=['id', 'name' , "action" ]
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(NewsubjectDialogComponent, { width:'30%'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

}
