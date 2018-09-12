import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {
  valForm: FormGroup;
  main: AbstractControl;

  constructor(fb: FormBuilder) {
    this.valForm = fb.group({
      'main': ['', Validators.required]
    });
    this.main = this.valForm.controls['main'];

  }
  onSub(value: string): void {
    console.log('You submitted value is:', value);
    console.log(this.valForm);
  }

  ngOnInit() {
  }

}
