import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GlobalServiceService } from 'src/app/global-service.service';
import { Loading, Notify } from 'notiflix';
@Component({
  selector: 'app-addsupplier',
  templateUrl: './addsupplier.component.html',
  styleUrls: ['./addsupplier.component.scss']
})
export class AddsupplierComponent {
  suplier:FormGroup;
  image=''
  constructor(private http:HttpClient) {
   this.suplier=new FormGroup({
     cname:new FormControl(''),
     cmob:new FormControl(''),
     cbname:new FormControl(''),
     wnmob:new FormControl(''),
     cbadd:new FormControl('')
   })
  }
  async getFileName(event:any){
   // Loading.hourglass();
   // console.log(event.target.files);
   // let files = event.target.files;
   
   // console.log(files)
   // if (files) {
   //   for (let i = 0; i < files.length; i++) {
   //     Resizer.imageFileResizer(
   //       files[i],
   //       720,
   //       720,
   //       "JPEG",
   //       100,
   //       0,
   //       async (uri) => {
   //         console.log(uri,"hellos")   
   //         // this.image=uri.toString(); 
   //         await this.http.post('http://localhost:5000/user/uploadImage',{image:uri}).subscribe(res=>{
   //           console.log(res);
   //         },err=>{console.log(err)})
   //       },
   //       "base64"
   //     );
   //   }
   // }
   // Loading.remove();
  }
  suplierHandler(){
   // Loading.hourglass();
 
   //  this.suplier.value.pimage=this.image;
   //  console.log(this.suplier.value);
   //  this._auth.createsuplier(this.suplier.value).subscribe(res=>{
   //   console.log(res);
   //   this.suplier.reset();
   //   Notify.success("suplier added successfully!")
   //   Loading.remove();
   //  },err=>{
   //   Notify.failure(err.message);
   //   Loading.remove();
   //  })
   Loading.hourglass();
   this.http.post('http://localhost:5000/user/addsuplier',this.suplier.value).subscribe((res:any)=>{
    Loading.remove();
    this.suplier.reset();
    Notify.success("Supplier added..");
   },err=>{
    Loading.remove();
    Notify.failure("something went wrong!");
   })
  }
}
