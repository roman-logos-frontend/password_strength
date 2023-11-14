import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";


@Component({
  selector: 'app-password-inputs',
  templateUrl: './password-inputs.component.html',
  styleUrls: ['./password-inputs.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputsComponent),
      multi: true,
    },
  ],
})
export class PasswordInputsComponent implements ControlValueAccessor {
  password: string = '';
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    this.password = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onInputChange() {
    this.onChange(this.password);
    this.onTouched();
  }
}
