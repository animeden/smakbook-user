import {Component, Input} from '@angular/core';
import {WIP} from '../../../../components/WIP/WIP';
import {NgIf} from '@angular/common';

@Component({
  selector: 'PopularCard',
  standalone: true,
  imports: [WIP, NgIf],
  templateUrl: './PopularCard.html',
  styleUrls: ['./PopularCard.scss']
})
export class PopularCard {
  @Input() data: { title: string, genres: string, image: string } = {
    title: "грузиться",
    genres: "грузиться",
    image: ""
  };

  isHovered = false;

  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }
}
