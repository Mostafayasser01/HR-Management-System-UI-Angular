import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalaryReportService {

  baseURL:string="http://localhost:5241/api/SalaryReport";
  constructor(private http:HttpClient) { }
  getReportByDate(Name:string,SDate:Date,EDate:Date){
    return this.http.get(`${this.baseURL}/${Name}/${SDate}/${EDate}`);
  }
  getEmployeeByname(EmployeeName:string){
    return this.http.get(`${this.baseURL}/${EmployeeName}`);
  }
}
