import { Component } from '@angular/core';

import { Staff } from './roles/model/staff.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedStaffs: Staff[] = [];

  // storedStaffs = [
  //   {
  //     firstName: 'sFirst1',
  //     lastName: 'sLast1'
  //   },
  //   {
  //     firstName: 'sFirst2',
  //     lastName: 'sLast2'
  //   }];

  onStaffCreated(staff: Staff) {
    this.storedStaffs = this.storedStaffs.slice();
    this.storedStaffs.push(staff);
    console.log('AppComponent, first name is : ', staff.firstName);
    console.log('AppComponent, first name is : ', staff.lastName);
    console.log('The size of storedStaffs is ', this.storedStaffs.length);
  }
}
