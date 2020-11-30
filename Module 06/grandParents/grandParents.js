import { LightningElement } from 'lwc';

export default class GrandParent extends LightningElement {

    childsel1 = "Deselected";
    childsel2 = "Deselected";
    childsel3 = "Deselected";
    select1 = false;
    select2 = false;
    select3 = false;
    selNum = 0;

    handleChildClick(event){
        this.selNum = event.detail.selNum;
        this.childsel1 = event.detail.childsel1;
        this.childsel2 = event.detail.childsel2;
        this.childsel3 = event.detail.childsel3;
        this.select1 = event.detail.select1;
        this.select2 = event.detail.select2;
        this.select3 = event.detail.select3;
    }

    handleReset(event) {
        this.selNum = 0;
        this.template.querySelector('c-parent').ParentReset();  
    }
}