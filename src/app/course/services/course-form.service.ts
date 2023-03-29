import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseService } from './course.service';

@Injectable({
  providedIn: 'root'
})
export class CourseFormService {
  public _form: FormGroup = new FormGroup({})

  constructor(
    private _formBuilder: FormBuilder,
    private _courseService: CourseService
  ) { }

  public get c(): {[key: string]: AbstractControl} {
    return this._form.controls
  }

  private _buildForm(): void {
    this._form = this._formBuilder.group({
      title: [
        '',
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
