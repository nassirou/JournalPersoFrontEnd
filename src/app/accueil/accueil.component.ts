import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  template: `
    <p>
      BIENVENU DANS MON JOURNAL PERSO
    </p>

    <!-- <app-articles></app-articles> -->
  `,
  styles: [
    `p {
      text-align: center;
      font-weight: bold;
    }`,
    ``,
    ``
  ]

})
export class AccueilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
