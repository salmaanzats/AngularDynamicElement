import { ElementBase } from '../element-base';

export class RadioGroupElement extends ElementBase<string> {
    controlType = 'radiogroup';
    type: boolean;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || [];
    }
}
