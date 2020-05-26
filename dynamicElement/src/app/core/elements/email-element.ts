import { ElementBase } from "../element-base";

export class EmailElement extends ElementBase<string> {
    controlType = 'email';
    type: string;

    constructor(options: {} = {}) {
      super(options);
      this.type = options['type'] || '';
    }
  }
