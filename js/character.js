class Character {
    constructor(name, level, hp, attackPower, experience) {
        this.name = name;
        this.level = level;
        this.hp = hp;
        this.attackPower = attackPower;
        this.experience = experience;
        this.nextLevelExp = this.level * 100;
    }

    gainExperience(exp) {
        this.experience += exp;
        if (this.experience >= this.nextLevelExp) {
            this.levelUp();
        }
    }

    levelUp() {
        this.level += 1;
        this.hp += 20;
        this.attackPower += 5;
        this.experience = 0;
        this.nextLevelExp = this.level * 100;
        alert(`${this.name} leveled up to Level ${this.level}!`);
    }
}

// Initialize player character
const playerCharacter = new Character('Hero', 1, 100, 10, 0);
