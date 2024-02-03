import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MeetServiceService } from '../common/servics/meet-service.service';

@Component({
  selector: 'app-schedule-meet',
  templateUrl: './schedule-meet.component.html',
  styleUrls: ['./schedule-meet.component.scss']
})
export class ScheduleMeetComponent implements OnInit {
  meetData:any
  meetSchedule!:FormGroup 
  id: any;
  meetDetail: any;
  meetD: any;

  attendees:any=[
     {value: 'Kaustubh patil', viewValue:'Kaustubh patil'},
     {value: 'Yogesh Sonwane', viewValue:'Yogesh Sonwane'},
     {value: 'swati Desale', viewValue:'swati Desale'},
     {value: 'Divya Patil', viewValue:'Divya Patil'},
     {value: 'Madhuri Patil', viewValue:'Madhuri Patil'},
     {value: 'swati Sonwane', viewValue:'swati Sonwane'},
     ];
  constructor(private fb:FormBuilder,
              private router:Router,
              private meetService: MeetServiceService,
              private route: ActivatedRoute) {
                this.meetDetail = this.route.params.subscribe((params) => {
                   this.id= Number(params['id']);
                  //this.id = params['id'] ? +params['id'] : 0;
                });
                
                // if (this.meetService.editMeet(this.id)) {
                //   if(this.id > 0)
                //   this.router.navigate(['/schedule/' + this.id]);
                // } else {
                //   this.router.navigate(['/schedule/' + 0]);

                // }
               }

  ngOnInit() {
    if (this.id > 0) {
      this.getData();
      console.log("id works");
    }
    else{ }
    this.meetSchedule=this.fb.group({
      subject:['',[Validators.required]],
      location:['',[Validators.required]],
      agenda:['',[Validators.required]],
      date:['',[Validators.required]],
      time:['',[Validators.required]],
      attendee:['',[Validators.required]],
      id: this.id
      
    })
  }
   get f(){  return this.meetSchedule.controls;}

    getData(){

 console.log('getdata works');
      this.meetService.editMeet(this.id).subscribe((data)=>{
        this.meetD=data;
         this.meetSchedule.patchValue({

          subject: this.meetD.subject,
          location:this.meetD.location,
          agenda:this.meetD.agenda,
          date:this.meetD.date,
          time:this.meetD.time,
          attendee:this.meetD.attendee

         })
       // console.log(this.meetD);
      })
      
    }
  ngOnSubmit(){
    if (this.meetSchedule.invalid) {
      
      return;
      }
      if(this.id>0){
        this.meetService.updateMeet(this.id , this.meetSchedule.value).subscribe((res)=>{

          this.meetData=res;
          console.log(this.meetData);
          this.router.navigate(['/list']);
        })
      }
else{
      this.meetService.scheduleMeet(this.meetSchedule.value).subscribe((res)=>{
        this.meetData=res;
        //console.log(this.meetData);
        this.router.navigate(['/list']);
      })
    }
   
   //this.router.navigate(['/list']);
  }

}
