import config from '../../config.json'

interface ChatCommands {
    heal: string,
    feed: string
}

export class Character{
    life_speed: number = config.normal_character.low_speed.life;
    hunger_speed: number = config.normal_character.low_speed.hunger;
    chat_commands: ChatCommands = config.normal_character.chat;
    character_name: string;
    task_name: string;
    task_speed: number;
    constructor(name: string){
        this.character_name = name.toLowerCase();
        this.task_name = Object.keys(config.characters[name.toLowerCase()].low_speed)[0]
        this.task_speed = config.characters[name.toLowerCase()].low_speed[this.task_name]
    }

    getLifeSpeed():number{
        return this.life_speed;
    }

    getHungerSpeed(): number{
        return this.hunger_speed;
    }

    getChatCommands(): ChatCommands{
        return this.chat_commands;
    }

    getCharacterName(): string{
        return this.character_name;
    }

    getTaskName(): string{
        return this.task_name;
    }

    getTaskSpeed(): number{
        return this.task_speed;
    }
}