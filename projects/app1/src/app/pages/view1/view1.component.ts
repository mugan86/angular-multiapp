import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view1',
  template: `
    <app-nav></app-nav>
    <p>
      App1 View1 Works!
    </p>
  `,
  styles: [`
    p {
      color: blue
    }
  `],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class View1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
