import { HTMLElements } from '../core/enums/htmlElement';

export class ElementModel {
    id: number;
    key: string;
    label: string;
    required: boolean
    order: number;
    placeholder: string;
    value: string;
    toolTip: string;
    type : HTMLElements;
}