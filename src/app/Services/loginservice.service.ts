import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { login } from '../Comonents/Context/DTOs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  base:string ='account';
  jwt:string='token'

  constructor(private http:HttpClient) { }
  login(model:login){
    return  this.http.post('http://localhost:5241/api/account/login' ,model)
  }
}
