import {Component, Input} from '@angular/core';

@Component({
  selector: 'ArrowIcon',
  standalone: true,
  templateUrl: './Arrow.html',
})
export class ArrowIcon {
  @Input() color: string = "#D9D9D9";
}
