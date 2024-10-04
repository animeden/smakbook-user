import {Component, Input} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {LogoIcon} from '../../assets/icons/Logo/Logo';
import {Router} from '@angular/router';
import {Header} from "../Header/Header";

@Component({
  selector: 'Footer',
  standalone: true,
  imports: [RouterOutlet, LogoIcon, Header],
  templateUrl: './Footer.html',
  styleUrls: ['./Footer.scss']
})
export class Footer {
}
