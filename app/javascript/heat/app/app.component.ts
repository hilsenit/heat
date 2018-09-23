import { Component, OnInit } from '@angular/core';
import { HeatComponent } from './heat.component';
import { HeatItem } from './heat';

@Component({
  selector: 'heat',
  template: `
  <div id="heatWrapper" *ngFor="let h_item of heat_items">
    <heat_templ [warmth]="h_item?.warmth"></heat_templ>
  </div>
  `
})

export class AppComponent implements OnInit {
  heat_items: HeatItem[];
  innerWidth: any;
  innerHeight: any;

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    this.createAreas(this.innerWidth, this.innerHeight);
    console.log(this.heat_items);
  }

  createAreas(width: number, height: number) {
    let box_w_a_h = 100;
    let number_of_box_width = width / box_w_a_h;
    let number_of_box_height = height / box_w_a_h;
    var total_number_of_boxes = Math.floor(number_of_box_width * number_of_box_height);
    for(var bi=0; bi < total_number_of_boxes; bi++){
      let box = new HeatItem
      box = {id: bi, warmth: bi};
    }
  }

}
