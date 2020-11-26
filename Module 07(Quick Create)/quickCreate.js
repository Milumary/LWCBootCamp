import { LightningElement } from 'lwc';

export default class QuickCreate extends LightningElement {

    accShow="false";
    oppShow="false";
    contShow="false";

    handleAcc(event) {
        this.accShow=!this.accShow;
    }
    
    handleOpp(event) {
        this.oppShow=!this.oppShow;
    }

    handleCont(event) {
        this.contShow=!this.contShow;
    }

    handleAccountCreated() {
        this.resetAcc();
    }

    handleOppCreated() {
        this.resetOpp();
    }

    handleContactCreated() {
        this.resetAcc();
    }

    resetAcc(event){
        const inputFieldsAcc = this.template.querySelectorAll(
            'lightning-input-field'
        );
        if (inputFieldsAcc) {
            inputFieldsAcc.forEach(field => {
                field.reset();
            });
        }
    }

    resetOpp(event){
        const inputFieldsCon = this.template.querySelectorAll(
            'lightning-input-field'
        );
        if (inputFieldsCon) {
            inputFieldsCon.forEach(field => {
                field.reset();
            });
        }
    }

    resetCont(event){
        const inputFieldsAcc = this.template.querySelectorAll(
            'lightning-input-field'
        );
        if (inputFieldsAcc) {
            inputFieldsAcc.forEach(field => {
                field.reset();
            });
        }
    }

    saveAcc(event) {
        if(event.target.name === "saveAccount")
        this.template.querySelector('.ofAcc').submit(fields);
    }

    saveOpp(event) {
        if(event.target.name === "saveOpp")
        this.template.querySelector('.ofOpp').submit(fields);
    }

    saveCont(event) {
        if(event.target.name === "saveContact")
        this.template.querySelector('.ofCont').submit(fields);
    }

}