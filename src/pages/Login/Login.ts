import {Component} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {WIP} from '../../components/WIP/WIP';
import {Header} from '../../components/Header/Header';
import {Page} from '../../components/Page/Page';
import {LogoIcon} from '../../assets/icons/Logo/Logo/Logo';
import {Logo} from '../../components/Logo/Logo';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {ArrowIcon} from '../../assets/icons/Arrow/Arrow';

@Component({
  selector: 'login',
  standalone: true,
  imports: [RouterOutlet, WIP, Header, Page, LogoIcon, Logo, FormsModule, NgIf, ArrowIcon],
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

  constructor(private router: Router) {
  }

  handleUsernameChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.username = input.value;
  }

  handlePasswordChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.password = input.value;
  }

  handlePasswordRepeatChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.password_repeat = input.value;
  }

  handleEmailChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.email = input.value;
  }

  changeLoginMode() {
    this.login_mode = !this.login_mode;
  }

  changeShowPasswordMode() {
    this.login_mode = !this.login_mode;
  }

  changeShowPasswordRepeatMode() {
    this.login_mode = !this.login_mode;
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
