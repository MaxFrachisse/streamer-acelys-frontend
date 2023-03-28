import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Module } from '../../models/module.model';

@Component({
  selector: 'app-add-module',
  templateUrl: './add-module.component.html',
  styleUrls: ['./add-module.component.scss']
})
export class AddModuleComponent implements OnInit {
  public form: FormGroup = new FormGroup({})

  constructor(
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddModuleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Module,
  ) { }

  ngOnInit(): void {
    this._buildForm()
  }

  public get c(): {[key: string]: AbstractControl} {
    return this.form.controls
  }

  private _buildForm(): void {
    this.form = this._formBuilder.group({
      name: [
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

  onSubmit(){
    var module = new Module()
    module.name = this.form.value.name
    module.objective = this.form.value.objective
    this.dialogRef.close(module)
  }

}
