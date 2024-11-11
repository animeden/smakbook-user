import {AfterViewInit, Component} from '@angular/core';
import {ActivatedRoute, Router, RouterOutlet} from '@angular/router';
import {WIP} from '../../components/WIP';
import {Page} from '../../components/Page';
import {MangaCard} from './components/MangaCard/MangaCard';
import {NgForOf, NgIf} from '@angular/common';
import {NgLabelTemplateDirective, NgOptionTemplateDirective, NgSelectComponent} from '@ng-select/ng-select';
import {FormsModule} from '@angular/forms';
import {Pagination} from '../../components/Pagination';
import {ToriiIcon} from '../../assets/icons/Torii';
import {first} from 'rxjs';
import {GlobeIcon} from '../../assets/icons/Globe';
import {BonsaiIcon} from '../../assets/icons/Bonsai';

@Component({
  selector: 'reading-room',
  standalone: true,
  imports: [RouterOutlet, WIP, Page, MangaCard, NgForOf, NgLabelTemplateDirective, NgOptionTemplateDirective, NgSelectComponent, FormsModule, Pagination, ToriiIcon, NgIf, GlobeIcon, BonsaiIcon],
  templateUrl: './ReadingRoom.html',
  styleUrls: ['./ReadingRoom.scss']
})
export class ReadingRoom implements AfterViewInit {
  mangas: Array<{ name: string, country: string, status: string, image: string }> = [{
    name: "Зомбі-татко",
    country: "Японія",
    status: "Завершено",
    image: ""
  }, {name: "Професор академії під прикриттям", country: "Японія", status: "Перекладається", image: ""}, {
    name: "Зомбі-татко",
    country: "Японія",
    status: "Завершено",
    image: ""
  }, {name: "Професор академії під прикриттям", country: "Японія", status: "Перекладається", image: ""}, {
    name: "Зомбі-татко",
    country: "Японія",
    status: "Завершено",
    image: ""
  }, {name: "Професор академії під прикриттям", country: "Японія", status: "Перекладається", image: ""}, {
    name: "Зомбі-татко",
    country: "Японія",
    status: "Завершено",
    image: ""
  }, {name: "Професор академії під прикриттям", country: "Японія", status: "Перекладається", image: ""}, {
    name: "Зомбі-татко",
    country: "Японія",
    status: "Завершено",
    image: ""
  }, {name: "Професор академії під прикриттям", country: "Японія", status: "Перекладається", image: ""}, {
    name: "Зомбі-татко",
    country: "Японія",
    status: "Завершено",
    image: ""
  }, {name: "Професор академії під прикриттям", country: "Японія", status: "Перекладається", image: ""}, {
    name: "Зомбі-татко",
    country: "Японія",
    status: "Завершено",
    image: ""
  }, {name: "Професор академії під прикриттям", country: "Японія", status: "Перекладається", image: ""}, {
    name: "Зомбі-татко",
    country: "Японія",
    status: "Завершено",
    image: ""
  }, {name: "Професор академії під прикриттям", country: "Японія", status: "Перекладається", image: ""}, {
    name: "Зомбі-татко",
    country: "Японія",
    status: "Завершено",
    image: ""
  }, {name: "Професор академії під прикриттям", country: "Японія", status: "Перекладається", image: ""}];

  $filterOptions: Array<{ value: string, label: string }> = [{value: "newest", label: "По новизні"}, {
    value: "oldest",
    label: "По старшині"
  }];
  $selectedFilterOption = "newest";

  $maxItems: number = 18;
  $page: number = 1;
  $totalItems: number = 176;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.pipe(first()).subscribe(params => {

      if (params['page']) {
        this.$page = +params['page'];
      }
      if (params['filterOption']) {
        this.$selectedFilterOption = params['filterOption'];
      }
      if (params['tags']) {
        this.$selectedTagsOptions = this.parseStringParam(params['tags']);
      }
      if (params['countries']) {
        this.$selectedCountries = this.parseStringParam(params['countries']);
      }
      if (params['categories']) {
        this.$selectedCategories = this.parseStringParam(params['categories']);
      }
      if (params['status']) {
        this.$selectedStatus = this.parseStringParam(params['status']);
      }
    });
  }

  ngAfterViewInit() {
    this.filteredTagsOptions = this.$tagsOptions.filter(tag =>
      !this.$selectedTagsOptions.includes(tag.value)
    );
  }

  updatePage(newPage: number) {
    this.$page = newPage;
    this.updateUrl();
  }

  updateUrl() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        page: this.$page,
        filterOption: this.$selectedFilterOption,
        tags: this.$selectedTagsOptions.map(tag => tag).join(','),
        countries: this.$selectedCountries.map(country => country).join(','),
        categories: this.$selectedCategories.map(category => category).join(','),
        status: this.$selectedStatus.map(status => status).join(',')
      },
      queryParamsHandling: 'merge',
      state: {scrollPositionRestoration: 'enabled'},
    });
  }

  $tagsOptions: Array<{ value: string, label: string }> = [{
    value: "спокійний_гг",
    label: "# Спокійний_гг"
  }, {value: "жорстокість", label: "# Жорстокість"}];
  $selectedTagsOptions: Array<string> = [];
  filteredTagsOptions: Array<{ value: string, label: string }> = this.$tagsOptions;

  parseStringParam(tagsParam: string): Array<string> {
    return tagsParam.split(',').map(tag => {
      return tag;
    });
  }

  onTagChange() {
    console.log(this.$selectedTagsOptions)
    this.filteredTagsOptions = this.$tagsOptions.filter(tag =>
      !this.$selectedTagsOptions.includes(tag.value)
    );
    this.updateUrl();
  }

  $countries: Array<string> = ["японія", "китай", "корея", "сша"];
  $selectedCountries: Array<string> = ["японія", "китай", "корея", "сша"];

  isSelectedCountries(option: string): boolean {
    return this.$selectedCountries.includes(option);
  }

  toggleSelectionCountries(option: string): void {
    if (this.isSelectedCountries(option)) {
      this.$selectedCountries = this.$selectedCountries.filter(item => item !== option);
    } else {
      this.$selectedCountries.push(option);
    }

    this.updateUrl();
  }

  $categories: Array<string> = ["наукова фантастика", "трилер", "фанфік", "кодомо", "історія", "трагедія", "джьосей", "шьоджьо", "космічна опера", "фарс", "спорт", "вестерн", "крутарство/шахрайство", "кіберпанк", "постапокаліпсис", "стімпанк", "жахи", "шьонен", "готика", "сентай", "філософія", "сянься", "психологія", "шьоне", "детектив", "містика", "драма", "романтика", "школа", "еччі", "ісекай", "буденність", "фентезі", "бойовик", "екшн", "пригоди", "фантастика", "комедія", "сейнен", "меха"];
  $selectedCategories: Array<string> = ["наукова фантастика", "трилер", "фанфік", "кодомо", "історія", "трагедія", "джьосей", "шьоджьо", "космічна опера", "фарс", "спорт", "вестерн", "крутарство/шахрайство", "кіберпанк", "постапокаліпсис", "стімпанк", "жахи", "шьонен", "готика", "сентай", "філософія", "сянься", "психологія", "шьоне", "детектив", "містика", "драма", "романтика", "школа", "еччі", "ісекай", "буденність", "фентезі", "бойовик", "екшн", "пригоди", "фантастика", "комедія", "сейнен", "меха"];

  isSelectedCategories(option: string): boolean {
    return this.$selectedCategories.includes(option);
  }

  toggleSelectionCategories(option: string): void {
    if (this.isSelectedCategories(option)) {
      this.$selectedCategories = this.$selectedCategories.filter(item => item !== option);
    } else {
      this.$selectedCategories.push(option);
    }

    this.updateUrl();
  }

  $status: Array<string> = ["перекладається", "завершено", "призупинено"];
  $selectedStatus: Array<string> = ["перекладається", "завершено", "призупинено"];

  isSelectedStatus(option: string): boolean {
    return this.$selectedStatus.includes(option);
  }

  toggleSelectionStatus(option: string): void {
    if (this.isSelectedStatus(option)) {
      this.$selectedStatus = this.$selectedStatus.filter(item => item !== option);
    } else {
      this.$selectedStatus.push(option);
    }

    this.updateUrl();
  }
}
