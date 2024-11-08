import {Component, Input, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {LogoIcon} from '../../assets/icons/Logo/Logo/Logo';
import {Router} from '@angular/router';
import {Header} from "../Header/Header";
import {Logo} from '../Logo/Logo';
import {ThemeService} from '../../app/theme.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'Footer',
  standalone: true,
  imports: [RouterOutlet, LogoIcon, Header, Logo, NgIf],
  templateUrl: './Footer.html',
  styleUrls: ['./Footer.scss']
})
export class Footer implements OnInit {
  @Input() $font: string = '350px';

  constructor(protected themeService: ThemeService) {
  }

  ngOnInit() {
    const savedTheme = this.themeService.getTheme();
    this.themeService.applyTheme(savedTheme);
  }
}
