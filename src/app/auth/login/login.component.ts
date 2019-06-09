import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// custom objects


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  fg_login: FormGroup;

  constructor() { }

  private setForm(): void {
    this.fg_login = new FormGroup({
      'fc_email': new FormControl('', [
        Validators.email,
      ]),
      'fc_password': new FormControl(''),
    });
  }

  onLoginViaFacebook() {

  }

  onLoginViaInstagram() {

  }

  onLoginViaGoogle() {

  }

  onLoginViaEmail() {

  }

  ngOnInit() {
    this.setForm();
  }

}