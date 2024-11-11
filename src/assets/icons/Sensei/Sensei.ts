import {Component, Input} from '@angular/core';

@Component({
  selector: 'SenseiIcon',
  standalone: true,
  templateUrl: './Sensei.html',
})
export class SenseiIcon {
  @Input() $size: string = '60px';
}
