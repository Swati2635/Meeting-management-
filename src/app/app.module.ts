import { NgModule,  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';

import { MaterialModule } from './material module/material.module';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScheduleMeetComponent } from './components/schedule-meet/schedule-meet.component';
import { MeetinglistComponent } from './components/meetinglist/meetinglist.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
//import { MatNativeDateModule } from '@angular/material/core';
import { MeetingdetailsComponent } from './components/meetingdetails/meetingdetails.component';
import { GCalenderComponent } from './components/g-calender/g-calender.component';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { DialogLoginComponent } from './components/dialog-login/dialog-login.component';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ScheduleMeetComponent,
    MeetinglistComponent,
    MeetingdetailsComponent,
    GCalenderComponent,
    DialogLoginComponent,
   
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    MatNativeDateModule, 
    HttpClientModule,
    MatIconModule
   
    
    
  

 
    
    
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
