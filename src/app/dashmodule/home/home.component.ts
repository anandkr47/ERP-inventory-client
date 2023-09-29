import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {
name:string|null='';
email:string|null='';
mob:string|null='';

addbusiness:FormGroup;

constructor(private router:Router){
   this.addbusiness=new FormGroup({
     bname:new FormControl(''),
     isret:new FormControl(''),
     gst:new FormControl(''),
     badd:new FormControl(''),

   });

}

  bussinessHandler(){
    console.log(this.addbusiness.value);
  }

  ngOnInit(): void {
   this.name=window.localStorage.getItem('name');
   this.email=window.localStorage.getItem('email');
   this.mob=window.localStorage.getItem('mobile');
  }
  
  logoutHandler(){
    window.localStorage.removeItem('name');
    window.localStorage.removeItem('email');
    window.localStorage.removeItem('mobile');
    window.localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
}
