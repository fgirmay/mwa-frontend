import { Staff } from '../model/staff.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class StaffService {
  private staffs: Staff[] = [];
  private staffsUpdated = new Subject<Staff[]>();

  getStaffs() {
    return [...this.staffs];
  }

  createStaff(staff: Staff) {
    this.staffs.push(staff);
    this.staffsUpdated.next([...this.staffs]);
  }

  getStaffUpdateListener() {
    return this.staffsUpdated.asObservable();
  }
}
