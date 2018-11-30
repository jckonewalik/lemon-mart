import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-fount',
  template: `
    <p>
      This page doesn't exists. Go back to <a routerLink="/home">home</a>.
    </p>
  `,
  styles: []
})
export class PageNotFountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
