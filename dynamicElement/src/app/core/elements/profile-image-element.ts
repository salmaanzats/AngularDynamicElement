import { ElementBase } from "../element-base";

export class ProfileImageElement extends ElementBase<string> {
    controlType = 'profileImage';
    type: File;

    constructor(options: {} = {}) {
      super(options);
      this.type = options['type'] || '';
    }
  }
