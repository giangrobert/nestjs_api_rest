const myName = 'Gian';
const myAge = 13;

const suma = (a: number, b: number) => {
    return a + b;
}

suma(21, 45);

class Persona {

    constructor(private age: number, private name: string) {}

    getSummary() {
        return `my name is ${this.name}, ${this.age}`;
    }
}