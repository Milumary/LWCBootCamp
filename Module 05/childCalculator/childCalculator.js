import { LightningElement,api } from 'lwc';

export default class ChildCalculator extends LightningElement {
    @api
    expression;

    @api
    result;
}