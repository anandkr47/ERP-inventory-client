import { Component, OnInit } from '@angular/core';
import { GlobalServiceService } from 'src/app/global-service.service';
import {HttpClient} from '@angular/common/http'
import {Loading} from 'notiflix'
@Component({
  selector: 'app-get-product',
  templateUrl: './get-product.component.html',
  styleUrls: ['./get-product.component.scss']
})
export class GetProductComponent implements OnInit {

   data:any=[];
   constructor(private _auth:GlobalServiceService,private http:HttpClient){}
    ngOnInit() {
  Loading.hourglass()
    //  this._auth.getProduct().subscribe((res:any)=>{
      //   this.data=res;
      //  })
     this.http.get('http://localhost:5000/user/getProduct').subscribe(res=>{
        console.log(res,'hello')
      this.data=res
    })
    Loading.remove()
   }
}
