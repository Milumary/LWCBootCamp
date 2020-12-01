import { LightningElement,wire,track } from 'lwc';
import {APPLICATION_SCOPE,subscribe,unsubscribe, MessageContext} from 'lightning/messageService'
import SAMPLEMC from '@salesforce/messageChannel/sampleMessageChannel__c'
 


export default class ContactSubscibe extends LightningElement {

    @track cList = [];
    subscription = null;
    receivedMessage = '';

    @wire(MessageContext) messageContext;

    subscribeMC() {
        if(this.subscription) {
            return;
        }
        this.subscription = subscribe(
                                this.messageContext,SAMPLEMC,(message) => {
                                    this.handleMessage(message);
                                }, {scope:APPLICATION_SCOPE});
    }

    unsubscribeMC() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }

    handleMessage(message) {
        this.receivedMessage = message.lmsData.contactName;
        this.cList.push(this.receivedMessage);
        console.log(this.cList);
    }

    handleClear() {
        this.receivedMessage = '';
        this.cList = [];
    }
}