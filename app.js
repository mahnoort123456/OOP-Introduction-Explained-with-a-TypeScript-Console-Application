import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.bold.green("*********Welcome to OOP Introduction Explained with a TypeScript Console Application**********"));
class Animal {
    name;
    sound;
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    makeSound() {
        console.log(`${this.name} says ${this.sound}`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name, 'Woof');
    }
    fetch() {
        console.log(`${this.name} is fetching!`);
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name, 'Meow');
    }
    scratch() {
        console.log(`${this.name} is scratching!`);
    }
}
async function main() {
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'animalType',
            message: 'Which animal do you want to create?',
            choices: ['Dog', 'Cat']
        },
        {
            type: 'input',
            name: 'animalName',
            message: 'What is the name of the animal?',
        }
    ]);
    let animal;
    if (answers.animalType === 'Dog') {
        animal = new Dog(answers.animalName);
    }
    else {
        animal = new Cat(answers.animalName);
    }
    animal.makeSound();
    if (animal instanceof Dog) {
        animal.fetch();
    }
    else if (animal instanceof Cat) {
        animal.scratch();
    }
}
main().catch(error => console.error(error));
