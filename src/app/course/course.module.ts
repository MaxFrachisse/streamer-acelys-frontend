import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ListComponent } from './list/list.component';
import { CourseTileComponent } from './components/course-tile/course-tile.component';
import { ModuleListComponent } from './components/module-list/module-list.component';
import { MediaTileComponent } from './components/media-tile/media-tile.component';
import { ModuleTileComponent } from './components/module-tile/module-tile.component';
import { RemoveDialogComponent } from './components/dialogs/remove-dialog/remove-dialog.component';


@NgModule({
  declarations: [
    ListComponent,
    CourseTileComponent,
    ModuleListComponent,
    MediaTileComponent,
    ModuleTileComponent,
    RemoveDialogComponent
  ],
  imports: [
    SharedModule,
    CourseRoutingModule
  ]
})
export class CourseModule { }
