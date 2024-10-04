import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {Header} from '../../components/Header/Header';
import {WIP} from '../../components/WIP/WIP';
import {Page} from '../../components/Page/Page';
import {PopularCard} from './components/PopularCard/PopularCard';
import {HotSpringsIcon} from '../../assets/icons/HotSprings/HotSprings';
import {BonsaiIcon} from '../../assets/icons/Bonsai/Bonsai';
import {NgForOf, SlicePipe} from '@angular/common';
import {LatestUpdates} from './components/LatestUpdates/LatestUpdates';

@Component({
  selector: 'home',
  standalone: true,
  imports: [RouterOutlet, MatIcon, Header, WIP, Page, PopularCard, HotSpringsIcon, BonsaiIcon, NgForOf, SlicePipe, LatestUpdates],
  templateUrl: './Home.html',
  styleUrls: ['./Home.scss']
})
export class Home {
  $popular = [{
    title: "Зомбі-татко",
    genres: "Меха, Драма, Трагедія, Бойовик, Екшн, Фантастика, Сейнен",
    image: ""
  }, {
    title: "86 - Вісімдесят шість",
    genres: "Меха, Драма, Трагедія, Бойовик, Екшн, Фантастика, Сейнен",
    image: ""
  }, {
    title: "Викрадена божевільним герцогом",
    genres: "Меха, Драма, Трагедія, Бойовик, Екшн, Фантастика, Сейнен",
    image: ""
  }]
}
