import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';



@Component({
  selector: 'app-new-prof-dialog',
  templateUrl: './new-prof-dialog.component.html',
  styleUrls: ['./new-prof-dialog.component.css']
})
export class NewProfDialogComponent implements OnInit {
  hide = true;


  email = new FormControl('', [Validators.required, Validators.email]);


  constructor() {}

  


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit(): void {
  }

}
