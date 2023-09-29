import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {

  constructor(private http:HttpClient) { }
  
  userRegister(data:any){
    return this.http.post('http://localhost:5000/user/register',data);
  }
  userLogin(data:any){
    return this.http.post('http://localhost:5000/user/login',data);
  }
  wUserLogin(data:any){
    return this.http.post('http://localhost:5000/user/wlogin',data);
  }
  uploadProduct(file:any){
    console.log(file)
    return this.http.post('http://localhost:5000/user/uploadImage',file);
  }
  createProduct(data:any){
    console.log(data,"product");
    return this.http.post('http://localhost:5000/user/addProduct',data);
  }
  getProduct(){
    return this.http.get('http://localhost:5000/user/getProduct');
  }
}
