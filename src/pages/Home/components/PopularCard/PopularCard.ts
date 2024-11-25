import {Component, Input} from '@angular/core';
import {WIP} from '../../../../components/WIP';
import {NgForOf, NgIf} from '@angular/common';
import {ArrowIcon} from '../../../../assets/icons/Arrow';
import {Router} from '@angular/router';
import {last} from 'rxjs';

@Component({
  selector: 'PopularCard',
  standalone: true,
  imports: [WIP, NgIf, ArrowIcon, NgForOf],
  templateUrl: './PopularCard.html',
  styleUrls: ['./PopularCard.scss']
})
export class PopularCard {
  constructor(private router: Router) {
  }

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

  goToManga(id: number) {
    this.router.navigate(['manga/' + id]);
  }

  goToReadingParams(category: string) {
    this.router.navigate(['reading-room/'], {
      queryParams: {
        categories: category
      }
    });
  }
}
