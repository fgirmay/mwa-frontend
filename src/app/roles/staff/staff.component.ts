import { Component } from '@angular/core';
import { Staff } from '../model/staff.model';
import { NgForm } from '@angular/forms';
import { StaffService } from '../service/staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent {

  firstNameValue = '';
  lastNameValue = '';
  roles = ['Admin', 'Staff', 'Student'];

  onStaffCreate(form: NgForm) {
    const staff: Staff = {
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      email: form.value.email,
      userName: form.value.userName,
      role: form.value.role,
      status: 'Active'
    };
    this.staffService.createStaff(staff);

    console.log('Adding staff');
  }

  constructor(public staffService: StaffService) {}
}
