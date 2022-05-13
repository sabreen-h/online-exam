import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import {MatTableDataSource} from '@angular/material/table';
import { DialogEditComponent } from '../dialog-edit/dialog-edit.component';
import {MatPaginator} from '@angular/material/paginator';


export interface PeriodicElement {
  id:string;
  fname?:string;
  lname?:string;
  code?:string;
  level?:string;
  email?:string;
  pass?:string;
  depart?:string;



}

const ELEMENT_DATA: PeriodicElement[] = [
  {id:'1' , fname:'sabreen', lname:'hassan' ,code:'5567' ,level:'third' , email:'sabreen@gmail',pass:'1223' ,depart:'se' },
  {id:'2' , fname:'sabreen' },

  
];




@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  displayedColumns: string[]=['id', 'fname'  , 'lname' , 'code' , 'level' , 'email' ,'pass' ,'depart' , "action"]
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;


 applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 
  constructor(public dialog: MatDialog) { }

  
   
  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent , { width:'50%'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  editDialog() {
    const dialogRef = this.dialog.open(DialogEditComponent , { width:'50%'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

 

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;

  }

 

}