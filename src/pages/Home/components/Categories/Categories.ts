import {Component, Input, OnInit} from '@angular/core';
import {WIP} from '../../../../components/WIP/WIP';
import {NgForOf, NgIf, SlicePipe} from '@angular/common';
import {ArrowIcon} from '../../../../assets/icons/Arrow/Arrow';
import {ToriiIcon} from '../../../../assets/icons/Torii/Torii';
import {BonsaiIcon} from '../../../../assets/icons/Bonsai/Bonsai';
import {ThemeService} from '../../../../app/theme.service';

@Component({
  selector: 'Categories',
  standalone: true,
  imports: [WIP, NgIf, ArrowIcon, ToriiIcon, NgForOf, SlicePipe, BonsaiIcon],
  templateUrl: './Categories.html',
  styleUrls: ['./Categories.scss']
})
export class Categories {
  $categories = [{title: '1', image: ""}, {title: '2', image: ""}, {title: '3', image: ""}, {
    title: '4',
    image: ""
  }, {title: '5', image: ""}, {title: '6', image: ""}]

  constructor(protected themeService: ThemeService) {
  }

  getIconColor(): string {
    return this.themeService.getTheme() === 'dark' ? 'white' : 'red';
  }
}
