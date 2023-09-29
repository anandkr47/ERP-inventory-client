import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GlobalServiceService } from 'src/app/global-service.service';
import Resizer from "react-image-file-resizer";
import {HttpClient} from '@angular/common/http'
import {Loading,Notify} from 'notiflix';
@Component({
  selector: 'app-add-services',
  templateUrl: './add-services.component.html',
  styleUrls: ['./add-services.component.scss']
})
export class AddServicesComponent {
   service:FormGroup;
   image=''
   constructor(private _auth:GlobalServiceService,private http:HttpClient) {
    this.service=new FormGroup({
      sname:new FormControl(''),
      pprice:new FormControl(''),
      scats:new FormControl(''),
      sprice:new FormControl(''),
      stax:new FormControl('')
    })
   }
   async getFileName(event:any){
    Loading.hourglass();
    console.log(event.target.files);
    let files = event.target.files;
    
    console.log(files)
    if (files) {
      for (let i = 0; i < files.length; i++) {
        Resizer.imageFileResizer(
          files[i],
          720,
          720,
          "JPEG",
          100,
          0,
          async (uri) => {
            console.log(uri,"hellos")   
            // this.image=uri.toString(); 
            await this.http.post('http://localhost:5000/user/uploadImage',{image:uri}).subscribe(res=>{
              console.log(res);
            },err=>{console.log(err)})
          },
          "base64"
        );
      }
    }
    Loading.remove();
   }
   serviceHandler(){
    // Loading.hourglass();
  
    //  this.service.value.pimage=this.image;
    //  console.log(this.service.value);
    //  this._auth.createservice(this.service.value).subscribe(res=>{
    //   console.log(res);
    //   this.service.reset();
    //   Notify.success("service added successfully!")
    //   Loading.remove();
    //  },err=>{
    //   Notify.failure(err.message);
    //   Loading.remove();
    //  })
    Loading.hourglass();
    this.http.post('http://localhost:5000/user/addService',this.service.value).subscribe((res:any)=>{
      console.log(res);
      this.service.reset();
      Notify.success('Service added..');
      Loading.remove()
    },err=>{
     Loading.remove();
      console.log(err);
      
      Notify.failure("something went wrong..")
    })
   }
}
