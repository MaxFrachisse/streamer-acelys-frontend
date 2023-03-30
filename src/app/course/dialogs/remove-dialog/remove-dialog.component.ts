import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/core/toast.service';
import { CourseService } from 'src/app/course/services/course.service';

@Component({
  selector: 'app-remove-dialog',
  templateUrl: './remove-dialog.component.html',
  styleUrls: ['./remove-dialog.component.scss']
})
export class RemoveDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RemoveDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public courseService: CourseService,
    private _router: Router,
    private _snackBar: ToastService,
  ) { }

  ngOnInit(): void {
  }

  onSubmitDelete() {
    this.courseService.remove(this.data.course.id).subscribe({
      next: ((response: HttpResponse<any>) => {
        this._snackBar.show(
          `Course : ${this.data.course.id} was deleted along with ${this.data.course.modules.length} modules`
        )
      })
    })

    this.dialogRef.close(1)
  }
}
