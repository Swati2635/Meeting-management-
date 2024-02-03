import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MeetServiceService } from '../common/servics/meet-service.service';

@Component({
  selector: 'app-meetingdetails',
  templateUrl: './meetingdetails.component.html',
  styleUrls: ['./meetingdetails.component.scss']
})
export class MeetingdetailsComponent implements OnInit {
  detail:any;
  id: any;
  meetDetail: any;
  meetId: any;
 
  constructor(private http:HttpClient,private meetService:MeetServiceService,
  private route: ActivatedRoute) { 
    this.meetDetail = this.route.params.subscribe((params) => {
      this.id= Number(params['id']);
    });
  }

  ngOnInit(){
    this.getDetails();
  }



 getDetails(){
   this.meetService.getmeetById(this.id).subscribe((data)=>{
    this.detail=data;
    console.log(this.detail);
   })
 }
  

}
