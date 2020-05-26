import { ProfileImageElement } from './elements/profile-image-element';
import { Injectable } from '@angular/core';
import { CheckboxElement } from './elements/checkbox-element';
import { TextboxElement } from './elements/textbox-element';
import { DropdownElement } from './elements/dropdown-element';
import { TextAreaElement } from './elements/textarea-element';
import { CalendarElement } from './elements/calendar-element';
import { RadioElement } from './elements/radio-element';
import { FileElement } from './elements/file-element';
import { CheckboxGroupElement } from './elements/checkboxgroup-element';
import { RadioGroupElement } from './elements/radiogroup-element';
import { EmailElement } from './elements/email-element';

@Injectable()
export class ElementInitialisationService {

  constructor() { }

  textElement(fields) {
    return new TextboxElement({
      id: fields.id,
      key: fields.key,
      label: fields.templateOptions.label,
      required: fields.isRequired,
      order: fields.displayOrder,
      placeholder: fields.templateOptions.placeholder,
      value: fields.value,
      toolTip: fields.templateOptions.toolTip
    });
  }

  emailElement(fields) {
    return new EmailElement({
      id: fields.id,
      key: fields.key,
      label: fields.templateOptions.label,
      required: fields.isRequired,
      order: fields.displayOrder,
      value: fields.value
    });
  }

  checkboxElement(fields) {
    if (fields.value == 'true')
      fields.value = true;
    else if (fields.value == 'false')
      fields.value = false;
    else if (fields.value == '')
      fields.value = false;

    return new CheckboxElement({
      id: fields.id,
      key: fields.key,
      label: fields.templateOptions.label,
      required: fields.isRequired,
      order: fields.displayOrder,
      type: 'checkbox',
      value: fields.value,
      toolTip: fields.templateOptions.toolTip
    });
  }

  checkboxgroupElement(fields) {
    if(fields.value != null)
      var options = JSON.parse(fields.value);

    return new CheckboxGroupElement({
      id: fields.id,
      key: fields.key,
      label: fields.templateOptions.label,
      required: fields.isRequired,
      order: fields.displayOrder,
      type: 'checkbox',
      multipleValues: options == undefined ? fields.templateOptions.options : options,
      value: fields.value,
      toolTip: fields.templateOptions.toolTip
    });
  }

  radioGroupElement(fields) {
    var options = [];
    return new RadioGroupElement({
      id: fields.id,
      key: fields.key,
      label: fields.templateOptions.label,
      required: fields.isRequired,
      order: fields.displayOrder,
      type: 'radio',
      multipleValues: fields.templateOptions.options,
      value: fields.value,
      toolTip: fields.templateOptions.toolTip
    });
  }

  dropdownElement(fields) {
    var options = [];

    return new DropdownElement({
      id: fields.id,
      key: fields.key,
      label: fields.templateOptions.label,
      required: fields.isRequired,
      order: fields.displayOrder,
      options: fields.templateOptions.options,
      value: fields.value,
      toolTip: fields.templateOptions.toolTip
    });
  }

  textareaElement(fields) {
    return new TextAreaElement({
      id: fields.id,
      key: fields.key,
      label: fields.templateOptions.label,
      required: fields.isRequired,
      order: fields.displayOrder,
      value: fields.value,
      placeholder: fields.templateOptions.placeholder,
      toolTip: fields.templateOptions.toolTip
    });
  }

  calendarElement(fields) {
    return new CalendarElement({
      id: fields.id,
      key: fields.key,
      label: fields.templateOptions.label,
      required: fields.isRequired,
      order: fields.displayOrder,
      value: fields.value == undefined ? null : fields.value == "" ? null : new Date(fields.value),
      type: 'Date',
      toolTip: fields.templateOptions.toolTip
    });
  }


  fileElement(fields): any {
    return new FileElement({
      id: fields.id,
      key: fields.key,
      label: fields.templateOptions.label,
      required: fields.isRequired,
      order: fields.displayOrder,
      value: fields.value,
      type: 'File',
      toolTip: fields.templateOptions.toolTip
    });
  }

  profileElement(fields): any {
    return new ProfileImageElement({
      id: fields.id,
      key: fields.key,
      label: fields.templateOptions.label,
      required: fields.isRequired,
      order: fields.displayOrder,
      value: fields.value,
      type: 'File'
    });
  }

}
