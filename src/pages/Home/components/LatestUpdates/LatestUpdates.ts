import {Component, Input, OnInit} from '@angular/core';
import {WIP} from '../../../../components/WIP';
import {NgClass, NgForOf, NgIf, SlicePipe} from '@angular/common';
import {ArrowIcon} from '../../../../assets/icons/Arrow';
import {ToriiIcon} from '../../../../assets/icons/Torii';
import {Router} from '@angular/router';
import {ThemeService} from '../../../../app/theme.service';

@Component({
  selector: 'LatestUpdates',
  standalone: true,
  imports: [WIP, NgIf, ArrowIcon, ToriiIcon, NgForOf, SlicePipe, NgClass],
  templateUrl: './LatestUpdates.html',
  styleUrls: ['./LatestUpdates.scss']
})
export class LatestUpdates {
  $latest = [{}, {}, {}, {}]
  isHovered: boolean[] = []

  constructor(private router: Router, protected themeService: ThemeService) {
  }

  getIconColor(): string {
    return this.themeService.getTheme() === 'dark' ? 'white' : 'red';
  }

  onMouseEnter(index: number) {
    this.isHovered[index] = true;
  }

  onMouseLeave(index: number) {
    this.isHovered[index] = false;
  }

  goToManga(id: number) {
    this.router.navigate(['manga/' + id]);
  }

  goToReading() {
    this.router.navigate(['reading-room/']);
  }
}
