import { Character } from "../Character";

export class Steve extends Character{
    constructor(){
        super("Steve");
    }
    a = this.getTaskName();
    b = this.getTaskSpeed();
}