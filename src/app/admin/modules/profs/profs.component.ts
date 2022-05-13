import { Component, OnInit , ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { NewProfDialogComponent } from '../new-prof-dialog/new-prof-dialog.component';
import { EditProfDialogComponent } from '../edit-prof-dialog/edit-prof-dialog.component';


export interface PeriodicElement {
  id:string;
  name?:string;
  code?:string;
  email?:string;
  pass?:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id:'1' , name:'sabreen', code:'5567' , email:'sabreen@gmail',pass:'1223'  },
  {id:'2' , name:'sabreen' },

  
];



@Component({
  selector: 'app-profs',
  templateUrl: './profs.component.html',
  styleUrls: ['./profs.component.css']
})
export class ProfsComponent implements OnInit {

displayedColumns: string[]=['id', 'name'  , 'code'  , 'email' ,'pass' , "action"]
dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

@ViewChild(MatPaginator, { static: true })
paginator!: MatPaginator;

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}


  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(NewProfDialogComponent, { width:'30%'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

 editDialog() {
    const dialogRef = this.dialog.open(EditProfDialogComponent, { width:'30%'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  ngOnInit(): void {

    this.dataSource.paginator = this.paginator;

  }

}
