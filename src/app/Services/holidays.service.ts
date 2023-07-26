import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HolidaysService {

  baseURL:string='http://localhost:5241/api/OffDays';
  constructor(private http:HttpClient ) {

   }
   getAllOffDays(){
    return this.http.get(this.baseURL);
  }
  getOffDayById(OffDayId:number){
    return this.http.get(`${this.baseURL}/${OffDayId}`);
  }

  addOffDay(OffDays:any){
    return this.http.post(this.baseURL,OffDays) 
  }
  deleteOffDay(OffDayId:number){
    return this.http.delete(`${this.baseURL}/${OffDayId}`);
  }

  editOffDay(OffDayId:number,OffDays:any){
    return this.http.put(`${this.baseURL}/${OffDayId}`,OffDays);
  }
  
}
