import { HTMLElements } from '../core/enums/htmlElement';

export class ElementModel {
    id: number;
    key: string;
    label: string;
    isRequired: boolean
    order: number;
    placeholder: string;
    value: string;
    toolTip: string;
    type : HTMLElements;
}