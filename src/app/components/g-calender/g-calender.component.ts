import { Component, OnInit } from '@angular/core';
import { CalendarOptions, defineFullCalendarElement } from '@fullcalendar/web-component';
import dayGridPlugin from '@fullcalendar/daygrid';
//import timeGridPlugin from '@fullcalendar/timegrid';
//import interactionPlugin from '@fullcalendar/interaction';
//import interactionPlugin from '@fullcalendar/interaction';

defineFullCalendarElement();


@Component({
  selector: 'app-g-calender',
  templateUrl: './g-calender.component.html',
  styleUrls: ['./g-calender.component.scss']
})
export class GCalenderComponent implements OnInit {
  //events: any[];

  constructor( ) { }

  ngOnInit() {
  }

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, ],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek,dayGridDay,timeGridWeek',
    },
    weekends: true ,
    initialView: 'dayGridMonth',
    editable: true,
    dayMaxEvents: true,
    
      

  };

  // toggleWeekends() {
  //   // make a copy while overriding some values
  //   this.calendarOptions = {
  //     ...this.calendarOptions,
  //     weekends: !this.calendarOptions.weekends,
  //   }
  // }
 
 
 // addEvent(): void {
   // this.events = [
   //   ...this.events,
   //  {
     // title: 'New event',
  //       start: startOfDay(new Date()),
  //       end: endOfDay(new Date()),
  //      // color: colors.red,
  //       draggable: true,
  //       resizable: {
  //         beforeStart: true,
  //         afterEnd: true,
  //       },
    // },
   //];
// } 

  
}
// function startOfDay(arg0: Date) {
//   throw new Error('Function not implemented.');
// }

// function endOfDay(arg0: Date) {
//   throw new Error('Function not implemented.');
// }

