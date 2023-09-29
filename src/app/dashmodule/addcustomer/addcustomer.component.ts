import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Loading, Notify } from 'notiflix';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.scss']
})
export class AddcustomerComponent {
  customer:FormGroup;
  image=''
  constructor(private http:HttpClient) {
   this.customer=new FormGroup({
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
  customerHandler(){
   // Loading.hourglass();
 
   //  this.customer.value.pimage=this.image;
   //  console.log(this.customer.value);
   //  this._auth.createcustomer(this.customer.value).subscribe(res=>{
   //   console.log(res);
   //   this.customer.reset();
   //   Notify.success("customer added successfully!")
   //   Loading.remove();
   //  },err=>{
   //   Notify.failure(err.message);
   //   Loading.remove();
   //  })
   Loading.hourglass();
   this.http.post('http://localhost:5000/user/addCustomer',this.customer.value).subscribe((res:any)=>{
    Loading.remove();
    this.customer.reset();
    Notify.success("Customer added..");
   },err=>{
    Loading.remove();
    Notify.failure("something went wrong!");
   })
  }
}
