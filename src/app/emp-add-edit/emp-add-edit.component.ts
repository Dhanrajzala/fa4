
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { EmployeeService } from '../services/employee.service';


@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrl: './emp-add-edit.component.scss'
})
export class EmpAddEditComponent {

  empForm: FormGroup;

  workout: string[] = [
    'Cycling',
    'Weight Traiinig',
    'Pilates',
    'Cardio',
    'Yoga',
    'Cross Fit',
    'Functional Training',
  ];

  constructor(private _fb: FormBuilder, private _empService: EmployeeService, private _dialogRef: MatDialogRef<EmpAddEditComponent>) {
    this.empForm = this._fb.group({
      name: '',
      workouttype: '',
      duration: '',

    })
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      this._empService.addEmployee(this.empForm.value).subscribe({
        next: (val: any) => {
          alert('workout added');
          this._dialogRef.close();
        },
        error: (err: any) => {
          console.log(err);
        }
      })
    }
  }

}
