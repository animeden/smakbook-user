import {Component, Input, OnInit} from '@angular/core';
import {WIP} from '../../../../components/WIP';
import {NgForOf, NgIf, NgOptimizedImage, NgStyle, SlicePipe} from '@angular/common';
import {ArrowIcon} from '../../../../assets/icons/Arrow';
import {ToriiIcon} from '../../../../assets/icons/Torii';
import {BonsaiIcon} from '../../../../assets/icons/Bonsai';
import {ThemeService} from '../../../../app/theme.service';
import {Router} from '@angular/router';

@Component({
  selector: 'Categories',
  standalone: true,
  imports: [WIP, NgIf, ArrowIcon, ToriiIcon, NgForOf, SlicePipe, BonsaiIcon, NgStyle, NgOptimizedImage],
  templateUrl: './Categories.html',
  styleUrls: ['./Categories.scss']
})
export class Categories {
  $categories = [{title: 'Шьонен', image: "url(/assets/images/categories/shonen.png)"}, {
    title: 'Романтика',
    image: "url(/assets/images/categories/romantic.png)"
  }, {title: 'Фентезі', image: "url(/assets/images/categories/fantasy.png)"}, {
    title: 'Шьоджьо',
    image: "url(/assets/images/categories/shojo.png)"
  }, {title: 'Трилер', image: "url(/assets/images/categories/horror.png)"}, {
    title: 'Ісекай',
    image: "url(/assets/images/categories/isekai.png)"
  }]

  constructor(private router: Router, protected themeService: ThemeService) {
  }

  getIconColor(): string {
    return this.themeService.getTheme() === 'dark' ? 'white' : 'red';
  }

  goToReading() {
    this.router.navigate(['reading-room/']);
  }

  goToReadingParams(category: string) {
    this.router.navigate(['reading-room/'], {
      queryParams: {
        categories: category
      }
    });
  }
}
