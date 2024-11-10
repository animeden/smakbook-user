import {Component} from '@angular/core';
import {WIP} from '../../../../components/WIP';
import {NgClass, NgForOf, NgIf, SlicePipe} from '@angular/common';
import {ArrowIcon} from '../../../../assets/icons/Arrow';
import {last} from 'rxjs';
import {Router} from '@angular/router';
import {ThemeService} from '../../../../app/theme.service';

@Component({
  selector: 'Slider',
  standalone: true,
  imports: [
    WIP,
    NgForOf,
    NgClass,
    ArrowIcon,
    NgIf,
    SlicePipe
  ],
  templateUrl: './Slider.html',
  styleUrls: ['./Slider.scss']
})
export class Slider {
  currentIndex: number = 0;

  slides: {id: number, title: string, genres: string, image: string, description: string }[] = [{
    id: 1,
    title: "Зомбі-татко",
    genres: "Меха, Драма, Трагедія, Бойовик, Екшн, Фантастика, Сейнен",
    image: "",
    description: "Макіавеллі та Джеррард – лише одні з багатьох імен, які використовує новий професор Академії Сіорен для маскування своєї особистості, а тепер він може додати до свого списку ще одне – Люджер Черіш."
  }, {
    id: 14,
    title: "86 - Вісімдесят шість Тестів я зробив щоб це все зібрати до купи",
    genres: "Меха, Драма, Трагедія, Бойовик, Екшн, Фантастика, Сейнен",
    image: "",
    description: "А тут я зроблю цей опис ще більшим щоб спокійно добавити обрізання тексту і тд. Але ще побачимо чи цього буде достатньо. Макіавеллі та Джеррард – лише одні з багатьох імен, які використовує новий професор Академії Сіорен для маскування своєї особистості, а тепер він може додати до свого списку ще одне – Люджер Черіш."

  }, {
    id: 7,
    title: "Викрадена божевільним герцогом",
    genres: "Меха, Драма, Трагедія, Бойовик, Екшн, Фантастика, Сейнен",
    image: "",
    description: "Макіавеллі та Джеррард – лише одні з багатьох імен, які використовує новий професор Академії Сіорен для маскування своєї особистості, а тепер він може додати до свого списку ще одне – Люджер Черіш."

  }];

  constructor(private router: Router) {
  }

  moveToSlide(index: number) {
    if (index === this.currentIndex) return;

    const prevIndex = this.currentIndex;
    this.currentIndex = index;

    const slides = document.querySelectorAll('.slider__slide');
    slides[prevIndex].classList.remove('slider__slide__active');
    slides[prevIndex].classList.add('slider__slide__prev');

    slides[this.currentIndex].classList.add('slider__slide__active');
    slides[this.currentIndex].classList.remove('slider__slide__prev');
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
