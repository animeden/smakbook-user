import {AfterViewInit, Component} from '@angular/core';
import {ActivatedRoute, Router, RouterOutlet} from '@angular/router';
import {WIP} from '../../components/WIP';
import {Page} from '../../components/Page';
import {MangaCard} from './components/MangaCard/MangaCard';
import {NgForOf, NgIf} from '@angular/common';
import {NgLabelTemplateDirective, NgOptionTemplateDirective, NgSelectComponent} from '@ng-select/ng-select';
import {FormsModule} from '@angular/forms';
import {Pagination} from '../../components/Pagination/Pagination';
import {ToriiIcon} from '../../assets/icons/Torii';
import {first} from 'rxjs';

@Component({
  selector: 'reading-room',
  standalone: true,
  imports: [RouterOutlet, WIP, Page, MangaCard, NgForOf, NgLabelTemplateDirective, NgOptionTemplateDirective, NgSelectComponent, FormsModule, Pagination, ToriiIcon, NgIf],
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
        this.$selectedTagsOptions = this.parseTagsParam(params['tags']);
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
        tags: this.$selectedTagsOptions.map(tag => tag).join(',')
      },
      queryParamsHandling: 'merge'
    });
  }

  $tagsOptions: Array<{ value: string, label: string }> = [{
    value: "спокійний_гг",
    label: "# Спокійний_гг"
  }, {value: "жорстокість", label: "# Жорстокість"}];
  $selectedTagsOptions: Array<string> = [];
  filteredTagsOptions: Array<{ value: string, label: string }> = this.$tagsOptions;

  parseTagsParam(tagsParam: string): Array<string> {
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
}
