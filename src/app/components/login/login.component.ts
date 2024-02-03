import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MeetServiceService } from '../common/servics/meet-service.service';
import { DialogLoginComponent } from '../dialog-login/dialog-login.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginform!: FormGroup;
  meetuser: any;
  loginFail: boolean=false;

  constructor( private fb:FormBuilder,
          private meetService:MeetServiceService,
          private router:Router, 
          public dialog: MatDialog) { }
  ngOnInit() {
    this.loginform=this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]

    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogLoginComponent,{ height:'50px',width:'300px',closeOnNavigation: true});

     dialogRef.afterClosed().subscribe(result => {
      //console.log(`Dialog result: ${result}`);
    });
  }

  onSubmit(){

    if(this.loginform.invalid){
      return
    }


    this.meetService.login().subscribe(data =>{
      this.meetuser=data
      let user:any = this.meetuser.find((d:any)=>{
        return d.email === this.loginform.value.username &&d.password === this.loginform.value.password;
  
   });
   if(user){
    //alert('login sucessfully');
    this.openDialog ();
    this.loginform.reset();
    this.router.navigate(['/list']);
   }
   else{
   // alert('username and password is invalid');
    this.loginFail=true;
}


   
    });

    
  }
  
 
 

 
}
