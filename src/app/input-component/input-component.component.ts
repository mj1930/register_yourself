import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css']
})
export class InputComponentComponent implements OnInit {

  @Input()
  data: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
