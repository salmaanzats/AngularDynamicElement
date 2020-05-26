import { ElementBase } from "../element-base";

export class FileElement extends ElementBase<string> {
    controlType = 'file';
    type: File;

    constructor(options: {} = {}) {
      super(options);
      this.type = options['type'] || '';
    }
  }
