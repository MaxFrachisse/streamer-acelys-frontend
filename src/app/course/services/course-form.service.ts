import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseModel } from '../models/course-model';
import { CourseService } from './course.service';

@Injectable({
  providedIn: 'root'
})
export class CourseFormService {
  public _form: FormGroup = new FormGroup({})
  public course: CourseModel = new CourseModel()

  constructor(
    private _formBuilder: FormBuilder,
    private _courseService: CourseService
  ) { }

  public buildForm(course: CourseModel): void {
    this.course = course
    this._buildForm()
  }

  get form(): FormGroup {
    return this._form
  }

  public get c(): {[key: string]: AbstractControl} {
    return this._form.controls
  }

  private _buildForm(): void {
    this._form = this._formBuilder.group({
      title: [
        this.course.title,
        [
          Validators.required
        ]
      ],
      objective: [
        '',
      ],
      modules:[
        '',
      ]
    })
  }
}
