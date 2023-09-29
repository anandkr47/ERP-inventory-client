import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalServiceService } from 'src/app/global-service.service';
import {Notify,Loading} from 'notiflix'
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    register:FormGroup;
    constructor(private _auth:GlobalServiceService,private router:Router){
      this.register=new FormGroup({
        name:new FormControl('',[Validators.required]),
        email:new FormControl('',[Validators.required]),
        mob:new FormControl('',[Validators.required]),
        password:new FormControl('',[Validators.required])
      })
    }

    registerHandler(event:any){
        event.preventDefault();
        Loading.hourglass();
       this._auth.userRegister(this.register.value).subscribe(res=>{
        Notify.success("Registered successfully.")
        this.router.navigateByUrl('/login')
        console.log(res);
        Loading.remove();
       },err=>{
        Loading.remove();
        Notify.failure(err.message);
        
       })
    }
}
