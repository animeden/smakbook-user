import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {NgForOf, NgIf, SlicePipe} from '@angular/common';
import {ArrowIcon} from '../../../../assets/icons/Arrow';

@Component({
  selector: 'MangaCard',
  standalone: true,
  imports: [
    NgForOf,
    ArrowIcon,
    NgIf,
    SlicePipe
  ],
  templateUrl: './MangaCard.html',
  styleUrls: ['./MangaCard.scss']
})
export class MangaCard {
  @Input() $manga: { name: string, country: string, status: string, image: string } = {
    name: "Зомбі-татко",
    country: "Японія",
    status: "Завершено",
    image: ""
  }

  constructor(private router: Router) {
  }

  isHovered = false;

  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }

  goTo(id: number) {
    this.router.navigate(['manga/' + id]);
  };
}
