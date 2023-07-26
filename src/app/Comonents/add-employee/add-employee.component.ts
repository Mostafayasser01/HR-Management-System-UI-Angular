import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { timestamp } from 'rxjs';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  
  EmployeeId:any;
  Employee:any;
 
   
  ngOnInit(): void {
    this.EmployeeId=Number(this.activatedroute.snapshot.paramMap.get('id'));
    if(this.EmployeeId!=0){
      this.employeeService.getEmployeeById(this.EmployeeId).subscribe({
        next:(response)=>{
           this.Employee=response;
           this.AddEmp.controls['name'].setValue(this.Employee.name)
           this.AddEmp.controls['city'].setValue(this.Employee.city)
           this.AddEmp.controls['street'].setValue(this.Employee.street)
           this.AddEmp.controls['country'].setValue(this.Employee.country)
           this.AddEmp.controls['phone'].setValue(this.Employee.phone)
           this.AddEmp.controls['gender'].setValue(this.Employee.gender)
           this.AddEmp.controls['nationality'].setValue(this.Employee.nationality)
           this.AddEmp.controls['ssn'].setValue(this.Employee.ssn)
           this.AddEmp.controls['salary'].setValue(this.Employee.salary)
           this.Employee.hireDate = new Date(this.Employee.hireDate);
           this.AddEmp.controls['hireDate'].setValue(this.Employee.hireDate.toISOString().substring(0, 10))
           this.Employee.birthDate = new Date(this.Employee.birthDate);
           this.AddEmp.controls['birthDate'].setValue(this.Employee.birthDate.toISOString().substring(0, 10))
           this.AddEmp.controls['attendTime'].setValue(this.Employee.attendTime)
           this.AddEmp.controls['leaveTime'].setValue(this.Employee.leaveTime)
           this.AddEmp.controls['dept_id'].setValue(this.Employee.dept_id)
          //  this.AddEmp.controls['admin_id'].setValue(this.Employee.admin_id)
          }
      })

    }
  }



  constructor(private router:Router,private activatedroute:ActivatedRoute,private employeeService:EmployeeService){}
  validateDateRange(minDate: Date, maxDate: Date) {
    return (control: AbstractControl): ValidationErrors | null => {
      const dateValue = new Date(control.value);

      if (dateValue < minDate || dateValue > maxDate) {
        return { dateOutOfRange: true };
      }
  
      return null;
    };
  }
AddEmp = new FormGroup({
  name : new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(50)
  ]),
  city:new FormControl('', [
      Validators.required,
    ]
  ),
  street:new FormControl('', [
    Validators.required,
  ]
),
country:new FormControl('', [
  Validators.required,
]
),
  phone:new FormControl('', [
      Validators.required,
      //Validators.pattern("01[1235][0-9]{8}"),
    ]
  ),
  gender:new FormControl('', [
    Validators.required,
  ]),
  nationality:new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]),
  birthDate:new FormControl(new Date('01/01/1959'), [
      Validators.required,
      this.validateDateRange(new Date('01/01/1959'), new Date('01/01/2003'))


    ]
  ),
  ssn:new FormControl('',[
    Validators.required,
    Validators.pattern("[0-9]{14}"),

  ]
  ),
  hireDate:new FormControl(new Date('01/01/2008'), [
      Validators.required,
      this.validateDateRange(new Date('01/01/2008'), new Date('01/01/2023'))



    ]
  ),
  salary:new FormControl(0, [
      Validators.required,
      Validators.min(1000)

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
  // admin_id:new FormControl(0, [
  //   Validators.required,
  // ]),
  dept_id:new FormControl(0, [
    Validators.required,
  ]),
});


get getId(){
  return this.AddEmp.controls['id'];
 }
get getName(){
  return this.AddEmp.controls['name'];
 }
get getCity(){
  return this.AddEmp.controls['city'];
 }
 get getStreet(){
  return this.AddEmp.controls['street'];
 }
 get getCountry(){
  return this.AddEmp.controls['country'];
 }
get getPhone(){
  return this.AddEmp.controls['phone'];
 }
get getGender(){
  return this.AddEmp.controls['gender'];
 }
get getNationality(){
  return this.AddEmp.controls['nationality'];
 }
get getNationalId(){
  return this.AddEmp.controls['ssn'];
 }
get getSalary(){
  return this.AddEmp.controls['salary'];
 }
get getHireDate(){
  return this.AddEmp.controls['hireDate'];
 }
 get getAttend(){
  return this.AddEmp.controls['attendTime'];
 }
 get getLeave(){
  return this.AddEmp.controls['leaveTime'];
 }
 get getBirthDate(){
  return this.AddEmp.controls['birthDate'];
 }
//  get getAdmin(){
//   return this.AddEmp.controls['admin_id'];
//  }
 get getDepartment(){
  return this.AddEmp.controls['dept_id'];
 }


 AddEmployee(e:Event){
   console.log(this.EmployeeId);
  e.preventDefault();
  if(this.EmployeeId==0){
    // if (this.AddEmp.status == 'VALID') {
    //   this.employeeService.addEmployee(this.AddEmp.value).subscribe({

    //   })
    // }
      // else {
      //   console.log('Please enter valid data');
      // }
    
     this.employeeService.addEmployee(this.AddEmp.value).subscribe({}) 
  }

  else{
    if (this.AddEmp.status == 'VALID') {
      this.AddEmp.controls['id'].setValue(this.EmployeeId);
      this.employeeService.editEmployee(this.EmployeeId,this.AddEmp.value).subscribe()  
      
    }
      else {
        console.log('Please enter valid data');
      }
  }
  
  this.router.navigate(['/Dashboard',{outlets: {content:['Employees']}}]);
}

//  AddEmployee(e:Event){
//   e.preventDefault()
//     if (this.AddEmp.status == 'VALID') {
//       this.employeeService.addEmployee(this.AddEmp.value).subscribe({

//       })
//       console.log(this.AddEmp.value);

//     } else {
//       console.log('Please enter valid data');
//     }
// }

}
