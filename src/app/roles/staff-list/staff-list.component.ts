import { Component, Input } from '@angular/core';
import { Staff } from '../model/staff.model';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent {
  @Input() staffs: Staff[];
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'userName', 'role', 'status'];
  constructor() {}

  onChange(staff: Staff) {
    console.log('Status changed, value of status was ', staff.status);
    if (staff.status === 'Active') {
      staff.status = 'Inactive';
      console.log('Inactiving user');
    } else {
      staff.status = 'Active';
      console.log('Activating user');
    }
  }
}
