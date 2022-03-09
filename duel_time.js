class Card {
    constructor (name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target){
        target.res -= this.power;
        console.log(`${this.name} attacks ${target.name} and their res descreased by ${this.power}`);
        console.log(target);


    }
}

class Effect extends Card {
    constructor (name, cost, stat, magnitude) {
        super(name, cost);
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play( target ) {
    if( target instanceof Unit ) {
        target[this.stat] += this.magnitude; 

        let theEffect = "increase";

        if (this.magnitude < 0) {
            theEffect = "descreased";
        }

        console.log(`${theEffect} target ${this.stat} by ${Math.abs(this.magnitude)}`);
        console.log(target);
    } else {
        throw new Error( "Target must be a unit!" );
    }
    }
}

const redNinja = new Unit ("Red Belt Ninja", 3, 3, 4);
const blackNinja = new Unit ("Black Belt Ninja", 4, 5, 4);
const hardAlgorithm = new Effect ("Hard Algorithm", 2,'res', 3);
const unhandledPromiseRejection = new Effect ("Unhandled Promise Rejection", 1, 'res', -2 );
const pairProgramming = new Effect ("Pair Programming", 3, "power", 2);

hardAlgorithm.play(redNinja);
unhandledPromiseRejection.play(redNinja);
pairProgramming.play(redNinja);

redNinja.attack(blackNinja);
