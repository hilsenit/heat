import { Component, OnInit } from '@angular/core';
import { HeatComponent } from './heat.component';
import { HeatItem } from './heat';

@Component({
  selector: 'heat',
  template: `
    <button (click)="createAreas()">Start</button>
    <div id="heatWrapper">
      <heat_templ *ngFor="let h_item of heat_items" [warmth]="h_item?.warmth" [id]="h_item?.id" [width]="width"></heat_templ>
    </div>
  `
})

export class AppComponent implements OnInit {
  heat_items: any = [{}] ;
  innerWidth: any;
  innerHeight: any;
  width: number;

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
  }

  createAreas() {
    let width = this.innerWidth;
    let height = this.innerHeight;
    let box_w_a_h = 100;
    let number_of_box_width = width / box_w_a_h;
    this.width = number_of_box_width;
    let number_of_box_height = height / box_w_a_h;
    var total_number_of_boxes = Math.floor(number_of_box_width * number_of_box_height);
    // I removed this, because it was to slow
    for(var bi=0; bi < total_number_of_boxes; bi++){
      let box = new HeatItem
      box = {id: bi, warmth: bi};
      this.heat_items.push(box);
    }
    console.log(this.heat_items);
  }

}
