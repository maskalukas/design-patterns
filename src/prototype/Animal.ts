import { IPrototype} from "./interface";

export abstract class Animal {

    protected _name: string;

    protected feets: number;

    protected speakSentence: string;

    public constructor(name: string) {
        this._name = name;
    }

    public get name(): string {
        return this._name;
    }

    public abstract clone(): Animal;
}