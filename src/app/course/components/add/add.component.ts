import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { ToastService } from 'src/app/core/toast.service';
import { AddModuleComponent } from 'src/app/module/dialogs/add-module/add-module.component';
import { CourseModel } from '../../models/course-model';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  public form: FormGroup = new FormGroup({})
  public course: CourseModel = new CourseModel()

  constructor(
    private _formBuilder: FormBuilder,
    private _courseService: CourseService,
    private _snackBar: ToastService,
    private _router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this._buildForm()
  }

  public get c(): {[key: string]: AbstractControl} {
    return this.form.controls
  }

  private _buildForm(): void {
    this.form = this._formBuilder.group({
      title: [
        '',
        [
          Validators.required
        ]
      ],
      objective: [
        '',
      ]
    })
  }

  public onSubmit(){
    this._courseService.add(this.form.value).pipe(
      take(1)
    )
    .pipe(
      take(1)
    ).subscribe({
      next: (response: CourseModel) => {
        this._snackBar.show(
          `Course : ${response.title} was created`
        )
        this._router.navigate(['/', 'course', 'list'])
      },
      error: (badRequest: any) => {
        this._snackBar.cssClass = 'failed'
        if (badRequest.status === 409) {
          
          this._snackBar.show(
            badRequest.error.reason,
            'Got it!'
          )
  
          this.form.controls[badRequest.error.attribute].setValue('')
        } else {
          this._snackBar.show(
            `Something went wrong while processing`,
            'Got it!'
          )
        }

      }
    })
  }

  moduleDialog(){
    this.dialog.open(AddModuleComponent);
  }
}
