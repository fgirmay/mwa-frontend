import { Component, Input, OnInit, OnChanges, DoCheck, ChangeDetectorRef} from '@angular/core';
import { Staff } from '../model/staff.model';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit, OnChanges, DoCheck {
  @Input() staffs = [];
  prevLength;
  displayedColumns: string[] = ['firstName', 'lastName'];
  // dataSource = this.staffs;
  constructor(public cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.prevLength = this.staffs.length;
  }

  ngOnChanges() {
    console.log('Inside StaffListComponet, ngOnChanges');
  }

  ngDoCheck() {
    if (this.staffs.length !== this.prevLength) {
      this.cd.markForCheck();
      this.prevLength = this.staffs.length;
    }
  }
}
