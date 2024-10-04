import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {Header} from '../../components/Header/Header';
import {WIP} from '../../components/WIP/WIP';
import {Page} from '../../components/Page/Page';

@Component({
  selector: 'reading-room',
  standalone: true,
  imports: [RouterOutlet, MatIcon,Header, WIP, Page],
  templateUrl: './ReadingRoom.html',
  styleUrls: ['./ReadingRoom.scss']
})
export class ReadingRoom {
}
