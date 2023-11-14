import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {PasswordServiceService} from "./shared/services/password-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'job';
  public form:FormGroup;
  public passwordStrengthColors: string[] = [];
  constructor(
    private fb: FormBuilder,
    private PasswordServiceService: PasswordServiceService,
  ) {
    this.form = this.fb.group({
      password: [''],
    });

    this.form.get('password')?.valueChanges.subscribe((password) => {
      this.passwordStrengthColors = this.PasswordServiceService.getPasswordStrength(password);
    });
  }
}
