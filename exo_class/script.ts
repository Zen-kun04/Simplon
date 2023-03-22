
// Parent class
class Body{
    eyes: number = 2;
    arms: number = 2;

    getEyes(): number {
        return this.eyes;
    }

    getArms(): number {
        return this.arms;
    }

}

class Hero extends Body{
    super_powers: string[] = [
        "flight",
        "strength",
        "invulnerability"
    ];

    getPowers(): string[] {
        return this.super_powers;
    }
}

class Monster extends Body {
    // Added the constructor to be able to modify some Body variables ;)
    constructor() {
        super();
        this.eyes = 5;
        this.arms = 6;
    }
    
    getEyes(): number {
        return this.eyes;
    }

    getArms(): number {
        return this.arms;
    }
}

const hero: Hero = new Hero();
const monster: Monster = new Monster();

console.log(`A simple hero contains only ${hero.getEyes()} eyes and ${hero.getArms()} arms but has the following super powers: ${hero.getPowers().join(', ')}`);
console.log(`A monster has ${monster.getEyes()} eyes and ${monster.getArms()} but no super powers :(`);
