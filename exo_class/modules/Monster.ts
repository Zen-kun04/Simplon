import Body from './Body';

class Monster extends Body {
    // Added the constructor to be able to modify some Body variables ;)
    constructor() {
        super(5, 6);
    }
    
    getEyes(): number {
        return this.eyes;
    }

    getArms(): number {
        return this.arms;
    }
}

export default Monster;