import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogLoginComponent } from './components/dialog-login/dialog-login.component';
import { GCalenderComponent } from './components/g-calender/g-calender.component';
import { LoginComponent } from './components/login/login.component';
import { MeetingdetailsComponent } from './components/meetingdetails/meetingdetails.component';
import { MeetinglistComponent } from './components/meetinglist/meetinglist.component';
import { RegisterComponent } from './components/register/register.component';
import { ScheduleMeetComponent } from './components/schedule-meet/schedule-meet.component';

const routes: Routes = [
  { path:'', component:MeetinglistComponent},
  { path:'register', component:RegisterComponent},
  { path:'login', component:LoginComponent},
  { path:'schedule/:id', component:ScheduleMeetComponent},
  { path:'list', component:MeetinglistComponent},
  { path:'meetDetails/:id', component:MeetingdetailsComponent},
  { path:'calender', component:GCalenderComponent},
  { path:'dialoglogin', component:DialogLoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
