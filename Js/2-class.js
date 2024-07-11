class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;

    }

    introduce(){
        console.log(`Hello, My name is ${this.name} and I am ${this.age} years old`);
    }

    celebrateBirthday(){
        this.age += 1;
        console.log(`Happy Birthday ${this.name}! You are now ${this.age}`);
    }
}

const person1 = new Person(`Alice`,30)

person1.introduce();
person1.celebrateBirthday()