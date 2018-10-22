import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  enteredValue = 'Admin staff';
  newPost = 'NO CONTENT';
  onCreate() {
    this.newPost = this.enteredValue;
  }
}
