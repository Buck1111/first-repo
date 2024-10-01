class Battle {
    constructor(player, enemy) {
        this.player = player;
        this.enemy = enemy;
        this.turn = 'player'; // or 'enemy'
    }

    attack(attacker, defender) {
        defender.hp -= attacker.attackPower;
        if (defender.hp <= 0) {
            defender.hp = 0;
            this.endBattle(attacker);
        }
    }

    endBattle(winner) {
        alert(`${winner.name} wins the battle!`);
        // Return to the main game or handle post-battle logic
    }

    start() {
        // Initiate battle sequence
        if (this.turn === 'player') {
            // Player's turn logic
        } else {
            // Enemy's turn logic
        }
    }
}

// Example characters
const player = {
    name: 'Hero',
    hp: 100,
    attackPower: 10
};

const enemy = {
    name: 'Monster',
    hp: 80,
    attackPower: 8
};

const battle = new Battle(player, enemy);
battle.start();
