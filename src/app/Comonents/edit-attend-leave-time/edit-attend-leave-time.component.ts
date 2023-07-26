import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AttendanceService } from 'src/app/Services/attendance.service';

@Component({
  selector: 'app-edit-attend-leave-time',
  templateUrl: './edit-attend-leave-time.component.html',
  styleUrls: ['./edit-attend-leave-time.component.css']
})
export class EditAttendLeaveTimeComponent {
  AttendId:any;
  Attendance:any;
  
   
  ngOnInit(): void {
    this.AttendId=Number(this.activatedroute.snapshot.paramMap.get('id'));
    if(this.AttendId!=0){
      this.AttendanceService.getAttendById(this.AttendId).subscribe({
        next:(response)=>{
           this.Attendance=response;
           this.Attendance.date = new Date(this.Attendance.date);
           this.EditAttendance.controls['date'].setValue(this.Attendance.date.toISOString().substring(0, 10))
           this.EditAttendance.controls['attendTime'].setValue(this.Attendance.attendTime)
           this.EditAttendance.controls['leaveTime'].setValue(this.Attendance.leaveTime)
           

          }
      })

    }
  }



  constructor(private router:Router,private activatedroute:ActivatedRoute,private AttendanceService:AttendanceService){}
  
  EditAttendance = new FormGroup({
  
  
  date:new FormControl(new Date('01/01/2008'), [
      Validators.required,
    ]
  ),
  
  emp_id:new FormControl(0, [
    

  ]
),
id:new FormControl(0, [
    

]
),
  attendTime:new FormControl(new Date(0,0,0), [
    Validators.required,
  ]),
  leaveTime:new FormControl(new Date(0,0,0), [
    Validators.required,
  ]),
  
});



get getHireDate(){
  return this.EditAttendance.controls['date'];
 }
 get getAttend(){
  return this.EditAttendance.controls['attendTime'];
 }
 get getLeave(){
  return this.EditAttendance.controls['leaveTime'];
 }
 


 EditAttend(e:Event){
  e.preventDefault();
  
    if (this.EditAttendance.status == 'VALID') {
      this.EditAttendance.controls['id'].setValue(this.AttendId);
      this.EditAttendance.controls['emp_id'].setValue(this.Attendance.emp_id);
      this.AttendanceService.editAttendance(this.AttendId,this.EditAttendance.value).subscribe()  
      
    }
      else {
        console.log('Please enter valid data');
      }
      this.router.navigate(['/Dashboard',{outlets: {content:['attendance']}}]);

  }
  


}
