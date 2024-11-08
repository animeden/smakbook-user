import {Component, Input} from '@angular/core';
import {WaveIcon} from '../../assets/icons/Logo/Wave';
import {LogoIcon} from '../../assets/icons/Logo/Logo';
import {NgClass} from '@angular/common';

@Component({
  selector: 'Logo',
  standalone: true,
  templateUrl: './Logo.html',
  imports: [WaveIcon, LogoIcon, NgClass],
  styleUrls: ['./Logo.scss']
})
export class Logo {
  @Input() $size: string = '200px';
  @Input() $font: string = '16px';
  @Input() $swap: boolean = false;
}
