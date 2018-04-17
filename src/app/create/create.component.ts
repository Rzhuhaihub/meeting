import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creat',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  // styles: ["flex-grow"],
  host: {
    '[class.flex_grow]': "true",
  }
})
export class CreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
