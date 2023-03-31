import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CourseListType } from '../../types/course-list-type';
import { RemoveDialogComponent } from '../../dialogs/remove-dialog/remove-dialog.component';
import { Router } from '@angular/router';
import { UpdateComponent } from '../../dialogs/update/update.component';

@Component({
  selector: 'app-course-tile',
  templateUrl: './course-tile.component.html',
  styleUrls: ['./course-tile.component.scss']
})
export class CourseTileComponent implements OnInit {
  @Input() public course!: CourseListType
  @Output() public onToggleCourse: EventEmitter<CourseListType> = new EventEmitter()

  constructor(
    public dialog: MatDialog,
    public router: Router
    ) { }

  ngOnInit(): void {
  }
  

  openRemoveDialog() {
    const dialogRef = this.dialog.open(RemoveDialogComponent, {
      data: {
        course: this.course
      }
    });

    // Recharge la page après la suppression d'un cours
    dialogRef.afterClosed().subscribe(result => {
      
      //window.location.reload()
    }); 
  }

  public revealOrHide(course: CourseListType): void {
    course.isSelected = !course.isSelected
    console.log(`Course was toggled : ${course.isSelected}`)
    this.onToggleCourse.emit(course)
  }

  openUpdateDialog(){
    const dialogRef = this.dialog.open(UpdateComponent, {
      data: {
        course: this.course
      }
    });
  }

}
