import {Component, SimpleChanges, OnChanges} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {WIP} from '../../components/WIP';
import {Header} from '../../components/Header';
import {Page} from '../../components/Page';
import {LogoIcon} from '../../assets/icons/Logo/Logo';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {ArrowIcon} from '../../assets/icons/Arrow';
import {OpenEyeIcon} from '../../assets/icons/Eyes/Open';
import {CloseEyeIcon} from '../../assets/icons/Eyes/Close';
// @ts-ignore
import Validator from "validatorjs";
import {validation_login_username, validation_login_email} from './validation';
// @ts-ignore
import en from 'validatorjs/src/lang/en';
import {LogoLogin} from '../../components/LogoLogin';

Validator.setMessages('en', en);

@Component({
  selector: 'login',
  standalone: true,
  imports: [RouterOutlet, WIP, Header, Page, LogoIcon, FormsModule, NgIf, ArrowIcon, OpenEyeIcon, CloseEyeIcon, LogoLogin],
  templateUrl: './Login.html',
  styleUrls: ['./Login.scss']
})
export class Login {
  username: string = '';
  password: string = '';
  show_password: boolean = false;
  password_repeat: string = '';
  show_password_repeat: boolean = false;
  email: string = '';
  login_mode: boolean = true;
  validation_error: any = {};

  constructor(private router: Router) {
  }

  handleUsernameChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.username = input.value;
    this.validationCheck();
  }

  handlePasswordChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.password = input.value;
    this.validationCheck();
  }

  handlePasswordRepeatChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.password_repeat = input.value;
    this.validationCheck();
  }

  handleEmailChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.email = input.value;
    this.validationCheck();
  }

  changeLoginMode() {
    this.login_mode = !this.login_mode;
  }

  changeShowPasswordMode() {
    this.show_password = !this.show_password;
  }

  changeShowPasswordRepeatMode() {
    this.show_password_repeat = !this.show_password_repeat;
  }

  goHome() {
    this.router.navigate(['/']);
  }

  validationCheck() {
    const validation = new Validator({email: this.email, username: this.username},
      {
        ...(this.email.length > 0 && {...validation_login_email}),
      ...(this.username.length > 0 && {...validation_login_username})
      });
    validation.check();
    this.validation_error = validation.errors;
    if (this.password != this.password_repeat && this.password.length > 0 && this.password_repeat.length > 0) {
      validation.errors.add("password", "asd");
    }
  }
}
