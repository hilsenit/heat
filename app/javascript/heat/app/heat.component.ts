import { Component, Input } from '@angular/core';

@Component({
  selector: 'heat_templ',
  template: `
  <div (mouseover)="moreRed()" (mouseleave)="stopColoring()" class="heat-box" [attr.id]="'heatNr' + id" [style.backgroundColor]="color" [style.width]="width + 'px'"></div>
  `
})

export class HeatComponent {
  @Input() warmth: number;
  @Input() id: number;
  @Input() width: number;
  colorVarmInterval: any;
  colorCoolInterval: any;
  va_lev: number = 0;
  color: string = "rgb(0, 230, 0)";

  moreRed(): void {
    clearInterval(this.colorCoolInterval);
    this.colorVarmInterval = setInterval(()=>{
      this.va_lev += 1;
      this.color = `rgb(${this.va_lev * 10}, ${250 - this.va_lev * 10},0)`;
      if(this.va_lev == 25) {
        clearInterval(this.colorVarmInterval);
      }
    }, 150);
  }
  stopColoring() {
    clearInterval(this.colorVarmInterval);
    this.colorCoolInterval = setInterval(()=>{
      this.va_lev -= 1;
      this.color = `rgb(${this.va_lev * 10}, ${250 - this.va_lev * 10},0)`;
      if(this.va_lev == 0) {
        clearInterval(this.colorCoolInterval);
      }
    }, 30)
  }
}
