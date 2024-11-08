import {Component, Input} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {LogoIcon} from '../../assets/icons/Logo/Logo';
import {Header} from "../Header";
import {Footer} from '../Footer';

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
