import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
    <p>
      PAGE NOT FOUND
    </p>
  `,
  styles: [
    `p {
      text-align: center;
      font-weight: bold;
    }`,
    ``,
  ]
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
