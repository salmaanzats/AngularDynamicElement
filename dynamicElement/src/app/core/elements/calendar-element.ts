import { ElementBase } from "../element-base";

export class CalendarElement extends ElementBase<string> {
    controlType = 'calendar';
    type: Date;

    constructor(options: {} = {}) {
      super(options);
      this.type = options['type'] || '';
    }
  }
