import { LightningElement,wire } from 'lwc';
import findAccounts from '@salesforce/apex/AccountController.findAccounts';
import getContacts from '@salesforce/apex/AccountController.getContacts';
import getSelAcc from '@salesforce/apex/AccountController.getSelAcc';

const coloumns = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Title', fieldName: 'Title'},
    { label: 'Email', fieldName: 'Email'},
    { label: 'Phone', fieldName: 'Phone'}
];

export default class AccountLookup extends LightningElement {
    searchKey='';
    searchAccount=true;
    coloumns=coloumns;
    accountId;


    @wire(findAccounts,{searchKey:"$searchKey"})
    accounts;

    @wire(getContacts,{accountId:"$accountId"})
    contacts;

    @wire(getSelAcc,{accountId:"$accountId"})
    selaccounts;

    findAccounts(event) {
        this.searchKey = event.target.value;
    }

    accountSelect(event) {
        this.searchAccount = false;
        this.accountId = event.currentTarget.dataset.accountId;
    }

    resetSearch() {
        searchKey='';
        this.searchAccount = true;

    }


}