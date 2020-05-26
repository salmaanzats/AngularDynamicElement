import { ElementBase } from '../element-base';

export class CheckboxGroupElement extends ElementBase<string> {
    controlType = 'checkboxgroup';
    type: boolean;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || [];
    }
}
