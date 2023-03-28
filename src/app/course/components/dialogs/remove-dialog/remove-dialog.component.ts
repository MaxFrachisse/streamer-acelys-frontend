import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    public courseService: CourseService
  ) { }

  ngOnInit(): void {
    console.log(this.data)
  }
  onSubmitDelete() {
    this.courseService.remove(this.data.id).subscribe({
      next: ((Response: HttpResponse<any>) => {
        console.log(`Voici l'id du cours supprimer : ${this.data.id}`)
      })
    })
  }
}
