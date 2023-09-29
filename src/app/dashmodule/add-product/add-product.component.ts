import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GlobalServiceService } from 'src/app/global-service.service';
import Resizer from "react-image-file-resizer";
import {HttpClient} from '@angular/common/http'
import {Loading,Notify} from 'notiflix';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
   product:FormGroup;
   image=''
   constructor(private _auth:GlobalServiceService,private http:HttpClient) {
    this.product=new FormGroup({
      pname:new FormControl(''),
      pprice:new FormControl(''),
      pcats:new FormControl(''),
      pdesc:new FormControl(''),
      pimage:new FormControl('')
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
   productHandler(){
    Loading.hourglass();
  
     this.product.value.pimage=this.image;
     console.log(this.product.value);
     this._auth.createProduct(this.product.value).subscribe(res=>{
      console.log(res);
      this.product.reset();
      Notify.success("Product added successfully!")
      Loading.remove();
     },err=>{
      Notify.failure(err.message);
      Loading.remove();
     })
   }
}
