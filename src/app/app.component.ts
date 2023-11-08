import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'job';

  public StrongPasswordRegx: RegExp = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\.!@#\$%^&\*\(\)_\=\+-])[0-9a-zA-Z\.!@#\$%^&\*\(\)_\=\+-]{8,}$/;
  public passForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.initAuthForm()
  }

  initAuthForm():void{
    this.passForm = this.fb.group({
      password: new FormControl('',
        [Validators.required,
                      Validators.minLength(8),
                      Validators.pattern(this.StrongPasswordRegx),
        ])
    })
  }

  get password() {
    return this.passForm.get("password") as FormControl;
  };



  }
