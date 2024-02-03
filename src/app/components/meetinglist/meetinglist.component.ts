import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { Route, Router } from '@angular/router';
import { MeetServiceService } from '../common/servics/meet-service.service';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

@Component({
  selector: 'app-meetinglist',
  templateUrl: './meetinglist.component.html',
  styleUrls: ['./meetinglist.component.scss']
})
export class MeetinglistComponent implements OnInit {
  
  
//apiUrl='https://jsonplaceholder.typicode.com/posts';

id:any;
meetData:any;
  dataSource: any;
 // position:any

 
 

  constructor(private http:HttpClient,
    private meetService:MeetServiceService,
     private router: Router ) { }


   positionOptions: TooltipPosition[] = ['left']; // Tooltip postion
 // tslint:disable-next-line:typedef
 position = new FormControl(this.positionOptions[0]); 

  ngOnInit() {
   this.showMeetList();
    
  } 
   

  // meetList(){

  // }
  

     displayedColumns: string[] = ['Id', 'Subject', 'View', 'Edit', 'Delete'];
    // dataSource = this.meetData;
    showMeetList(){
      this.meetService.getMeetList().subscribe((data)=>{
        this.dataSource = data;
        console.log(this.dataSource);
        this.id=this.dataSource.id;
      })
    }

       
    viewDetail(id:any){
      //console.log(id);
      this.router.navigate(['/meetDetails' + "/" + id]);

    }

    editMeet(id:any){
      //console.log(id);
      this.router.navigate(['/schedule'+'/'+ id]);
    }

    deleteData(id:any){
      this.meetService.deleteData(id).subscribe((data)=>{
        console.log(data);
        location.reload();
      })
    }
    schedule(){
      this.router.navigate(['/schedule'+'/'+ 0]);
    }


    logOut(){

this.router.navigate(['/login']);
    }


}
