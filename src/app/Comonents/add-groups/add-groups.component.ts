import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { RoleService } from 'src/app/Services/role.service';

@Component({
  selector: 'app-add-groups',
  templateUrl: './add-groups.component.html',
  styleUrls: ['./add-groups.component.css']
})
export class AddGroupsComponent {
  AddGroup=new FormGroup({

    name:new FormControl('',[Validators.required]),
   Add:new FormControl('',[]),
   Delete:new FormControl('',[]),
   Edit:new FormControl('',[]),
   Show:new FormControl('',[])
  });

  get getgroupName(){
    return this.AddGroup.controls['name'];
   }
  Save(e:Event){
    e.preventDefault();
  }

  name = '';
  selectedPermissions: any[] = [];
  permissions: any[] = [];

  constructor(private roleService: RoleService) {}

  // ngOnInit() {
  //   this.roleService.getPermissions().subscribe((permissions) => {
  //     this.permissions = permissions;
  //   });
  // }

  createRole() {
    // const permissions = this.selectedPermissions.map((permission) => permission.id);
    this.roleService.createRole(this.name).subscribe(() => {
    });
  }
}
