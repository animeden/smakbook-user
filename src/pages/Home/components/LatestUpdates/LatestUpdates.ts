import {Component, Input, OnInit} from '@angular/core';
import {WIP} from '../../../../components/WIP/WIP';
import {NgForOf, NgIf, SlicePipe} from '@angular/common';
import {ArrowIcon} from '../../../../assets/icons/Arrow/Arrow';
import {ToriiIcon} from '../../../../assets/icons/Torii/Torii';

@Component({
  selector: 'LatestUpdates',
  standalone: true,
  imports: [WIP, NgIf, ArrowIcon, ToriiIcon, NgForOf, SlicePipe],
  templateUrl: './LatestUpdates.html',
  styleUrls: ['./LatestUpdates.scss']
})
export class LatestUpdates {
  $latest = [{}, {}, {}, {}]
  isHovered: boolean[] = []

  onMouseEnter(index: number) {
    this.isHovered[index] = true; // Задаємо true для відповідного індексу
  }

  onMouseLeave(index: number) {
    this.isHovered[index] = false; // Задаємо false для відповідного індексу
  }
}
