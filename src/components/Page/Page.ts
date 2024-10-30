import {Component, Input} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {LogoIcon} from '../../assets/icons/Logo/Logo/Logo';
import {Router} from '@angular/router';
import {Header} from "../Header/Header";
import {Footer} from '../Footer/Footer';

@Component({
  selector: 'Page',
  standalone: true,
  imports: [RouterOutlet, LogoIcon, Header, Footer],
  templateUrl: './Page.html',
  styleUrls: ['./Page.scss']
})
export class Page {
  @Input() child = null;
  @Input() $page: string = '';
}
