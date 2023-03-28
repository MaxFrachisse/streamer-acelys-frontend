import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AddModuleComponent } from './dialogs/add-module/add-module.component';



@NgModule({
  declarations: [
    AddModuleComponent
  ],
  imports: [
    SharedModule,
  ]
})
export class ModuleModule { }
