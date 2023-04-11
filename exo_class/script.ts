import Hero from './modules/Hero';
import Monster from './modules/Monster';

const hero: Hero = new Hero();
const monster: Monster = new Monster();

console.log(`A simple hero contains only ${hero.getEyes()} eyes and ${hero.getArms()} arms but has the following super powers: ${hero.getPowers().join(', ')}`);
console.log(`A monster has ${monster.getEyes()} eyes and ${monster.getArms()} but no super powers :(`);
