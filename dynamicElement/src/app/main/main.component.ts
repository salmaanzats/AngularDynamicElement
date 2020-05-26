import { Component, OnInit } from '@angular/core';
import { ElementInitialisationService } from '../core/element-initialisation.service';
import { HTMLElements } from '../core/enums/htmlElement';
import { ElementBase } from '../core/element-base';
import { ElementModel } from './element';
import { RenderModel } from './renderModel';
import { ElementControlService } from '../core/element-control.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  fields: ElementBase<any>[] = new Array();
  element: ElementModel;
  elements = new Array<ElementModel>();
  renderModel: RenderModel;

  fileList = FileList;

  constructor(private initalizeElement: ElementInitialisationService, private elementControlService: ElementControlService) { }

  ngOnInit(): void {
    this.elements = [
      { id: 1, key: "ss", label: "Name", required: false, order: 1, placeholder: "enter name", value: "", type: HTMLElements.text, toolTip: "" }
    ];
    this.render();
  }

  render() {
    this.elements.forEach(element => {
      this.generateBaseElement(element)
    });
    this.renderView();
  }

  renderView() {
    this.renderModel = new RenderModel();
    this.renderModel.elements = this.fields.sort((a, b) => a.order - b.order);
    this.renderModel.form = this.elementControlService.toFormGroup(this.renderModel.elements);
    this.renderModel.isFormSubmitted = false;
  }


  generateBaseElement(fields: ElementModel) {
    switch (fields.type) {
      case HTMLElements.text:
        this.fields.push(this.initalizeElement.textElement(fields));
        break;
      case HTMLElements.checkbox:
        this.fields.push(this.initalizeElement.checkboxElement(fields));
        break;
      case HTMLElements.checkboxGroup:
        this.fields.push(this.initalizeElement.checkboxgroupElement(fields));
        break;
      case HTMLElements.radioButtonGroup:
        this.fields.push(this.initalizeElement.radioGroupElement(fields));
        break;
      case HTMLElements.select:
        this.fields.push(this.initalizeElement.dropdownElement(fields));
        break;
      case HTMLElements.address:
        this.fields.push(this.initalizeElement.textareaElement(fields));
        break;
      case HTMLElements.calendar:
        this.fields.push(this.initalizeElement.calendarElement(fields));
        break;
      case HTMLElements.file:
        this.fields.push(this.initalizeElement.fileElement(fields));
        break;
      case HTMLElements.profileImage:
        this.fields.push(this.initalizeElement.profileElement(fields));
        break;
      case HTMLElements.email:
        this.fields.push(this.initalizeElement.emailElement(fields));
        break;
    }
  }

  fileUpload($event) {
    this.fileList = $event.target.files;
  }

  imageUpload(event) {
    this.fileList = event.target.files;
    var reader = new FileReader();
    reader.onload = (event: any) => {
      console.log(event.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  }
}
