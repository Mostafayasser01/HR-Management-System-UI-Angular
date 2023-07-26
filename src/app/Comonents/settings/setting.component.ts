import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralSettingsService } from 'src/app/Services/general-settings.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {
  SettingId:any;
  Settings:any;


  constructor(private router:Router,
    private activatedroute:ActivatedRoute,
    private generalSettingsService:GeneralSettingsService){}



  addSettings=new FormGroup({
    id : new FormControl('', []),
    unitUsed : new FormControl('', [
      Validators.required,
    
    ]),
    bonus : new FormControl('', [
      Validators.required,
    
    ]),
    discound : new FormControl('', [
      Validators.required,
    
    ]),
    offDay1 : new FormControl('', [
      Validators.required,
    
    ]),
    offDay2 : new FormControl('', [
      Validators.required,
    
    ]),
  })
  ngOnInit(): void {
    this.SettingId=Number(this.activatedroute.snapshot.paramMap.get('id'));
  if (this.SettingId!=0) {
    this.generalSettingsService.getByIdSetting(this.SettingId).subscribe({
      next:(response)=>{
         this.Settings=response;
         this.addSettings.controls['unitUsed'].setValue(this.Settings.unitUsed)
         this.addSettings.controls['bonus'].setValue(this.Settings.bonus)
         this.addSettings.controls['discound'].setValue(this.Settings.discound)
         this.addSettings.controls['offDay1'].setValue(this.Settings.offDay1)
         this.addSettings.controls['offDay2'].setValue(this.Settings.offDay2)
        console.log(response)
    }, error:(myError)=>{""}
  })
  
  }
  }

  get GetunitUsed(){
  return this.addSettings.controls['unitUsed'];
  }
  get GetBonus(){
    return this.addSettings.controls['bonus'];
  
    }
  get GetDiscound(){
      return this.addSettings.controls['discound'];
    
      }

   get GetOffDayOne(){
        return this.addSettings.controls['offDay1'];
      
    }
    get GetOffDayTwo(){
      return this.addSettings.controls['offDay2'];
    
  }

  AddSetting(e:Event){
        e.preventDefault();
        this.addSettings.controls['id'].setValue(this.SettingId);
        console.log(this.addSettings.value);
        this.generalSettingsService.editSettings(this.SettingId,this.addSettings.value).subscribe({
      })
    
  }
}
