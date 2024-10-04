import {Component, Input} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import { MatIconModule} from '@angular/material/icon';
import {BuilderIcon} from '../../assets/icons/Builder/Builder';

@Component({
  selector: 'WIP',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, BuilderIcon],
  templateUrl: './WIP.html',
  styleUrls: ['./WIP.scss']
})
export class WIP {
  @Input() $title: string = '';
}
