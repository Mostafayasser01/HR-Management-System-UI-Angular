import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { ToastrService } from 'ngx-toastr/toastr/toastr.service';
import { ToastrService } from 'ngx-toastr';
import { LoginserviceService } from 'src/app/Services/loginservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  vaild:string='';
  constructor(private fb:FormBuilder ,private  service:LoginserviceService ,private router:Router ){} 
  Loginform !:  FormGroup
  ngOnInit(): void {
    this.createform()
  }
  createform(){
    this.Loginform =this.fb.group({
      email:['',[Validators.required,Validators.email]],
      Password:['',[Validators.required,Validators.minLength(3)]]
    })
  }
  get getEmail() {
    return this.Loginform.controls['email'];
  }
  get getPassword() {
    return this.Loginform.controls['Password'];

  }
  login(){
   this.service.login(this.Loginform.value).subscribe((res:any)=>{ 
    // this.toaster.success("success","login success")
    // console.log("res",res);
    // console.log("jsonfile= ",atob(res.token))
    
    localStorage.setItem("token", res.token)
    console.log(JSON.parse(atob(''+localStorage.getItem('token')?.split('.')[1])) )
    this.vaild="";
    // this.router.navigate(['/main(sidebar:sidebar-component)']);
    // this.router.navigate(['/Dashboard']);
    this.router.navigate(['/Dashboard',{outlets: {content:['Employees']}}]);
    
    }, error=>{
      // this.toaster.error("failed","tryagain")
      this.vaild="Email or Password is not Correct"; 
    }
   )
    console.log(this.Loginform.value)
  }
  

  

  LogIn(e:Event){
  e.preventDefault()
  
  }
}
