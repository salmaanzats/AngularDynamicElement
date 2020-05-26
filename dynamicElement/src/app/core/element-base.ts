export class ElementBase<T> {
    id: number;
    value: T;
    key: string;
    message: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
    placeholder: string;
    multipleValues: T;
    options: any;
    type: any;
    toolTip: string;

    constructor(options: {
      id?: number,
      value?: T,
      key?: string,
      label?: string,
      required?: boolean,
      order?: number,
      controlType?: string,
      placeholder?: string,
      toolTip?: string,
      multipleValues?: T
    } = {}) {
      this.id = options.id || 0;
      this.value = options.value;

      this.key = options.key || '';
      this.label = options.label || '';
      this.required = !!options.required;
      this.order = options.order === undefined ? 1 : options.order;
      this.controlType = options.controlType || '';
      this.placeholder = options.placeholder || '';

      this.multipleValues = options.multipleValues;
      this.toolTip = options.toolTip || '';
    }
  }
