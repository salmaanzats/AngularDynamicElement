import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ElementBase } from '../core/element-base';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-core-render',
  templateUrl: './core-render.component.html',
  styleUrls: ['./core-render.component.scss']
})
export class CoreRenderComponent implements OnInit {

  
  values = [];
  isEmailValid: boolean = false;
  isCheckboxGroupRequired = false;
  isEmail = false;
  email: string='';
  imageName: string = 'Click here to upload profile image';
  documentName: string = 'Click here to Upload file';
  imageSrc: string = "./assets/img/user.svg";

  @ViewChild('imageUploadRef' , {static: false}) imageUploadRef
  @Input() element: ElementBase<any>;
  @Input() form: FormGroup;
  @Input() isFormSubmitted: boolean;
  @Output() onFileUploads: EventEmitter<any> = new EventEmitter<any>();
  @Output() onImageUploads: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
    if (this.element.controlType == 'checkboxgroup') {
      this.values = this.element.multipleValues;
      this.isCheckboxGroupRequired = this.element.required;
    }
    if (this.element.controlType == 'profileImage') {
      if (this.element.value != undefined) {
        this.imageSrc = this.element.value
      }
      if (this.element.value == "") {
        this.imageSrc = "./assets/img/user.svg";
      }
    }
  }

  get isValid() {

    return (this.form.controls[this.element.key].valid)
  }


  fileUpload($event) {
    this.onFileUploads.emit($event);
    this.documentName = $event.target.files[0].name;
  }

  imageUpload($event) {
    this.onImageUploads.emit($event);

    var reader = new FileReader();
    reader.onload = ($event: any) => {
      this.imageSrc = $event.target.result;
    }
    reader.readAsDataURL($event.target.files[0]);

    this.imageName = $event.target.files[0].name;
  }

  checkboxValues($event, id) {
    let result = this.values.find(r => r.value == id);
    if (result == undefined) {
      this.values.push({ 'value': id, 'status': $event.target.checked });
    } else {
      result.status = $event.target.checked;
    }
    if(this.isCheckboxGroupRequired){
      let status = this.values.find(t => t.status == true);
      if(status == undefined){
        this.isFormSubmitted = true;
        return;
      }else{
        this.isFormSubmitted = false;
      }
    }
    return JSON.stringify(this.values);
  }

  isRequired($event, required){
    if(required == true && $event.target.checked == true){
      this.isFormSubmitted = false;
    }else if(required == true && $event.target.checked == false){
      this.isFormSubmitted = true;
    }
  }
}
