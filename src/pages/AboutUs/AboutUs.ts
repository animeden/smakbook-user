import {Component} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {Header} from '../../components/Header/Header';
import {WIP} from '../../components/WIP/WIP';
import {Page} from '../../components/Page/Page';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducer';
import {setPage} from '../../store/app.actions';

@Component({
  selector: 'about-us',
  standalone: true,
  imports: [RouterOutlet, MatIcon, Header, WIP, Page],
  templateUrl: './AboutUs.html',
  styleUrls: ['./AboutUs.scss']
})
export class AboutUs {
}
