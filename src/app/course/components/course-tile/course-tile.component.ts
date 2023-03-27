import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CourseListType } from '../../types/course-list-type';
import { RemoveDialogComponent } from '../dialogs/remove-dialog/remove-dialog.component';

@Component({
  selector: 'app-course-tile',
  templateUrl: './course-tile.component.html',
  styleUrls: ['./course-tile.component.scss']
})
export class CourseTileComponent implements OnInit {
  @Input() public course!: CourseListType
  @Output() public onToggleCourse: EventEmitter<CourseListType> = new EventEmitter()

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(RemoveDialogComponent, {
      data: {
        id: this.course.id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  public revealOrHide(course: CourseListType): void {
    course.isSelected = !course.isSelected
    console.log(`Course was toggled : ${course.isSelected}`)
    this.onToggleCourse.emit(course)
  }
}
