import {Component} from '@angular/core';
import {WIP} from '../../components/WIP';
import {Page} from '../../components/Page';

@Component({
  selector: 'Manga',
  standalone: true,
  imports: [ WIP, Page],
  templateUrl: './Manga.html',
  styleUrls: ['./Manga.scss']
})
export class Manga {
}
