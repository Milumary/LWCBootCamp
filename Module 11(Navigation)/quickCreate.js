import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class QuickCreate extends NavigationMixin(LightningElement) {
    accShow = false;
    oppShow = false;
    contShow = false;

    value = '';
    get options() {
        return [
            { label: 'Account', value: 'account' },
            { label: 'Opportunity', value: 'opportunity' },
            { label: 'Contact', value: 'contact' },
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
    }

    handlequickClick() {
        if(this.value === 'account') {
            this.accShow = true;
            this.oppShow = false;
            this.contShow = false;
        }
        else if(this.value === 'opportunity') {
            this.oppShow = true;
            this.accShow = false;
            this.contShow = false;
        }
        else if(this.value === 'contact') {
            this.contShow = true;
            this.accShow = false;
            this.oppShow = false;
        }
    }

    newRecordClick() {
        this.accShow = false;
        this.oppShow = false;
        this.contShow = false;

        if(this.value === 'account') {
            this[NavigationMixin.Navigate]({
                type:'standard__objectPage',
                attributes:{
                    objectApiName: 'Account',
                    actionName: 'new'
                },
            })
        }
        else if(this.value === 'opportunity') {
            this[NavigationMixin.Navigate]({
                type:'standard__objectPage',
                attributes:{
                    objectApiName: 'Opportunity',
                    actionName: 'new'
                },
            })
        }
        else if(this.value === 'contact') {
            this[NavigationMixin.Navigate]({
                type:'standard__objectPage',
                attributes:{
                    objectApiName: 'Contact',
                    actionName: 'new'
                },
            })
        }
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
        const inputFieldsAcc = this.template.querySelectorAll('ofAcc');
        if (inputFieldsAcc) {
            inputFieldsAcc.forEach(field => {
                field.reset();
            });
        }
    }

    resetOpp(event){
        const inputFieldsOpp = this.template.querySelectorAll('.ofOpp');
        if (inputFieldsOpp) {
            inputFieldsOpp.forEach(field => {
                field.reset();
            });
        }
    }

    resetCont(event){
        const inputFieldsCont = this.template.querySelectorAll('.ofCont');
        if (inputFieldsCont) {
            inputFieldsCont.forEach(field => {
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