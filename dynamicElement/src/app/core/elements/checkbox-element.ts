import { ElementBase } from "../element-base";

export class CheckboxElement extends ElementBase<string> {
    controlType = 'checkbox';
    type:  boolean;

    constructor(options: {} = {}) {
      super(options);
      this.type = options['type'] || '';
    }
  }
