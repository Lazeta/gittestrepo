// статические члены класса, а не экземпляров
class Person {
    static PI: number = 3.14159;

    static calculateCircleArea(radius: number): number {
        return Person.PI * radius * radius;
    }
}

// обобщенные классы для работы с различными типами данных.
class Box<T extends string | number> {
    private value: T;

    constructor(value: T){
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

const stringBox = new Box<string>("Hello");
console.log(stringBox.getValue()); // Вывод: Hello

const numberBox = new Box<number>(25);
console.log(numberBox.getValue()); // Вывод: 25

// утилитный тип Partial в TS делает все свойства интерфейса или типа опциональными. Полезно если временно нужно работать с не заполненными объектами
interface User {
    id: number;
    name: string;
    email: string;
}

type PartialUser = Partial<User>;

const updateUser: PartialUser = { name: "Alice" }; // так как все типы интерфейса необязательны стали, то ошибки не будет.

