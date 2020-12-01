import { LightningElement,wire } from 'lwc';
import {publish,MessageContext} from 'lightning/messageService'
import SAMPLEMC from '@salesforce/messageChannel/sampleMessageChannel__c'

export default class ContactCreate extends LightningElement {

    cname;
    contactId;

    @wire(MessageContext) messageContext;

    setCname(event) {
        this.cname = event.target.value;
    }

    handleContactCreated(event) {
        this.contactId = event.detail.Id;
    }

    publishMessage(event) {
        const message= {
            lmsData: {
                contactName: this.cname.FirstName+' '+this.cname.LastName
            }
        };
        publish(this.messageContext,SAMPLEMC,message);
    }
    
}