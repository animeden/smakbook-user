import {Component, Input} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'ToriiIcon',
  standalone: true,
  templateUrl: './Torii.html',
  imports: [
    NgIf
  ]
})
export class ToriiIcon {
  @Input() color: string = "white";
  @Input() size: string = "60px";
}
