import {Component, Input} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {LogoIcon} from '../../assets/icons/Logo/Logo/Logo';
import {Router} from '@angular/router';
import {Header} from "../Header/Header";
import {Logo} from '../Logo/Logo';

@Component({
  selector: 'Footer',
  standalone: true,
  imports: [RouterOutlet, LogoIcon, Header, Logo],
  templateUrl: './Footer.html',
  styleUrls: ['./Footer.scss']
})
export class Footer {
}
