import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { FormBuilder, Validators as Validators } from '@angular/forms';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css']
})
export class InputComponentComponent implements OnInit {

  public data: any[] = [];
  public previewForm;

  constructor(
    private sessionStorage: SessionStorageService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.data = this.sessionStorage.retrieve('data');
  }

  saveForm() {
    this.previewForm = document.getElementById('form');
    console.log(this.previewForm);
  }

}
