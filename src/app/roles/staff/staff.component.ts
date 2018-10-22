import { Component, EventEmitter, Output } from '@angular/core';
import { Staff } from '../model/staff.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent {

  firstNameValue = '';
  lastNameValue = '';
  roles = ['Admin', 'Staff', 'Student'];
  @Output() staffCreated = new EventEmitter();

  onStaffCreate(form: NgForm) {
    // const staff: Staff = {
    //   firstName: form.value.firstName,
    //   lastName: form.value.lastName
    // };
    // this.staffCreated.emit(staff);
    const staff = {
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      email: form.value.email,
      userName: form.value.userName,
      role: form.value.role,
      status: 'Active'
    };
    this.staffCreated.emit(staff);
  }
}
