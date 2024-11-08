import {Component, Input} from '@angular/core';
import {WaveIcon} from '../../assets/icons/Logo/Wave/Wave';
import {LogoIcon} from '../../assets/icons/Logo/Logo/Logo';

@Component({
  selector: 'LogoLogin',
  standalone: true,
  templateUrl: './LogoLogin.html',
  imports: [WaveIcon, LogoIcon],
  styleUrls: ['./LogoLogin.scss']
})
export class LogoLogin {
  @Input() $size: string = '200px';
  @Input() $font: string = '16px';
}
