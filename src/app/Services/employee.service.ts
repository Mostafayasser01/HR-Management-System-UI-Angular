import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseURL:string='http://localhost:5241/api/Employee';
  constructor(private http:HttpClient ) {

   }
   getAllEmployee(){
    return this.http.get(this.baseURL);
  }
  getEmployeeById(EmployeeId:number){
    return this.http.get(`${this.baseURL}/${EmployeeId}`);
  }
  getEmployeeByname(EmployeeName:string){
    return this.http.get(`${this.baseURL}/${EmployeeName}`);
  }

  addEmployee(employee:any){
    return this.http.post(this.baseURL,employee) 
  }
  deleteEmployee(employeeId:number){
    return this.http.delete(`${this.baseURL}?id=${employeeId}`);
  }

  editEmployee(employeeId:number,employee:any){
    return this.http.put(`${this.baseURL}/${employeeId}`,employee);
  }
}
