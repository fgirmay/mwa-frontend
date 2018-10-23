import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
} from '@angular/material';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { AdminComponent } from './roles/admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './auth/login/login.component';
import { StaffListComponent } from './roles/staff-list/staff-list.component';
import { StaffComponent } from './roles/staff/staff.component';

const appRoutes: Routes = [
  { path: 'staffs', component: StaffComponent },
  { path: '', pathMatch: 'prefix', redirectTo: 'staffs'},
  { path: 'question', component: AdminComponent },
  { path: 'grade', component: StaffListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HeaderComponent,
    LoginComponent,
    StaffListComponent,
    StaffComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatTableModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTabsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
