import { RegisterService } from './../../Services/register.service';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newadmin',
  templateUrl: './newadmin.component.html',
  styleUrls: ['./newadmin.component.css']
})
export class NewadminComponent implements OnInit {

  Roles:any;

  constructor(private registerService:RegisterService)
  {
    this.Roles=this.registerService.getAllRole().subscribe({
      next:(response)=>{this.Roles=response;}
    })
  }



  adminForm = new FormGroup({

    fullName: new FormControl('', [Validators.required,Validators.pattern("^[a-zA-Z_ ]{3,30}$")]),
    userName : new FormControl('', [Validators.required,Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z0-9]{3,20}@[a-zA-Z]{3,7}\.com")]),
    password: new FormControl('', [Validators.minLength(10),Validators.required]),
    role: new FormControl('', [Validators.required])


  });


  ngOnInit(): void {

  }
    
  get getName(){
    return this.adminForm.controls['fullName'];
  }

  get getUsername(){
    return this.adminForm.controls['userName'];
  }

  get getEmail(){
    return this.adminForm.controls['email'];
  }

  get getpassword(){
    return this.adminForm.controls['password'];
  }

  get getGroup(){
    return this.adminForm.controls['role']
  }

 


addNew(e:Event){
e.preventDefault();
if(this.adminForm.status =="VALID"){
  console.log(this.adminForm.value);
  this.registerService.addAdmin(this.adminForm.value).subscribe({
  })
  this.adminForm.reset();
}else{
  this.adminForm.markAllAsTouched();

}




}


    
  



}
