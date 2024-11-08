import {Component} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {Header} from '../../components/Header';
import {WIP} from '../../components/WIP';
import {Page} from '../../components/Page';

@Component({
  selector: 'about-us',
  standalone: true,
  imports: [RouterOutlet, Header, WIP, Page],
  templateUrl: './AboutUs.html',
  styleUrls: ['./AboutUs.scss']
})
export class AboutUs {
}
