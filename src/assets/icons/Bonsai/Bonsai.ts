import {Component, Input} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'BonsaiIcon',
  standalone: true,
  templateUrl: './Bonsai.html',
  imports: [
    NgIf
  ]
})
export class BonsaiIcon {
  @Input() color: string = "white";
  @Input() size: string = "50";
}
