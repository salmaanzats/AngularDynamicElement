import { ElementBase } from "../element-base";

export class RadioElement extends ElementBase<string> {
  controlType = 'radio';
  type: boolean;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
