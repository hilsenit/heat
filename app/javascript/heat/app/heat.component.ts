import { Component, Input } from '@angular/core';

@Component({
  selector: 'heat_templ',
  template: `{{warmth}}`
})

export class HeatComponent {
  @Input() warmth: number;

}
