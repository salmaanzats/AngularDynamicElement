import { Injectable } from '@angular/core';
import { ElementBase } from './element-base';
import { FormControl, Validators, FormGroup } from '@angular/forms'

@Injectable()
export class ElementControlService {

  constructor() { }

  toFormGroup(elements: ElementBase<any>[]) {
    let group: any = {};

    elements.forEach(element => {
      if(element.controlType == 'checkbox'){
        group[element.key] = element.required ? new FormControl(element.value || '', Validators.requiredTrue) : new FormControl(element.value || '');
        return;
      }
      group[element.key] = element.required ? new FormControl(element.value || '', Validators.required) : new FormControl(element.value || '');
    });
    return new FormGroup(group);
  }

}
