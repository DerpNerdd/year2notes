interface CharacterStats { strength: number; agility: number; intelligence: number; }

abstract class GameCharacter implements CharacterStats {
    public name: string;
    protected level: number;
    private _health: number;
    readonly id: string;
    static maxLevel: number = 100;

    strength: number;
    agility: number;
    intelligence: number;

    constructor( name: string, id: string, level: number, health: number, strength: number, agility: number, intelligence: number) {
        this.name = name;
        this.id = id;
        this.level = level;
        this._health = health;
        this.strength = strength;
        this.agility = agility;
        this.intelligence = intelligence;
    }

    get health(): number {
        return this._health;
    }

    set health(value: number) {
        if (value < 0) {
            this._health = 0;
        } else if (value > 100) {
            this._health = 100;
        } else {
            this._health = value;
        }
    }

    abstract attack(): string;

    levelUp(): void {
        if (this.level < GameCharacter.maxLevel) {
            this.level++;
        }
    }
}

class Warrior extends GameCharacter {
    constructor(name: string, id: string, level: number, health: number) {
        super(name, id, level, health, 80, 40, 20);
    }

    attack(): string {
        return `${this.name} swings thy fat ahh sword!`;
    }

    getStats(): CharacterStats {
        return {
            strength: this.strength,
            agility: this.agility,
            intelligence: this.intelligence
        };
    }
}

class Mage extends GameCharacter {
    constructor(name: string, id: string, level: number, health: number) {
        super(name, id, level, health, 20, 30, 80);
    }

    attack(): string {
        return `${this.name} casts thy glorious round balls of fire!`;
    }

    getStats(): CharacterStats {
        return {
            strength: this.strength,
            agility: this.agility,
            intelligence: this.intelligence
        };
    }
}

const warrior = new Warrior('Alan', '1', 1, 100);
console.log(warrior.attack());
console.log(warrior.getStats());
console.log(`Current Health: ${warrior.health}`);
warrior.health = 120;
console.log(`After setting to 120: ${warrior.health}`);
warrior.health = -20;
console.log(`After setting to -20: ${warrior.health}`);
warrior.health = 50;
console.log(`After setting to 50: ${warrior.health}`);
console.log(`Max Level: ${GameCharacter.maxLevel}`);

const mage = new Mage('Daniel', '2', 1, 50);
console.log(mage.attack());
console.log(mage.getStats());
console.log(`Current Health: ${mage.health}`);
mage.health = 120;
console.log(`After setting to 120: ${mage.health}`);
mage.health = -20;
console.log(`After setting to -20: ${mage.health}`);
mage.health = 50;
console.log(`After setting to 50: ${mage.health}`);
console.log(`Max Level: ${GameCharacter.maxLevel}`);

// console.log(mage._health);  
// console.log(mage.level); 