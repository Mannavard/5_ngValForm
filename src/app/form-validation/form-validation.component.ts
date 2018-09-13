import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, AbstractControl, Validators} from '@angular/forms';

function numValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^123/)) {
    return {numValidator: true};
  }
}

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
      'main': ['WTF', numValidator]
    });
    this.main = this.valForm.controls['main'];

    this.main.valueChanges.subscribe((value: string) => {
      console.log('Main input is changed to:', value);
    });

  }
  onSub(value: string): void {
    console.log('You submitted value is:', value);
    console.log(this.valForm);
  }


  ngOnInit() {
  }

}




