import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Staff } from '../model/staff.model';
import { StaffService } from '../service/staff.service';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit, OnDestroy {

  staffs: Staff[];
  private staffSub: Subscription;

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'userName', 'role', 'status'];

  constructor(public staffService: StaffService) {}

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

  ngOnInit() {
    this.staffs = this.staffService.getStaffs();
    this.staffSub = this.staffService.getStaffUpdateListener()
    .subscribe((staffs: Staff[]) => {
      this.staffs = staffs;
    });
  }

  ngOnDestroy() {
    this.staffSub.unsubscribe();
  }
}
