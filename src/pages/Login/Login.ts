import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {WIP} from '../../components/WIP/WIP';
import {Header} from '../../components/Header/Header';
import {Page} from '../../components/Page/Page';

@Component({
  selector: 'login',
  standalone: true,
  imports: [RouterOutlet, WIP, Header, Page],
  templateUrl: './Login.html',
  styleUrls: ['./Login.scss']
})
export class Login {
}
