import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators as Validators, Form } from '@angular/forms';
import { InputComponentComponent } from '../input-component/input-component.component';
import { element } from 'protractor';

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
  constructor(private formBuilder: FormBuilder) { }

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



}
