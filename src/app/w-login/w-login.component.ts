import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {Loading,Notify} from 'notiflix';
import { GlobalServiceService } from '../global-service.service';
@Component({
  selector: 'app-w-login',
  templateUrl: './w-login.component.html',
  styleUrls: ['./w-login.component.scss']
})
export class WLoginComponent {
  login:FormGroup;
  showOtp=false;
  constructor(private router:Router, private _auth:GlobalServiceService ){
   this.login=new FormGroup({
     wmob:new FormControl(''),
     otp:new FormControl('')
   })
  }
  otp:any='';
  moblength(){
   
    if(this.login.value.wmob.length===13){
      Loading.hourglass();

      const data={
        mob:this.login.value.wmob
      }
      console.log(data);
      this._auth.wUserLogin(data).subscribe(res=>{
        this.showOtp=true;
          this.otp=res
          Notify.info(`Your otp is ${this.otp.otp}`);
          console.log(this.otp);
          Loading.remove()

      },err=>{
        Loading.remove();
        Notify.failure('Invalid whatsapp number..')
      });

    }
    else{
      this.showOtp=false;
    }
  }

  loginHandler(event:any){
     event.preventDefault();
     Loading.hourglass();
     if(this.login.value.otp===this.otp.otp.toString()){
      
      this.router.navigateByUrl('/user/pages/dashboard')
      Loading.remove();
     }
     else{
      Loading.remove();
     }
  }
}
