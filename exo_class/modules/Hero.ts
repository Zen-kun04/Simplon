import Body from './Body';

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

export default Hero;