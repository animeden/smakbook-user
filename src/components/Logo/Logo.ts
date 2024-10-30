import {Component, Input} from '@angular/core';
import {WaveIcon} from '../../assets/icons/Logo/Wave/Wave';
import {LogoIcon} from '../../assets/icons/Logo/Logo/Logo';

@Component({
  selector: 'Logo',
  standalone: true,
  templateUrl: './Logo.html',
  imports: [WaveIcon, LogoIcon],
  styleUrls: ['./Logo.scss']
})
export class Logo {
  @Input() $size: string = '200px';
  @Input() $font: string = '16px';
}