import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MeetServiceService {
  url="http://localhost:3000";

  constructor(private http:HttpClient, private router: Router) { }

   register(data:any){
    return this.http.post(this.url+'/registerdUsers', data);

   }

   login(){
    return this.http.get(this.url+'/registerdUsers');
   }

   

  scheduleMeet(data:any ){
    return this.http.post(this.url+'/post', data);

  }

   getMeetList(){

    return this.http.get(this.url+'/post');
   }

   getmeetById(id:any){
    return this.http.get(this.url +'/post/' + id);
   }
   editMeet(id:any){
    return this.http.get(this.url +'/post/' + id);
   }
   updateMeet(id:any, data:any){

     return this.http.put(this.url + '/post/' +  id , data );
   }

   deleteData(id:any){

    return this.http.delete(this.url + '/post/' +  id );
  }
}
