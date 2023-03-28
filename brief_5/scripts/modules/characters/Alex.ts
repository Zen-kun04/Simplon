import { Character } from "../Character";

export class Alex extends Character{
    constructor(){
        super("Alex");
    }
    a = this.getTaskName();
    b = this.getTaskSpeed();
}