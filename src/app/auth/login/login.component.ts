import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {Loading,Notify} from 'notiflix'
import { GlobalServiceService } from 'src/app/global-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
   login:FormGroup;
   constructor(private router:Router,private _auth:GlobalServiceService){
    this.login=new FormGroup({
      email:new FormControl(''),
      password:new FormControl('')
    })
   }

   loginHandler(event:any){
      event.preventDefault();
      Loading.hourglass();
      this._auth.userLogin(this.login.value).subscribe((res:any)=>{
        console.log(res);
        window.localStorage.setItem('name',res?.name);
        window.localStorage.setItem('email',res?.email)
        window.localStorage.setItem('mobile',res?.mobile)
        window.localStorage.setItem('token',res?.accessToken)

        Notify.success('Login Successfull')
        this.router.navigate(['/user/pages/dashboard'])
        Loading.remove()
        setTimeout(() => {
          window.location.reload()
        }, 500);
      },err=>{
        Loading.remove()
        Notify.failure("Something went wrong!")
      })
   }
}
