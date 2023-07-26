import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  baseURL:string='http://localhost:5241/api/AttendLeave';
  constructor(private http:HttpClient ) {

   }
   getAllAttendance(){
    return this.http.get(this.baseURL);
  }
  getAttendanceById(attendanceId:number){
    return this.http.get(`${this.baseURL}/${attendanceId}`);
  }
  getAttendanceByDate(Name:string,SDate:Date,EDate:Date){
    return this.http.get(`${this.baseURL}/${Name}/${SDate}/${EDate}`);
  }
  getAttendanceByName(Name:string){
    return this.http.get(`${this.baseURL}/empName?empName=${Name}`);
  }
  getAttendById(attendanceId:number){
    return this.http.get(`${this.baseURL}/id?id=${attendanceId}`);
  }
  addAttendance(Attendances:any){
    return this.http.post(`${this.baseURL}?EmpName=${Attendances}` ,{}) 
  }
  deleteAttendance(attendanceId:number){
    return this.http.delete(`${this.baseURL}/${attendanceId}`);
  }

  editAttendance(attendanceId:number,Attendances:any){
    return this.http.put(`${this.baseURL}/${attendanceId}`,Attendances);
  }
  
}
