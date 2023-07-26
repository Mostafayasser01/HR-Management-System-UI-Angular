import { HolidaysService } from './../../Services/holidays.service';
import { Component,ViewEncapsulation, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//import { CalendarSelectEventArgs } from '@syncfusion/ej2-calendars';




@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css'],

})


export class HolidaysComponent  {
  name:string="";
  OffDayId:any;
  OffDay:any;
 date:Date=new Date(0,0,0);
   

 OffDays:any;
 
   
 
   deleteProductHandler(OffDayId:number){
     this.holidaysService.deleteOffDay(OffDayId).subscribe({
       next:(response)=>{
         this.OffDays=this.OffDays.filter((OffDay:any)=> OffDay.id != OffDayId)
       }
     })
   }


  ngOnInit(args: any): void {
    this.OffDayId=Number(this.activatedroute.snapshot.paramMap.get('id'));
    if(this.OffDayId!=0){
      this.holidaysService.getOffDayById(this.OffDayId).subscribe({
        next:(response)=>{
           this.OffDay=response;
           this.holidayForm.controls['name'].setValue(this.OffDay.name)
           this.date=this.OffDay.date;
          }
      })
    }
  }

  constructor(private router:Router,private activatedroute:ActivatedRoute,private holidaysService:HolidaysService)
  {
    this.OffDays=this.holidaysService.getAllOffDays().subscribe({
      next:(response)=>{this.OffDays=response;},
      error:(myError)=>{}
    })    
  }
  
  holidayForm = new FormGroup({
  name : new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(50)
  ]),
  id:new FormControl(0, []
),
  
});


get getId(){
  return this.holidayForm.controls['id'];
 }
get getName(){
  return this.holidayForm.controls['name'];
 }

 offDayAdd:any={Id:0, Name:this.name , Date:this.date};

 AddOffDays(e:Event){
  e.preventDefault();
  if(this.OffDayId!=0){

    if (this.holidayForm.status == 'VALID') {
      this.offDayAdd.Name=this.name;
      this.offDayAdd.Date=this.date;
      this.offDayAdd.Id=this.OffDayId;
      this.holidaysService.editOffDay(this.OffDayId,this.offDayAdd).subscribe()  
      
    }
      else {
        console.log('Please enter valid data');
      }

      this.OffDays=this.holidaysService.getAllOffDays().subscribe({
        next:(response)=>{this.OffDays=response;},
        error:(myError)=>{}    
  })
     //this.employeeService.addEmployee(this.AddEmp.value).subscribe({}) 
  }

  else{
    if (this.holidayForm.status == 'VALID') {
     
      this.offDayAdd.Name=this.name;
      this.offDayAdd.Date=this.date;
      this.holidaysService.addOffDay(this.offDayAdd).subscribe({

      })
   }
      else {
        console.log('Please enter valid data');
      }
  }
  
  this.OffDays=this.holidaysService.getAllOffDays().subscribe({
    next:(response)=>{this.OffDays=response;},
    error:(myError)=>{}    
})

  
  this.router.navigate(['/Dashboard',{outlets: {content:['holidays']}}]);

}
  

  
onValueChange(args: any):void {
   (<HTMLInputElement>document.getElementById('selected')).textContent 
   = 'Selected Value: ' + args.value.toLocaleDateString();
   this.date=args.value.toLocaleDateString();
   console.log(args.value.toLocaleDateString())
}
 



 }


 
  


