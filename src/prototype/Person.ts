import { IPrototype} from "./interface";
import {Animal} from "./Animal";

export class Person implements IPrototype {

    private readonly _name: string;

    private  readonly _age: number;

    private _Animal: Animal = null;

    public constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    public get name(): string {
        return this._name;
    }

    public get age(): number {
        return this._age;
    }

    public get animal(): Animal {
        return this._Animal;
    }

    public setAnimal(Animal: Animal): void {
        this._Animal = Animal;
    }

    public clone(): IPrototype {
        const NewPerson = new Person(this.name, this.age);

        if(this.animal) {
            NewPerson.setAnimal(this.animal.clone());
        }

        return NewPerson;
    }

}