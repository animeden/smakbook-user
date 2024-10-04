import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {LogoIcon} from '../../assets/icons/Logo/Logo';
import {FormsModule} from '@angular/forms';
import {NgOptimizedImage} from '@angular/common';
import {DandruffIcon} from '../../assets/icons/Dandruff/Dandruff';
import {SenseiIcon} from '../../assets/icons/Sensei/Sensei';
import {MoonIcon} from '../../assets/icons/Moon/Moon';

@Component({
  selector: 'Header',
  standalone: true,
  imports: [LogoIcon, FormsModule, NgOptimizedImage, DandruffIcon, SenseiIcon, MoonIcon],
  templateUrl: './Header.html',
  styleUrls: ['./Header.scss']
})
export class Header {
  @Input() $page: string = '';
  searchTxt: string = '';

  constructor(private router: Router) {
  }

  goTo(route: string) {
    this.router.navigate([route]);
  }

  returnClass(page: string) {
    console.log(page)
    return page === this.$page
      ? "header__switch__button header__switch__button__selected"
      : "header__switch__button";
  }

  handleSearchChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchTxt = input.value;
  }
}
