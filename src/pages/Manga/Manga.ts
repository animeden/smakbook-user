import {Component} from '@angular/core';
import {WIP} from '../../components/WIP';
import {Page} from '../../components/Page';
import {join} from '@angular/compiler-cli';
import {NgForOf} from '@angular/common';
import {ArrowIcon} from '../../assets/icons/Arrow';
import {Router} from '@angular/router';

@Component({
  selector: 'Manga',
  standalone: true,
  imports: [WIP, Page, NgForOf, ArrowIcon],
  templateUrl: './Manga.html',
  styleUrls: ['./Manga.scss']
})
export class Manga {
  item: {
    title: string,
    creator: string,
    otherNames: string,
    country: string,
    year: string,
    writingStatus: string,
    translationStatus: string,
    translator: string,
    tags: Array<string>,
    categories: Array<string>,
    description: string,
    image: string,
    characters: Array<{ title: string, subcharacters: Array<string> }>
  } = {
    title: "Професор Академії під прикриттям",
    creator: "Асато Асато",
    otherNames: "86 - Eighty Six / 86ーエイティシックスー",
    country: "Японія",
    year: "10.02.2017",
    writingStatus: "В процесі",
    translationStatus: "Перекладається",
    translator: "AinsOoalGon",
    tags: ['військові', 'спокійний_гг', 'аристократія', 'дискримінація', 'жорстокість', 'війна', 'гг_чоловік', 'розумний_гг'],
    categories: ["меха", "фантастика", "драма", "трагедія", "бойовик", "сейнен"],
    description: "Макіавеллі та Джеррард – лише одні з багатьох імен, які використовує новий професор Академії Сіорен для маскування своєї особистості, а тепер він може додати до свого списку ще одне – Люджер Черіш.",
    image: "",
    characters: [{
      title: "Том 1", subcharacters: ["0.0: Початкові ілюстрації",
        "0.3: Мемуари",
        "0.5: Пролог. Маки квітнуть по всьому полю бою.",
        "1.0: Поле бою з нульовими втратами",
        "2.0: На скелетному фронті все спокійно",
        "3.0: До твого галантного образу на краю загробного світу"]
    }, {
      title: "Том 2", subcharacters: ["0.3: Мемуари",
        "0.5: Пролог. Її величність не на полі бою",
        "1.0: Поїздка Валькірій",
        "2.0: Панцерлід",
        "3.0: Дика синя далечінь",
        "4.0: Під прапором двоголового орла"]
    }, {
      title: "Том 3", subcharacters: ["5.5: Початкові ілюстрації",
        "5.7: Епіграф",
        "5.8: Інтерлюдія. Беріть зброю",
        "6.0: Там",
        "7.0: Те, за що можна померти",
        "8.0: Забіг крізь поле бою",
        "9.0: Veni, Veni, Emmanuel. Прийди, прийди, Еммануїл",
        "9.2: Епілог. Ми ще зустрінемося",
        "9.4: Післямова"]
    }, {
      title: "Том 4", subcharacters: ["0.0: Початкові ілюстрації",
        "0.3: Мемуари",
        "0.5: Пролог. Маки квітнуть по всьому полю бою.",
        "1.0: Поле бою з нульовими втратами",
        "2.0: На скелетному фронті все спокійно",
        "3.0: До твого галантного образу на краю загробного світу"]
    }, {
      title: "Том 5", subcharacters: ["0.0: Початкові ілюстрації",
        "0.3: Мемуари",
        "0.5: Пролог. Маки квітнуть по всьому полю бою.",
        "1.0: Поле бою з нульовими втратами",
        "2.0: На скелетному фронті все спокійно",
        "3.0: До твого галантного образу на краю загробного світу"]
    }, {
      title: "Том 6", subcharacters: ["0.0: Початкові ілюстрації",
        "0.3: Мемуари",
        "0.5: Пролог. Маки квітнуть по всьому полю бою.",
        "1.0: Поле бою з нульовими втратами",
        "2.0: На скелетному фронті все спокійно",
        "3.0: До твого галантного образу на краю загробного світу"]
    }]
  }

  constructor(private router: Router) {
  }

  $tags = this.item.tags.map(tag => tag).join(', #')

  goToReadingCategory(category: string) {
    this.router.navigate(['reading-room/'], {
      queryParams: {
        categories: category
      }
    });
  }

  goToReadingCountry(country: string) {
    this.router.navigate(['reading-room/'], {
      queryParams: {
        countries: country
      }
    });
  }

  goToReadingTranslation(status: string) {
    this.router.navigate(['reading-room/'], {
      queryParams: {
        status: status
      }
    });
  }

  goToReadingTag(tag: string) {
    this.router.navigate(['reading-room/'], {
      queryParams: {
        tags: tag
      }
    });
  }
}
