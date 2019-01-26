import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  @Input()
  data: any[] = [];

  @Output()
  changeName = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  removeElement(id) {
    var index = -1;
    this.data.find((element, i) => {
      if (element.id == id) {
        index = i;
        return element;
      }
    });
    this.data.splice(index, 1);
  }

}
