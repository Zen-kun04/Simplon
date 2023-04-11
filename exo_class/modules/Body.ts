class Body{
    
    eyes: number;
    arms: number;
    constructor(eyes: number, arms: number){
        this.eyes = eyes;
        this.arms = arms;
    }
    getEyes(): number {
        return this.eyes;
    }

    getArms(): number {
        return this.arms;
    }

}

export default Body;