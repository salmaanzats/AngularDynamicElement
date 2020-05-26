import { ElementBase } from "../element-base";

export class TextAreaElement extends ElementBase<string> {
    controlType = 'textarea';
    type:  string;

    constructor(options: {} = {}) {
      super(options);
      this.type = options['type'] || '';
    }
  }
