import { EmployeeService } from 'src/app/Services/employee.service';
import { SalaryReportService } from './../../Services/salary-report.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empsalary',
  templateUrl: './empsalary.component.html',
  styleUrls: ['./empsalary.component.css']
})
export class EmpsalaryComponent{
  
  salaryReport:any;
  name:string="";
  Fromdate:Date=new Date();
  Todate:Date=new Date();

  

constructor( private salaryReportService:SalaryReportService)
{
}

GetReport()
{
  console.log(this.name);
  this.salaryReport=this.salaryReportService.getReportByDate(this.name,this.Fromdate,this.Todate).subscribe({
    next:(Response)=>{
      this.salaryReport=Response;
    }
  })  
}


}
