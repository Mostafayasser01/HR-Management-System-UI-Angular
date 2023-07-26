import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
  baseURL:string='http://localhost:5241/api/Account/register';
  baseURL1:string='http://localhost:5241/api/Role';
  
  getAllRole(){
    return this.http.get(this.baseURL1);
  }

  addAdmin(Register:any){
    return this.http.post(this.baseURL,Register) 
  }

}
