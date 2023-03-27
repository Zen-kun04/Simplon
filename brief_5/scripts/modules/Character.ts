import config from '../../config.json'

interface ChatCommands {
    heal: string,
    feed: string
}

class Character{
    life_speed: number = config.normal_character.low_speed.life;
    hunger_speed: number = config.normal_character.low_speed.hunger;
    chat_commands: ChatCommands = config.normal_character.chat;
    character_name: string | null = null;
    task_name: string | null = null;
    task_speed: number | null = null;
    constructor(name: string){
        this.character_name = name;
        this.task_name = config.characters[name].low_speed;
        this.task_speed = config.characters[name].low_speed[this.task_name]
    }
}

export default Character;