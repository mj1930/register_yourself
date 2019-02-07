import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-createform',
  templateUrl: './createform.component.html',
  styleUrls: ['./createform.component.css']
})
export class CreateformComponent implements OnInit {

  public inputArray: any[] = [];
  public selectArray: any[] = [
    {
      text: 'text',
      label: 'Text'
    },
    {
      text: 'number',
      label: 'Number'
    },
    {
      text: 'checkbox',
      label: 'Checkbox'
    },
    {
      text: 'select',
      label: 'Select'
    },
    {
      text: 'password',
      label: 'Password'
    },
    {
      text: 'radio',
      label: 'Radio'
    },
  ];
  public selectedElement: string = 'text';
  public elementName: string = 'Type your field name here';
  public totalCheckboxes: number = 2;
  public totalOptions: number = 2;
  constructor(private router: Router, private sessionStorage: SessionStorageService) { }

  ngOnInit() {
    this.inputArray = [
      {
        placeholder: 'Type your text here',
        type: 'text',
        for: this.elementName,
        id: 0,
        fieldName: 'Text'
      },
      {
        placeholder: 'Type your text here',
        type: 'number',
        for: this.elementName,
        id: 1,
        fieldName: 'Number'
      }
    ]
  }

  addNewElement() {
    console.log(this.inputArray)
    if (this.selectedElement == 'checkbox') {
      let totalCheckboxes = [];
      for(let i = 1; i<= this.totalCheckboxes; i++) {
        let label = 'Checkbox'+i;
        totalCheckboxes.push({label: label, id: i});
      }
      this.inputArray.push({
        type: this.selectedElement,
        for: this.elementName,
        id: this.inputArray.length,
        totalCheckboxes: totalCheckboxes,
        fieldName: this.selectArray.filter(element => element.text == this.selectedElement)[0].label
      });
    }
    if (this.selectedElement == 'select') {
      let totalOptions = [];
      for(let i = 1; i<= this.totalOptions; i++) {
        let label = 'Option'+i;
        totalOptions.push({label: label, id: i});
      }
      this.inputArray.push({
        type: this.selectedElement,
        for: this.elementName,
        id: this.inputArray.length,
        totalOptions: totalOptions,
        fieldName: this.selectArray.filter(element => element.text == this.selectedElement)[0].label
      });
    }
    else {
      this.inputArray.push({
        placeholder: 'Type your text here',
        type: this.selectedElement,
        for: this.elementName,
        id: this.inputArray.length,
        fieldName: this.selectArray.filter(element => element.text == this.selectedElement)[0].label
      });
    }
  }

  showPreview() {
    this.sessionStorage.store('data', this.inputArray);
    this.router.navigate(['/preview']);
  }

  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi'
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

}
