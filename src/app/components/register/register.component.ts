import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { MeetServiceService } from '../common/servics/meet-service.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  registerData: any;
  meetuser: any;
  registerfail: boolean=false;
  contactfail: boolean=false;
  //registerForm: any;
  constructor( private fb:FormBuilder,
     private meetService:MeetServiceService,
     private router:Router) { }

  ngOnInit() {
    this.registerForm=this.fb.group({
      fristName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      contact:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required]],
      confirmPassword:['',[Validators.required]]
    })
  }

  submit(){
    if(this.registerForm.invalid){
      return
    }



    this.meetService.login().subscribe(data =>{
      this.meetuser=data
      let user:any = this.meetuser.find((d:any)=>{
        return d.email === this.registerForm.value.email &&d.password === this.registerForm.value.password;
  
   });

   if(user){
    //alert('login sucessfully');
    //this.openDialog ();
    if(user.email===this.registerForm.value.email){
      this.registerfail=true
    }
  
    if(user.contact===this.registerForm.value.contact){
      this.contactfail=true;

    }
   
    //this.registerForm.reset();
    //this.router.navigate(['/list']);
    
   }
   else{
   // alert('username and password is invalid');
    //this.loginFail=true;
    this.meetService.register(this.registerForm.value).subscribe((data:any)=>{
      //this.registerData=data;
      alert('Registerd Succssfully !');
      this.registerForm.reset();
       this.router.navigate(['/login']);
       },err=>{
         alert('something went wrong');
       }
    );
}
});
    
    }
  
  }


