import {Animal} from "./Animal";

export class Dog extends Animal {

    public constructor(name: string) {
        super(name);

        this.feets = 4;
        this.speakSentence = "HafHaf";
    }
    clone(): Dog {
        return new Dog(this.name);
    }
}