import { Component, AfterViewInit } from '@angular/core';

declare const h337: any;

@Component({
  selector: 'heat',
  template: `<div id="heatmap" style="width: 100%; height: 500px"></div>`
})

export class AppComponent implements AfterViewInit  {
   
  ngAfterViewInit() {
    const heatmap = h337.create({
      container: window.document.querySelector('#heatmap')
    });
    heatmap.setData({
      max: 5,
      data: [{x: 10, y: 15, value: 5}, {x: 100, y: 100, value: 40}]
    });
  }

}
