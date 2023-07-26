import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralSettingsService {

  baseURL:string='http://localhost:5241/api/GeneralSettings';
  constructor(private http:HttpClient ) {

   }
   getAllSetting(){
    return this.http.get(this.baseURL);
  }
  
  getByIdSetting(settingId:number){
    return this.http.get(`${this.baseURL}/${settingId}`);

  }

  addSettings(settings:any){
    return this.http.post(this.baseURL,settings) 
  }
 
  editSettings(settingId:number,settings:any){
    return this.http.put(`${this.baseURL}/${settingId}`,settings);
  }
}
