import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {

  constructor(private http:HttpClient) { }
  
  userRegister(data:any){
    return this.http.post('https://erp-inventory-server.onrender.com/user/register',data);
  }
  userLogin(data:any){
    return this.http.post('https://erp-inventory-server.onrender.com/user/login',data);
  }
  wUserLogin(data:any){
    return this.http.post('https://erp-inventory-server.onrender.com/user/wlogin',data);
  }
  uploadProduct(file:any){
    console.log(file)
    return this.http.post('https://erp-inventory-server.onrender.com/user/uploadImage',file);
  }
  createProduct(data:any){
    console.log(data,"product");
    return this.http.post('https://erp-inventory-server.onrender.com/user/addProduct',data);
  }
  getProduct(){
    return this.http.get('https://erp-inventory-server.onrender.com/user/getProduct');
  }
}
