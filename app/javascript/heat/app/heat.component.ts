import { Component, Input } from '@angular/core';

@Component({
  selector: 'heat_templ',
  template: `<div class="heat-box" [attr.id]="'heatNr' + id" [style.backgroundColor]="setColor(warmth)">{{warmth}}</div>`
})

export class HeatComponent {
  @Input() warmth: number;
  @Input() id: number;

  setColor(warmth: number): string {
    return "#" + "ffaadd";
  }

}
