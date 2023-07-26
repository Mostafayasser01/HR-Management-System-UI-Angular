import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './Comonents/add-employee/add-employee.component';
import { AddGroupsComponent } from './Comonents/add-groups/add-groups.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Comonents/login/login.component';
import { SettingComponent } from './Comonents/settings/setting.component';
import { EmpsalaryComponent } from './Comonents/empsalary/empsalary.component';
import { NavbarComponent } from './Comonents/navbar/navbar.component';
import { FooterComponent } from './Comonents/footer/footer.component';
import { SidebarComponent } from './Comonents/sidebar/sidebar.component';
import {HttpClientModule} from '@angular/common/http';
import { EmployeesComponent } from './Comonents/employees/employees.component';
import { DashboardComponent } from './Comonents/dashboard/dashboard.component';
import { NewadminComponent } from './Comonents/newadmin/newadmin.component';
import { HolidaysComponent } from './Comonents/holidays/holidays.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from '@syncfusion/ej2-angular-calendars';
import { AttendanceComponent } from './Comonents/attendance/attendance.component';
import { EditAttendLeaveTimeComponent } from './Comonents/edit-attend-leave-time/edit-attend-leave-time.component';
import { JwtModule } from '@auth0/angular-jwt';




@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    AddGroupsComponent,
    LoginComponent,
    SettingComponent,
    EmpsalaryComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    EmployeesComponent,
    DashboardComponent,
      NewadminComponent,
     HolidaysComponent,
     AttendanceComponent,
     EditAttendLeaveTimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CalendarModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('jwt')
      }
    }),
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
