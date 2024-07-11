class Animal{
    constructor(name,color){
        this.name = name;
        this.color = color;
    }
    run(){
        console.log(`${this.name} is running`);
    }
    shout(){
        console.log(`${this.name} is shooting!`);
    }
}

class Monkey extends Animal{
    eatBananan(){
        console.log(`${this.name} is eating banana`);
    }
    hide(){
        console.log(`${this.name} is hiding`);
    }
}

let cat = new Animal("Kitty","White")
let monkey = new Monkey("Champa","orange")

cat.shout()