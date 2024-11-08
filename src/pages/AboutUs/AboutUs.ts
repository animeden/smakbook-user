import {Component, Input, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {Header} from '../../components/Header';
import {WIP} from '../../components/WIP';
import {Page} from '../../components/Page';
import {Logo} from '../../components/Logo';
import {ThemeService} from '../../app/theme.service';

@Component({
  selector: 'about-us',
  standalone: true,
  imports: [RouterOutlet, Header, WIP, Page, Logo],
  templateUrl: './AboutUs.html',
  styleUrls: ['./AboutUs.scss']
})
export class AboutUs implements OnInit  {
  constructor(protected themeService: ThemeService) {
  }

  ngOnInit() {
    const savedTheme = this.themeService.getTheme();
    this.themeService.applyTheme(savedTheme);
  }
}
