import { LightningElement } from 'lwc';

export default class CalcDemo extends LightningElement {
    expression = '';
    result = 0;
   
   handleClr(){
        this.expression = '';
        this.result = 0;
    }

    handleClick(event){
        this.expression = this.expression+event.target.label;
        
    }

    handleResult(){
            this.result = eval(this.expression);
        
    }
}