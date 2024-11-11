import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LogoIcon} from '../../assets/icons/Logo/Logo';
import {FormsModule} from '@angular/forms';
import {NgIf, NgOptimizedImage} from '@angular/common';
import {DandruffIcon} from '../../assets/icons/Dandruff';
import {SenseiIcon} from '../../assets/icons/Sensei';
import {MoonIcon} from '../../assets/icons/Moon';
import {ThemeService} from '../../app/theme.service';
import {SunIcon} from '../../assets/icons/Sun';
import {Logo} from '../Logo';
import {DoorsIcon} from '../../assets/icons/Doors/Doors';

@Component({
  selector: 'Header',
  standalone: true,
  imports: [LogoIcon, FormsModule, NgOptimizedImage, DandruffIcon, SenseiIcon, MoonIcon, SunIcon, NgIf, Logo, DoorsIcon],
  templateUrl: './Header.html',
  styleUrls: ['./Header.scss']
})
export class Header implements OnInit {

  @Input() $page: string = '';
  searchTxt: string = '';
  open: boolean = true;

  constructor(private router: Router, protected themeService: ThemeService) {
  }

  ngOnInit() {
    const savedTheme = this.themeService.getTheme();
    this.themeService.applyTheme(savedTheme);
  }

  toggleTheme() {
    const currentTheme = this.themeService.getTheme();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    this.themeService.setTheme(newTheme);
  }

  goTo(route: string) {
    this.router.navigate([route]);
  }

  returnClass(page: string) {
    return page === this.$page
      ? "header__switch__button header__switch__button__selected"
      : "header__switch__button";
  }

  handleSearchChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchTxt = input.value;
  }

  openModal(){
    this.open = true;
  }

  closeModal(){
    this.open = false;
  }
}
