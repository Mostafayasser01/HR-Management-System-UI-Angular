import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AttendanceService } from 'src/app/Services/attendance.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';



@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent {
empName:string="";
FromDate:any;
ToDate:any;
  AttendanceId:any;
  Attendance:any;
 Attendances:any;
 
   
 convertpdf():void
 {

      const doc = new jsPDF();
    autoTable(doc,{html: '#my-table'});
      doc.save('table.pdf');
    
 }


 
   deleteProductHandler(AttendanceId:number){
     this.attendanceService.deleteAttendance(AttendanceId).subscribe({
       next:(response)=>{
         this.Attendances=this.Attendances.filter((Attendance:any)=> Attendance.id != AttendanceId)
       }
     })
   }


  ngOnInit(args: any): void {
    this.AttendanceId=Number(this.activatedroute.snapshot.paramMap.get('id'));
    console.log(this.AttendanceId);
    if(this.AttendanceId!=0){
      this.attendanceService.getAttendanceById(this.AttendanceId).subscribe({
        next:(response)=>{
           this.Attendance=response;
           
          }
      })
    }
  }

  constructor(private router:Router,private activatedroute:ActivatedRoute,private attendanceService:AttendanceService,private http: HttpClient)
  {
    this.Attendances=this.attendanceService.getAllAttendance().subscribe({
      next:(response)=>{this.Attendances=response;},
      error:(myError)=>{}
    })    
  }
  
  
  AttendAdd:any={EmpName:this.empName };

  onSubmit(){
  // e.preventDefault();
  // if(this.AttendanceId!=0){
  //     this.attendanceService.editAttendance(this.AttendanceId).subscribe()
  // }

  // else{
    // console.log(this.EmpName);
    // this.AttendAdd.EmpName=this.EmpName;
    // console.log(this.AttendAdd);
      this.attendanceService.addAttendance(this.empName).subscribe({
      })   
  // }
  this.Attendances=this.attendanceService.getAllAttendance().subscribe({
    next:(response)=>{this.Attendances=response;},
    error:(myError)=>{}
  }) 
  this.router.navigate(['/Dashboard',{outlets: {content:['attendance']}}]);
}
    
ShowAttend():void
{
if(this.FromDate==null)
{
  this.Attendances=this.attendanceService.getAttendanceByName(this.empName).subscribe({
    next:(response)=>{this.Attendances=response;},
    error:(myError)=>{}
  })
}else
{
  this.Attendances=this.attendanceService.getAttendanceByDate(this.empName,this.FromDate,this.ToDate).subscribe({
    next:(response)=>{this.Attendances=response;},
    error:(myError)=>{}
  })
}
    
  
}

 

}
