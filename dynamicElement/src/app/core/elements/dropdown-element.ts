import { ElementBase } from '../element-base';

export class DropdownElement extends ElementBase<string> {
  controlType = 'dropdown';
  options: {value: number, text: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
