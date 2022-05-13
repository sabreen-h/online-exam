import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

export interface PeriodicElement {
  id:string;
  examName?:string;
  subject?:string;
  qCount?:string;
  grad?:string;
  duration?:string;
  sDate?:string;
  eDate?:string;



}

const ELEMENT_DATA: PeriodicElement[] = [
  {id:'1' ,  examName:'midterm', subject:'VB' , qCount:'15' ,grad:'30' , duration:'15',sDate:'12/12/2022  9am' , eDate:'15/12/2022   9am' },
  {id:'2' ,  examName:'midterm' },

  
];



@Component({
  selector: 'app-student-exams',
  templateUrl: './student-exams.component.html',
  styleUrls: ['./student-exams.component.css']
})
export class StudentExamsComponent implements OnInit {
  isOpen:boolean=false;

  displayedColumns: string[]=['id', ' examName'  , 'subject' , ' qCount' , 'grad' , 'duration' ,'sDate' ,'eDate' , "action"]
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;


  

  constructor() { }

  ngOnInit(): void {

    this.dataSource.paginator = this.paginator;


  }

  
  toggleNav(){
    this.isOpen= !this.isOpen
  }

}
