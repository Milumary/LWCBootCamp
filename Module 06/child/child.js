import { LightningElement,api } from 'lwc';

export default class Child extends LightningElement {
    @api select1;
    @api select2;
    @api select3;

    @api childsel1 = 'Deselected';
    @api childsel2 = 'Deselected';
    @api childsel3 = 'Deselected';
    @api selNum = 0;
    
    handleClick(event){
        if(event.target.name === "selOne"){
            this.select1 = !this.select1;
            if(this.select1){
                this.childsel1 = "Selected";
                this.selNum += 1;
            }
            else{
                this.childsel1 = "Deselected";
                this.selNum -= 1;
            }
        }
        else if(event.target.name === "selTwo"){
            this.select2 = !this.select2;
            if(this.select2){
                this.childsel2 = "Selected";
                this.selNum += 1;
            }
            else{
                this.childsel2 = "Deselected";
                this.selNum -= 1;
            }
        }
        else if(event.target.name === "selThree"){
            this.select3 = !this.select3;
            if(this.select3){
                this.childsel3 = "Selected";
                this.selNum += 1;
            }
            else{
                this.childsel3 = "Deselected";
                this.selNum -= 1;
            }
        }
        const sourceevent = new CustomEvent('childclick',
                        {
                            bubbles:true,
                            composed:true,
                            detail : {selNum : this.selNum, status1 : this.status1,
                            status2 : this.status2, childsel3 : this.childsel3, select1 : this.select1, 
                            select2 : this.select2, select3 : this.select3}
                        });
        
        this.dispatchEvent(sourceevent);
    }

    @api
    ChildReset(){
        this.selNum = 0;
        this.select1 = false;
        this.select2 = false;
        this.select3 = false;
    }

}