import { LightningElement } from 'lwc';

export default class IfElseDemo extends LightningElement {
    showImage = true;

    TomUrl= "https://i.pinimg.com/originals/68/a6/7c/68a67c62366eaff0fa686f81d18ed4ea.png"
    JerryUrl= "https://i.pinimg.com/originals/83/56/96/835696578e94b4f710f241e81f19b8cf.png"
    handleClick() {
        this.showImage = !this.showImage;
    }
}