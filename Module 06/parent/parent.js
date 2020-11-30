import { LightningElement,api } from 'lwc';

export default class Parent extends LightningElement {

    @api childsel1 = "Deselected";
    @api childsel2 = "Deselected";
    @api childsel3 = "Deselected";


    handleChildClick(event) {
        this.childsel1 = event.target.childsel1;
        this.childsel2 = event.target.childsel2;
        this.childsel3 = event.target.childsel3;
    }

    @api
    ParentReset(){
        this.childsel1 = "Deselected";
        this.childsel2 = "Deselected";
        this.childsel3 = "Deselected";
        this.template.querySelector('c-child').ChildReset();
    }
}