import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {WIP} from '../../components/WIP';
import {Page} from '../../components/Page';

@Component({
  selector: 'reading-room',
  standalone: true,
  imports: [RouterOutlet, WIP, Page],
  templateUrl: './ReadingRoom.html',
  styleUrls: ['./ReadingRoom.scss']
})
export class ReadingRoom {
}
